import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCategoryWhereInputSchema } from './CompositionCategoryWhereInputSchema';
import { CompositionListRelationFilterSchema } from './CompositionListRelationFilterSchema';

export const CompositionCategoryWhereUniqueInputSchema: z.ZodType<Prisma.CompositionCategoryWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string(),
    slug: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    name: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    slug: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
    slug: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => CompositionCategoryWhereInputSchema),z.lazy(() => CompositionCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionCategoryWhereInputSchema),z.lazy(() => CompositionCategoryWhereInputSchema).array() ]).optional(),
  compositions: z.lazy(() => CompositionListRelationFilterSchema).optional()
}).strict());

export default CompositionCategoryWhereUniqueInputSchema;
