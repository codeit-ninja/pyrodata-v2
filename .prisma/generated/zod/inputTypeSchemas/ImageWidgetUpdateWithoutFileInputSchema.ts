import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { WidgetUpdateOneRequiredWithoutImageWidgetNestedInputSchema } from './WidgetUpdateOneRequiredWithoutImageWidgetNestedInputSchema';

export const ImageWidgetUpdateWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetUpdateWithoutFileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  widgets: z.lazy(() => WidgetUpdateOneRequiredWithoutImageWidgetNestedInputSchema).optional()
}).strict();

export default ImageWidgetUpdateWithoutFileInputSchema;
