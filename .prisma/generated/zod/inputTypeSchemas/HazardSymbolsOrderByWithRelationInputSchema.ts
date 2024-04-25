import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ChemicalOrderByRelationAggregateInputSchema } from './ChemicalOrderByRelationAggregateInputSchema';

export const HazardSymbolsOrderByWithRelationInputSchema: z.ZodType<Prisma.HazardSymbolsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  chemicals: z.lazy(() => ChemicalOrderByRelationAggregateInputSchema).optional()
}).strict();

export default HazardSymbolsOrderByWithRelationInputSchema;
