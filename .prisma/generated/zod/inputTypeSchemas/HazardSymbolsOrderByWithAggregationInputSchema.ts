import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { HazardSymbolsCountOrderByAggregateInputSchema } from './HazardSymbolsCountOrderByAggregateInputSchema';
import { HazardSymbolsMaxOrderByAggregateInputSchema } from './HazardSymbolsMaxOrderByAggregateInputSchema';
import { HazardSymbolsMinOrderByAggregateInputSchema } from './HazardSymbolsMinOrderByAggregateInputSchema';

export const HazardSymbolsOrderByWithAggregationInputSchema: z.ZodType<Prisma.HazardSymbolsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HazardSymbolsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HazardSymbolsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HazardSymbolsMinOrderByAggregateInputSchema).optional()
}).strict();

export default HazardSymbolsOrderByWithAggregationInputSchema;
