import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const CompositionCategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CompositionCategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CompositionCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CompositionCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionCategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CompositionCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default CompositionCategoryScalarWhereWithAggregatesInputSchema;
