import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IngredientAvgOrderByAggregateInputSchema: z.ZodType<Prisma.IngredientAvgOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default IngredientAvgOrderByAggregateInputSchema;
