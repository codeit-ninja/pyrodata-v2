import { vine } from "$lib/vine";
import type { Infer } from "@vinejs/vine/types"

export const createFileSchema = vine.object({
    location: vine.string(),
    title: vine.string(),
    description: vine.string().optional(),
    mimeType: vine.string().optional(),
    userId: vine.string().cuid().optional()
})

export type createFileSchema = Infer<typeof createFileSchema>

export const validator = vine.compile(createFileSchema);