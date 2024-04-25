import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const HazardSymbolsMinOrderByAggregateInputSchema: z.ZodType<Prisma.HazardSymbolsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default HazardSymbolsMinOrderByAggregateInputSchema;
