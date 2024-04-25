import { db } from "$lib/db.js";
import { getSearchParams } from "$lib/request";
import { json } from "@sveltejs/kit";

type SearchParams = {
    limit?: number;
    q?: string;
}

export const GET = async ({ url }) => {
    const searchParams = getSearchParams<SearchParams>(url);

    const pages = await db.page.findMany({
        where: {
            title: { contains: searchParams.q, mode: 'insensitive' }
        },
        take: searchParams.limit ?? 25
    })

    return json(pages);
}