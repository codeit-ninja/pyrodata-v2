import { z } from 'zod';
import { PageSchema } from './page';

export const IngredientSchema = z.object({
    amount: z.number().min(1).max(100),
    name: z.string().min(1),
    note: z.string().optional(),
    page: z.lazy(() => PageSchema).optional()
})

export type IngredientSchema = z.infer<typeof IngredientSchema>;