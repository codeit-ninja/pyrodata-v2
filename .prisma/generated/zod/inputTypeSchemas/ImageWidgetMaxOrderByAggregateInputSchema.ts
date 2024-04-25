import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ImageWidgetMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ImageWidgetMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  widgetId: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ImageWidgetMaxOrderByAggregateInputSchema;
