import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ImageWidgetCountOrderByAggregateInputSchema } from './ImageWidgetCountOrderByAggregateInputSchema';
import { ImageWidgetMaxOrderByAggregateInputSchema } from './ImageWidgetMaxOrderByAggregateInputSchema';
import { ImageWidgetMinOrderByAggregateInputSchema } from './ImageWidgetMinOrderByAggregateInputSchema';

export const ImageWidgetOrderByWithAggregationInputSchema: z.ZodType<Prisma.ImageWidgetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  widgetId: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ImageWidgetCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ImageWidgetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ImageWidgetMinOrderByAggregateInputSchema).optional()
}).strict();

export default ImageWidgetOrderByWithAggregationInputSchema;
