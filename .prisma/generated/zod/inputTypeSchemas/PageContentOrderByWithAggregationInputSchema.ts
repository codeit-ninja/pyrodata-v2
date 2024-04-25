import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PageContentCountOrderByAggregateInputSchema } from './PageContentCountOrderByAggregateInputSchema';
import { PageContentMaxOrderByAggregateInputSchema } from './PageContentMaxOrderByAggregateInputSchema';
import { PageContentMinOrderByAggregateInputSchema } from './PageContentMinOrderByAggregateInputSchema';

export const PageContentOrderByWithAggregationInputSchema: z.ZodType<Prisma.PageContentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  html: z.lazy(() => SortOrderSchema).optional(),
  sidebar: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PageContentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PageContentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PageContentMinOrderByAggregateInputSchema).optional()
}).strict();

export default PageContentOrderByWithAggregationInputSchema;
