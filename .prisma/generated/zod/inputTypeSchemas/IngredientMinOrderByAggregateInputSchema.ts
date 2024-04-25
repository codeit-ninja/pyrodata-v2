import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IngredientMinOrderByAggregateInputSchema: z.ZodType<Prisma.IngredientMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  compositionId: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default IngredientMinOrderByAggregateInputSchema;
