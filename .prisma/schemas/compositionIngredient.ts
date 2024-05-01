import { z } from "zod";
import { CompositionSchema } from "./composition";
import { IngredientSchema } from "./ingredient";

export const CompositionIngredientSchema = z.object({
    composition: z.lazy(() => CompositionSchema),
    ingredient: z.lazy(() => IngredientSchema)
})