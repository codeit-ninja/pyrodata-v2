import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ChemicalOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ChemicalOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ChemicalOrderByRelationAggregateInputSchema;
