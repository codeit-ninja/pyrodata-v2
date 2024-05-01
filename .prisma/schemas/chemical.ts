import { z } from "zod";
import { PageSchema } from "./page";

export const ChemicalSchema = z.object({
    name: z.string().min(1),
    formula: z.string().optional(),
    page: z.lazy(() => PageSchema)
})