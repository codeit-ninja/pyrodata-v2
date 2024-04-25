import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const HazardSymbolsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.HazardSymbolsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default HazardSymbolsOrderByRelationAggregateInputSchema;
