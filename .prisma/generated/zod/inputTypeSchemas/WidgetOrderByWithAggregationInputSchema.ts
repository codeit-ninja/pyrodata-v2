import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WidgetCountOrderByAggregateInputSchema } from './WidgetCountOrderByAggregateInputSchema';
import { WidgetMaxOrderByAggregateInputSchema } from './WidgetMaxOrderByAggregateInputSchema';
import { WidgetMinOrderByAggregateInputSchema } from './WidgetMinOrderByAggregateInputSchema';

export const WidgetOrderByWithAggregationInputSchema: z.ZodType<Prisma.WidgetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WidgetCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WidgetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WidgetMinOrderByAggregateInputSchema).optional()
}).strict();

export default WidgetOrderByWithAggregationInputSchema;
