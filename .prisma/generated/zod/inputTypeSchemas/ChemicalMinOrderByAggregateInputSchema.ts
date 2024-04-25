import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ChemicalMinOrderByAggregateInputSchema: z.ZodType<Prisma.ChemicalMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  formula: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ChemicalMinOrderByAggregateInputSchema;
