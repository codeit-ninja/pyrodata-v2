import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetCreateNestedManyWithoutFileInputSchema } from './ImageWidgetCreateNestedManyWithoutFileInputSchema';
import { PageCreateNestedManyWithoutFeaturedImageInputSchema } from './PageCreateNestedManyWithoutFeaturedImageInputSchema';
import { UserCreateNestedOneWithoutFilesInputSchema } from './UserCreateNestedOneWithoutFilesInputSchema';

export const FileCreateWithoutCompositionInputSchema: z.ZodType<Prisma.FileCreateWithoutCompositionInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetCreateNestedManyWithoutFileInputSchema).optional(),
  page: z.lazy(() => PageCreateNestedManyWithoutFeaturedImageInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutFilesInputSchema).optional()
}).strict();

export default FileCreateWithoutCompositionInputSchema;
