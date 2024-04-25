import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const HazardSymbolsCountOrderByAggregateInputSchema: z.ZodType<Prisma.HazardSymbolsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default HazardSymbolsCountOrderByAggregateInputSchema;
