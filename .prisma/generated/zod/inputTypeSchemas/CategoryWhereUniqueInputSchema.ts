import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { PageListRelationFilterSchema } from './PageListRelationFilterSchema';

export const CategoryWhereUniqueInputSchema: z.ZodType<Prisma.CategoryWhereUniqueInput> = z.union([
  z.object({
    title: z.string(),
    slug: z.string()
  }),
  z.object({
    title: z.string(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.object({
  title: z.string().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  page: z.lazy(() => PageListRelationFilterSchema).optional()
}).strict());

export default CategoryWhereUniqueInputSchema;
