import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetUncheckedCreateNestedManyWithoutFileInputSchema } from './ImageWidgetUncheckedCreateNestedManyWithoutFileInputSchema';
import { CompositionUncheckedCreateNestedManyWithoutVideoInputSchema } from './CompositionUncheckedCreateNestedManyWithoutVideoInputSchema';

export const FileUncheckedCreateWithoutPageInputSchema: z.ZodType<Prisma.FileUncheckedCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  location: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedCreateNestedManyWithoutFileInputSchema).optional(),
  composition: z.lazy(() => CompositionUncheckedCreateNestedManyWithoutVideoInputSchema).optional()
}).strict();

export default FileUncheckedCreateWithoutPageInputSchema;
