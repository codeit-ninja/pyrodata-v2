import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const IngredientScalarWhereInputSchema: z.ZodType<Prisma.IngredientScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => IngredientScalarWhereInputSchema),z.lazy(() => IngredientScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IngredientScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IngredientScalarWhereInputSchema),z.lazy(() => IngredientScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  compositionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pageId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default IngredientScalarWhereInputSchema;
