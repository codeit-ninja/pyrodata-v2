import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CategoryCountOrderByAggregateInputSchema } from './CategoryCountOrderByAggregateInputSchema';
import { CategoryMaxOrderByAggregateInputSchema } from './CategoryMaxOrderByAggregateInputSchema';
import { CategoryMinOrderByAggregateInputSchema } from './CategoryMinOrderByAggregateInputSchema';

export const CategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoryOrderByWithAggregationInput> = z.object({
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CategoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoryMinOrderByAggregateInputSchema).optional()
}).strict();

export default CategoryOrderByWithAggregationInputSchema;
