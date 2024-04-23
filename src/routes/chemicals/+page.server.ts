import type { Prisma } from "@prisma/client";

type ChemicalResponse = Prisma.ChemicalGetPayload<{ include: { hazards: true, page: { include: { featuredImage: true } } } }>

export const load = async ( { fetch } ) => {
    const request = await fetch('/api/chemicals');

    return {
        chemicals: await request.json() as ChemicalResponse[]
    }
}