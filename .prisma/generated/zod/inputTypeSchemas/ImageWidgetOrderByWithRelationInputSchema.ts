import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WidgetOrderByWithRelationInputSchema } from './WidgetOrderByWithRelationInputSchema';
import { FileOrderByWithRelationInputSchema } from './FileOrderByWithRelationInputSchema';

export const ImageWidgetOrderByWithRelationInputSchema: z.ZodType<Prisma.ImageWidgetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  widgetId: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional(),
  widgets: z.lazy(() => WidgetOrderByWithRelationInputSchema).optional(),
  file: z.lazy(() => FileOrderByWithRelationInputSchema).optional()
}).strict();

export default ImageWidgetOrderByWithRelationInputSchema;
