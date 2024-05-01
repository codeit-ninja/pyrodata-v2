import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ImageWidgetUncheckedUpdateManyWithoutFileNestedInputSchema } from './ImageWidgetUncheckedUpdateManyWithoutFileNestedInputSchema';
import { PageUncheckedUpdateManyWithoutFeaturedImageNestedInputSchema } from './PageUncheckedUpdateManyWithoutFeaturedImageNestedInputSchema';

export const FileUncheckedUpdateWithoutCompositionInputSchema: z.ZodType<Prisma.FileUncheckedUpdateWithoutCompositionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mimeType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedUpdateManyWithoutFileNestedInputSchema).optional(),
  page: z.lazy(() => PageUncheckedUpdateManyWithoutFeaturedImageNestedInputSchema).optional()
}).strict();

export default FileUncheckedUpdateWithoutCompositionInputSchema;
