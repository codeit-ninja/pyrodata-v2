import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { IngredientCountOrderByAggregateInputSchema } from './IngredientCountOrderByAggregateInputSchema';
import { IngredientAvgOrderByAggregateInputSchema } from './IngredientAvgOrderByAggregateInputSchema';
import { IngredientMaxOrderByAggregateInputSchema } from './IngredientMaxOrderByAggregateInputSchema';
import { IngredientMinOrderByAggregateInputSchema } from './IngredientMinOrderByAggregateInputSchema';
import { IngredientSumOrderByAggregateInputSchema } from './IngredientSumOrderByAggregateInputSchema';

export const IngredientOrderByWithAggregationInputSchema: z.ZodType<Prisma.IngredientOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  compositionId: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => IngredientCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => IngredientAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IngredientMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IngredientMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => IngredientSumOrderByAggregateInputSchema).optional()
}).strict();

export default IngredientOrderByWithAggregationInputSchema;
