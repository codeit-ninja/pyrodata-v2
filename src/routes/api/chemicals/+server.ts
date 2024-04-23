import { db } from "$lib/db.js";
import { getSearchParams } from "$lib/request";
import { json } from "@sveltejs/kit";

type SearchParams = {
    limit?: number;
    q?: string;
}

export const GET = async ({ url }) => {
    const searchParams = getSearchParams<SearchParams>(url);

    const chemicals = await db.chemical.findMany({
        take: searchParams.limit,
        where: {
            name: {
                contains: searchParams.q,
                mode: 'insensitive'
            }
        },
        include: {
            hazards: true,
            page: {
                include: {
                    content: true,
                    featuredImage: true
                }
            }
        }
    })

    return json(chemicals);
}