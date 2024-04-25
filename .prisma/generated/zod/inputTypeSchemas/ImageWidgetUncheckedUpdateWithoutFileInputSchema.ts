import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const ImageWidgetUncheckedUpdateWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedUpdateWithoutFileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  widgetId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ImageWidgetUncheckedUpdateWithoutFileInputSchema;
