import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';

export const CompositionCategoryScalarWhereInputSchema: z.ZodType<Prisma.CompositionCategoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompositionCategoryScalarWhereInputSchema),z.lazy(() => CompositionCategoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionCategoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionCategoryScalarWhereInputSchema),z.lazy(() => CompositionCategoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default CompositionCategoryScalarWhereInputSchema;
