import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ImageWidgetCountOrderByAggregateInputSchema: z.ZodType<Prisma.ImageWidgetCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  widgetId: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ImageWidgetCountOrderByAggregateInputSchema;
