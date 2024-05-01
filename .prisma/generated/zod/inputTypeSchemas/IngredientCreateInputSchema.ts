import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateNestedOneWithoutIngredientsInputSchema } from './PageCreateNestedOneWithoutIngredientsInputSchema';
import { CompositionCreateNestedOneWithoutIngredientsInputSchema } from './CompositionCreateNestedOneWithoutIngredientsInputSchema';

export const IngredientCreateInputSchema: z.ZodType<Prisma.IngredientCreateInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  page: z.lazy(() => PageCreateNestedOneWithoutIngredientsInputSchema).optional(),
  composition: z.lazy(() => CompositionCreateNestedOneWithoutIngredientsInputSchema)
}).strict();

export default IngredientCreateInputSchema;
