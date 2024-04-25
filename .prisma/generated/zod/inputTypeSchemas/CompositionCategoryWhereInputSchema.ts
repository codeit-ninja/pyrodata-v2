import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { CompositionListRelationFilterSchema } from './CompositionListRelationFilterSchema';

export const CompositionCategoryWhereInputSchema: z.ZodType<Prisma.CompositionCategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompositionCategoryWhereInputSchema),z.lazy(() => CompositionCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionCategoryWhereInputSchema),z.lazy(() => CompositionCategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  compositions: z.lazy(() => CompositionListRelationFilterSchema).optional()
}).strict();

export default CompositionCategoryWhereInputSchema;
