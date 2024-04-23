import { db } from '$lib/db.js';

export const GET = async ({ params, fetch }) => {
    const image = await db.file.findFirstOrThrow({
        where: {
            OR: [
                {
                    id: params.imageId
                },
                {
                    name: params.imageId
                }
            ]
        }
    })
    
    try {
        const response = await fetch(`/uploads/${image.name}`);
        const blob = await response.blob();

        return new Response(blob);
    } catch(_) {
        return new Response('');
    }
}