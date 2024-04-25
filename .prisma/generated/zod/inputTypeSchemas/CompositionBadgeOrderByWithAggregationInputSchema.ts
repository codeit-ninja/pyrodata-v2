import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CompositionBadgeCountOrderByAggregateInputSchema } from './CompositionBadgeCountOrderByAggregateInputSchema';
import { CompositionBadgeAvgOrderByAggregateInputSchema } from './CompositionBadgeAvgOrderByAggregateInputSchema';
import { CompositionBadgeMaxOrderByAggregateInputSchema } from './CompositionBadgeMaxOrderByAggregateInputSchema';
import { CompositionBadgeMinOrderByAggregateInputSchema } from './CompositionBadgeMinOrderByAggregateInputSchema';
import { CompositionBadgeSumOrderByAggregateInputSchema } from './CompositionBadgeSumOrderByAggregateInputSchema';

export const CompositionBadgeOrderByWithAggregationInputSchema: z.ZodType<Prisma.CompositionBadgeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CompositionBadgeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CompositionBadgeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CompositionBadgeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CompositionBadgeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CompositionBadgeSumOrderByAggregateInputSchema).optional()
}).strict();

export default CompositionBadgeOrderByWithAggregationInputSchema;
