import { db } from '$lib/db.js'

export const load = async ({ params }) => {
    const chemical = await db.chemical.findFirstOrThrow({
        where: {
            page: {
                slug: params.slug
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

    return {
        chemical
    }
}