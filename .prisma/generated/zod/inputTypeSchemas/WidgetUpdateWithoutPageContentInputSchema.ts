import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ImageWidgetUpdateOneWithoutWidgetsNestedInputSchema } from './ImageWidgetUpdateOneWithoutWidgetsNestedInputSchema';

export const WidgetUpdateWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUpdateWithoutPageContentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  imageWidget: z.lazy(() => ImageWidgetUpdateOneWithoutWidgetsNestedInputSchema).optional()
}).strict();

export default WidgetUpdateWithoutPageContentInputSchema;
