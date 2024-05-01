import { createCompositionSchema, createComposition } from "$lib/server/schemas/compositions";
import { db } from "$lib/db";
import { getSearchParams, validate } from "$lib/request";
import { json } from "@sveltejs/kit";

type SearchParams = {
    limit?: number;
    page?: number;
    query?: string;
    contains?: string;
    type?: string;
}

export const GET = async ({ url }) => {
    const { contains, limit = 50, page = 1, query, type } = getSearchParams<SearchParams>(url);
    
    const compositions = await db.composition.findMany({
        take: contains ? 10000 : limit,
        skip: contains ? 0 : (page - 1) * limit,
        where: {
            name: {
                contains: query,
                mode: 'insensitive'
            },
            categories: {
                every: {
                    id: type
                }
            },
        },
        include: {
            ingredients: { include: { page: { include: { chemical: true } } } },
            categories: true,
            submittedBy: true,
            video: true
        }
    });

    const count = await db.composition.aggregate({
        _count: true,
        where: {
            name: {
                contains: query,
                mode: 'insensitive'
            },
            categories: {
                every: {
                    id: type
                }
            },
        }
    })

    let result = compositions;
    let total = count._count;

    // TODO: Can do this with prisma SDK? I haven't been able to do so yet ..
    if (contains) {
        result = compositions.filter( composition => {
            return contains?.split(',').every(id => {
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
        
        total = result.length;
        result = result.splice((page - 1) * limit, limit);
    }
    
    return json({
        data: result,
        meta: {
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            count: total
        }
    });
}

export const POST = async ({ locals, request }) => {
    const [data, error] = await validate(createCompositionSchema, request)
    
    if (error || !data) {
        return json(error, { status: 400 })
    }

    const response = await createComposition(data);

    return json(response);
}