import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { HazardSymbolsOrderByRelationAggregateInputSchema } from './HazardSymbolsOrderByRelationAggregateInputSchema';
import { PageOrderByWithRelationInputSchema } from './PageOrderByWithRelationInputSchema';

export const ChemicalOrderByWithRelationInputSchema: z.ZodType<Prisma.ChemicalOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  formula: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional(),
  hazards: z.lazy(() => HazardSymbolsOrderByRelationAggregateInputSchema).optional(),
  page: z.lazy(() => PageOrderByWithRelationInputSchema).optional()
}).strict();

export default ChemicalOrderByWithRelationInputSchema;
