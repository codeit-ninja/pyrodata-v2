import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PageCountOrderByAggregateInputSchema } from './PageCountOrderByAggregateInputSchema';
import { PageMaxOrderByAggregateInputSchema } from './PageMaxOrderByAggregateInputSchema';
import { PageMinOrderByAggregateInputSchema } from './PageMinOrderByAggregateInputSchema';

export const PageOrderByWithAggregationInputSchema: z.ZodType<Prisma.PageOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  featuredImageId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional(),
  categorySlug: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PageCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PageMinOrderByAggregateInputSchema).optional()
}).strict();

export default PageOrderByWithAggregationInputSchema;
