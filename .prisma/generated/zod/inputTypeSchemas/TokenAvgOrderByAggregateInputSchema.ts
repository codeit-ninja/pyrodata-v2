import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TokenAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TokenAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TokenAvgOrderByAggregateInputSchema;
