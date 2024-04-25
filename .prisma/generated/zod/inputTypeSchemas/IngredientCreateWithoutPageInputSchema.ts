import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreateNestedOneWithoutIngredientsInputSchema } from './CompositionCreateNestedOneWithoutIngredientsInputSchema';

export const IngredientCreateWithoutPageInputSchema: z.ZodType<Prisma.IngredientCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  composition: z.lazy(() => CompositionCreateNestedOneWithoutIngredientsInputSchema)
}).strict();

export default IngredientCreateWithoutPageInputSchema;
