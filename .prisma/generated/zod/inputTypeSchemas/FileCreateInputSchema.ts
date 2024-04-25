import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetCreateNestedManyWithoutFileInputSchema } from './ImageWidgetCreateNestedManyWithoutFileInputSchema';
import { PageCreateNestedManyWithoutFeaturedImageInputSchema } from './PageCreateNestedManyWithoutFeaturedImageInputSchema';
import { CompositionCreateNestedManyWithoutVideoInputSchema } from './CompositionCreateNestedManyWithoutVideoInputSchema';
import { UserCreateNestedOneWithoutFilesInputSchema } from './UserCreateNestedOneWithoutFilesInputSchema';

export const FileCreateInputSchema: z.ZodType<Prisma.FileCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetCreateNestedManyWithoutFileInputSchema).optional(),
  page: z.lazy(() => PageCreateNestedManyWithoutFeaturedImageInputSchema).optional(),
  composition: z.lazy(() => CompositionCreateNestedManyWithoutVideoInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutFilesInputSchema).optional()
}).strict();

export default FileCreateInputSchema;
