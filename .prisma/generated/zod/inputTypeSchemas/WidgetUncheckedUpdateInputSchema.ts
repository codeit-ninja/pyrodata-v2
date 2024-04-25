import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ImageWidgetUncheckedUpdateOneWithoutWidgetsNestedInputSchema } from './ImageWidgetUncheckedUpdateOneWithoutWidgetsNestedInputSchema';

export const WidgetUncheckedUpdateInputSchema: z.ZodType<Prisma.WidgetUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageContentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedUpdateOneWithoutWidgetsNestedInputSchema).optional()
}).strict();

export default WidgetUncheckedUpdateInputSchema;
