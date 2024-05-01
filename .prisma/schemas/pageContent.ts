import { z } from "zod";

export const PageContentSchema = z.object({
    html: z.string().min(1),
    sidebar: z.boolean().default(false)
})