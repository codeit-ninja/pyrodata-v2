import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TokenCountOrderByAggregateInputSchema } from './TokenCountOrderByAggregateInputSchema';
import { TokenAvgOrderByAggregateInputSchema } from './TokenAvgOrderByAggregateInputSchema';
import { TokenMaxOrderByAggregateInputSchema } from './TokenMaxOrderByAggregateInputSchema';
import { TokenMinOrderByAggregateInputSchema } from './TokenMinOrderByAggregateInputSchema';
import { TokenSumOrderByAggregateInputSchema } from './TokenSumOrderByAggregateInputSchema';

export const TokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.TokenOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TokenCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TokenAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TokenMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TokenSumOrderByAggregateInputSchema).optional()
}).strict();

export default TokenOrderByWithAggregationInputSchema;
