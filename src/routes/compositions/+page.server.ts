import { db } from "$lib/db"

export const load = async () => {
    const compositions = await db.composition.findMany({
        include: {
            categories: true,
            ingredients: {
                include: {
                    page: true
                }
            },
            video: true
        }
    });

    const categories = await db.compositionCategory.findMany({ take: 100 });
    const chemicals = await db.chemical.findMany({ take: 1000 });

    return {
        categories,
        chemicals,
        compositions
    }
}