import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { WidgetUpdateOneRequiredWithoutImageWidgetNestedInputSchema } from './WidgetUpdateOneRequiredWithoutImageWidgetNestedInputSchema';
import { FileUpdateOneRequiredWithoutImageWidgetNestedInputSchema } from './FileUpdateOneRequiredWithoutImageWidgetNestedInputSchema';

export const ImageWidgetUpdateInputSchema: z.ZodType<Prisma.ImageWidgetUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  widgets: z.lazy(() => WidgetUpdateOneRequiredWithoutImageWidgetNestedInputSchema).optional(),
  file: z.lazy(() => FileUpdateOneRequiredWithoutImageWidgetNestedInputSchema).optional()
}).strict();

export default ImageWidgetUpdateInputSchema;
