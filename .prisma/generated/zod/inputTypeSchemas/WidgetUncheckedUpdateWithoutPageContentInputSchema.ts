import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ImageWidgetUncheckedUpdateOneWithoutWidgetsNestedInputSchema } from './ImageWidgetUncheckedUpdateOneWithoutWidgetsNestedInputSchema';

export const WidgetUncheckedUpdateWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUncheckedUpdateWithoutPageContentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedUpdateOneWithoutWidgetsNestedInputSchema).optional()
}).strict();

export default WidgetUncheckedUpdateWithoutPageContentInputSchema;
