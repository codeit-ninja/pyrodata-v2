import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const IngredientScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.IngredientScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => IngredientScalarWhereWithAggregatesInputSchema),z.lazy(() => IngredientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => IngredientScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IngredientScalarWhereWithAggregatesInputSchema),z.lazy(() => IngredientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  note: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  compositionId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pageId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default IngredientScalarWhereWithAggregatesInputSchema;
