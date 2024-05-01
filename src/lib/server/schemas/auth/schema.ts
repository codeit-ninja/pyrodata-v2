import { vine } from "$lib/vine";
import type { Infer } from "@vinejs/vine/types"

export const loginSchema = vine.object({
    username: vine.string(),
    password: vine.string(),
})

export type loginSchema = Infer<typeof loginSchema>

export const validator = vine.compile(loginSchema);