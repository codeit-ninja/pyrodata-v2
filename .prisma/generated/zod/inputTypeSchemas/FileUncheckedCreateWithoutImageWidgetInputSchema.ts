import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema } from './PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema';
import { CompositionUncheckedCreateNestedManyWithoutVideoInputSchema } from './CompositionUncheckedCreateNestedManyWithoutVideoInputSchema';

export const FileUncheckedCreateWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileUncheckedCreateWithoutImageWidgetInput> = z.object({
  id: z.string().cuid().optional(),
  location: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  page: z.lazy(() => PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema).optional(),
  composition: z.lazy(() => CompositionUncheckedCreateNestedManyWithoutVideoInputSchema).optional()
}).strict();

export default FileUncheckedCreateWithoutImageWidgetInputSchema;
