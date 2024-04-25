import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FileUpdateOneRequiredWithoutImageWidgetNestedInputSchema } from './FileUpdateOneRequiredWithoutImageWidgetNestedInputSchema';

export const ImageWidgetUpdateWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetUpdateWithoutWidgetsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  file: z.lazy(() => FileUpdateOneRequiredWithoutImageWidgetNestedInputSchema).optional()
}).strict();

export default ImageWidgetUpdateWithoutWidgetsInputSchema;
