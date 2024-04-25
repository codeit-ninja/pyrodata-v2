import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateNestedOneWithoutIngredientsInputSchema } from './PageCreateNestedOneWithoutIngredientsInputSchema';

export const IngredientCreateWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientCreateWithoutCompositionInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  page: z.lazy(() => PageCreateNestedOneWithoutIngredientsInputSchema).optional()
}).strict();

export default IngredientCreateWithoutCompositionInputSchema;
