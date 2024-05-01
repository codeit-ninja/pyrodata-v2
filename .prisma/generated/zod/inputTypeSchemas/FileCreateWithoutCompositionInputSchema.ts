import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetCreateNestedManyWithoutFileInputSchema } from './ImageWidgetCreateNestedManyWithoutFileInputSchema';
import { PageCreateNestedManyWithoutFeaturedImageInputSchema } from './PageCreateNestedManyWithoutFeaturedImageInputSchema';
import { UserCreateNestedOneWithoutFilesInputSchema } from './UserCreateNestedOneWithoutFilesInputSchema';

export const FileCreateWithoutCompositionInputSchema: z.ZodType<Prisma.FileCreateWithoutCompositionInput> = z.object({
  id: z.string().cuid().optional(),
  location: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  imageWidget: z.lazy(() => ImageWidgetCreateNestedManyWithoutFileInputSchema).optional(),
  page: z.lazy(() => PageCreateNestedManyWithoutFeaturedImageInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutFilesInputSchema).optional()
}).strict();

export default FileCreateWithoutCompositionInputSchema;
