import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { EditorWidgetCountOrderByAggregateInputSchema } from './EditorWidgetCountOrderByAggregateInputSchema';
import { EditorWidgetAvgOrderByAggregateInputSchema } from './EditorWidgetAvgOrderByAggregateInputSchema';
import { EditorWidgetMaxOrderByAggregateInputSchema } from './EditorWidgetMaxOrderByAggregateInputSchema';
import { EditorWidgetMinOrderByAggregateInputSchema } from './EditorWidgetMinOrderByAggregateInputSchema';
import { EditorWidgetSumOrderByAggregateInputSchema } from './EditorWidgetSumOrderByAggregateInputSchema';

export const EditorWidgetOrderByWithAggregationInputSchema: z.ZodType<Prisma.EditorWidgetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EditorWidgetCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EditorWidgetAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EditorWidgetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EditorWidgetMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EditorWidgetSumOrderByAggregateInputSchema).optional()
}).strict();

export default EditorWidgetOrderByWithAggregationInputSchema;
