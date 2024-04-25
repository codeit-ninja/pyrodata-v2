import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ImageWidgetMinOrderByAggregateInputSchema: z.ZodType<Prisma.ImageWidgetMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  widgetId: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ImageWidgetMinOrderByAggregateInputSchema;
