import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PageContentUpdateOneRequiredWithoutWidgetsNestedInputSchema } from './PageContentUpdateOneRequiredWithoutWidgetsNestedInputSchema';
import { ImageWidgetUpdateOneWithoutWidgetsNestedInputSchema } from './ImageWidgetUpdateOneWithoutWidgetsNestedInputSchema';

export const WidgetUpdateInputSchema: z.ZodType<Prisma.WidgetUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageContent: z.lazy(() => PageContentUpdateOneRequiredWithoutWidgetsNestedInputSchema).optional(),
  imageWidget: z.lazy(() => ImageWidgetUpdateOneWithoutWidgetsNestedInputSchema).optional()
}).strict();

export default WidgetUpdateInputSchema;
