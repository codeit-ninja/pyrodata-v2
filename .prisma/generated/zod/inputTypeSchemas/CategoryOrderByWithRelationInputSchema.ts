import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PageOrderByRelationAggregateInputSchema } from './PageOrderByRelationAggregateInputSchema';

export const CategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z.object({
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  page: z.lazy(() => PageOrderByRelationAggregateInputSchema).optional()
}).strict();

export default CategoryOrderByWithRelationInputSchema;
