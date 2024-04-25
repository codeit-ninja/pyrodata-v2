import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreateNestedOneWithoutIngredientsInputSchema } from './CompositionCreateNestedOneWithoutIngredientsInputSchema';
import { PageCreateNestedOneWithoutIngredientsInputSchema } from './PageCreateNestedOneWithoutIngredientsInputSchema';

export const IngredientCreateInputSchema: z.ZodType<Prisma.IngredientCreateInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  composition: z.lazy(() => CompositionCreateNestedOneWithoutIngredientsInputSchema),
  page: z.lazy(() => PageCreateNestedOneWithoutIngredientsInputSchema).optional()
}).strict();

export default IngredientCreateInputSchema;
