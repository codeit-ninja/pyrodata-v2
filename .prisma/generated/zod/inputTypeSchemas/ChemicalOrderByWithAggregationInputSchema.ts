import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ChemicalCountOrderByAggregateInputSchema } from './ChemicalCountOrderByAggregateInputSchema';
import { ChemicalMaxOrderByAggregateInputSchema } from './ChemicalMaxOrderByAggregateInputSchema';
import { ChemicalMinOrderByAggregateInputSchema } from './ChemicalMinOrderByAggregateInputSchema';

export const ChemicalOrderByWithAggregationInputSchema: z.ZodType<Prisma.ChemicalOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  formula: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ChemicalCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ChemicalMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ChemicalMinOrderByAggregateInputSchema).optional()
}).strict();

export default ChemicalOrderByWithAggregationInputSchema;
