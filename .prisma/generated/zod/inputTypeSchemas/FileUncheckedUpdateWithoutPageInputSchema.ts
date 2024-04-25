import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ImageWidgetUncheckedUpdateManyWithoutFileNestedInputSchema } from './ImageWidgetUncheckedUpdateManyWithoutFileNestedInputSchema';
import { CompositionUncheckedUpdateManyWithoutVideoNestedInputSchema } from './CompositionUncheckedUpdateManyWithoutVideoNestedInputSchema';

export const FileUncheckedUpdateWithoutPageInputSchema: z.ZodType<Prisma.FileUncheckedUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mimeType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedUpdateManyWithoutFileNestedInputSchema).optional(),
  composition: z.lazy(() => CompositionUncheckedUpdateManyWithoutVideoNestedInputSchema).optional()
}).strict();

export default FileUncheckedUpdateWithoutPageInputSchema;