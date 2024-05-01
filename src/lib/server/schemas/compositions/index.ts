import type { createCompositionSchema } from "./schema";
import { db } from "$lib/db";

/**
 * Create a new composition resource
 * 
 * @param {createCompositionSchema} data
 */
export const createComposition = async (data: createCompositionSchema) => {
    const { name, description, ingredients, videoId } = data;

    return await db.composition.create({
        data: {
            name,
            description,
            video: { connect: { id: videoId } },
            ingredients: {
                createMany: {
                    data: ingredients
                }
            }
        },
        include: {
            ingredients: true,
            categories: true,
            submittedBy: true,
            video: true
        }
    })
}

export const update = () => {

}

export * from './schema';