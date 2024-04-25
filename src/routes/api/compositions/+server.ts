import { db } from "$lib/db.js";
import { getSearchParams } from "$lib/request";
import { json } from "@sveltejs/kit";

type SearchParams = {
    limit?: number;
    q?: string;
    contains?: string;
    type?: string;
}

export const GET = async ({ url }) => {
    const searchParams = getSearchParams<SearchParams>(url);
    
    const compositions = await db.composition.findMany({
        take: searchParams.contains ? 1000 : searchParams.limit ?? 50,
        where: {
            name: {
                contains: searchParams.q,
                mode: 'insensitive'
            },
            categories: {
                every: {
                    id: searchParams.type
                }
            },
        },
        include: {
            ingredients: {
                include: {
                    page: {
                        include: {
                            chemical: true
                        }
                    }
                }
            }
        }
    });

    let result = compositions;

    // TODO: Can do this with prisma SDK? I haven't been able to do so yet ..
    if (searchParams.contains) {
        result = compositions.filter( composition => {
            return searchParams.contains?.split(',').every(id => {
                for(const ingredient of composition.ingredients) {
                    if(!ingredient.page?.chemical?.id) {
                        continue;
                    }
    
                    if(ingredient.page.chemical.id === id) {
                        return true;
                    }
                }
            })
        })
    }    
    
    return json(result);
}