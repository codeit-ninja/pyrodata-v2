import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { PageUpdateManyWithoutFeaturedImageNestedInputSchema } from './PageUpdateManyWithoutFeaturedImageNestedInputSchema';
import { CompositionUpdateManyWithoutVideoNestedInputSchema } from './CompositionUpdateManyWithoutVideoNestedInputSchema';
import { UserUpdateOneWithoutFilesNestedInputSchema } from './UserUpdateOneWithoutFilesNestedInputSchema';

export const FileUpdateWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileUpdateWithoutImageWidgetInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mimeType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateManyWithoutFeaturedImageNestedInputSchema).optional(),
  composition: z.lazy(() => CompositionUpdateManyWithoutVideoNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneWithoutFilesNestedInputSchema).optional()
}).strict();

export default FileUpdateWithoutImageWidgetInputSchema;
