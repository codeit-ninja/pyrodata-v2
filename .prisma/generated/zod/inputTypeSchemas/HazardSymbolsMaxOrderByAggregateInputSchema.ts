import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const HazardSymbolsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HazardSymbolsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default HazardSymbolsMaxOrderByAggregateInputSchema;
