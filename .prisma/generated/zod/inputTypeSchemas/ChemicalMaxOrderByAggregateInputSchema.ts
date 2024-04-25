import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ChemicalMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ChemicalMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  formula: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ChemicalMaxOrderByAggregateInputSchema;
