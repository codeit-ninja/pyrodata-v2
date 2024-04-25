import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CompositionCountOrderByAggregateInputSchema } from './CompositionCountOrderByAggregateInputSchema';
import { CompositionMaxOrderByAggregateInputSchema } from './CompositionMaxOrderByAggregateInputSchema';
import { CompositionMinOrderByAggregateInputSchema } from './CompositionMinOrderByAggregateInputSchema';

export const CompositionOrderByWithAggregationInputSchema: z.ZodType<Prisma.CompositionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  videoId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  badges: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CompositionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CompositionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CompositionMinOrderByAggregateInputSchema).optional()
}).strict();

export default CompositionOrderByWithAggregationInputSchema;
