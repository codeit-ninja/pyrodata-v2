import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CompositionCategoryCountOrderByAggregateInputSchema } from './CompositionCategoryCountOrderByAggregateInputSchema';
import { CompositionCategoryMaxOrderByAggregateInputSchema } from './CompositionCategoryMaxOrderByAggregateInputSchema';
import { CompositionCategoryMinOrderByAggregateInputSchema } from './CompositionCategoryMinOrderByAggregateInputSchema';

export const CompositionCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.CompositionCategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CompositionCategoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CompositionCategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CompositionCategoryMinOrderByAggregateInputSchema).optional()
}).strict();

export default CompositionCategoryOrderByWithAggregationInputSchema;
