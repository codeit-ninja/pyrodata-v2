import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetUncheckedCreateNestedManyWithoutFileInputSchema } from './ImageWidgetUncheckedCreateNestedManyWithoutFileInputSchema';
import { PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema } from './PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema';

export const FileUncheckedCreateWithoutCompositionInputSchema: z.ZodType<Prisma.FileUncheckedCreateWithoutCompositionInput> = z.object({
  id: z.string().cuid().optional(),
  location: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedCreateNestedManyWithoutFileInputSchema).optional(),
  page: z.lazy(() => PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema).optional()
}).strict();

export default FileUncheckedCreateWithoutCompositionInputSchema;
