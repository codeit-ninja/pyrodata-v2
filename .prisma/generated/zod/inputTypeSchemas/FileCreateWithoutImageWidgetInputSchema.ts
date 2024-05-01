import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateNestedManyWithoutFeaturedImageInputSchema } from './PageCreateNestedManyWithoutFeaturedImageInputSchema';
import { CompositionCreateNestedManyWithoutVideoInputSchema } from './CompositionCreateNestedManyWithoutVideoInputSchema';
import { UserCreateNestedOneWithoutFilesInputSchema } from './UserCreateNestedOneWithoutFilesInputSchema';

export const FileCreateWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileCreateWithoutImageWidgetInput> = z.object({
  id: z.string().cuid().optional(),
  location: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  page: z.lazy(() => PageCreateNestedManyWithoutFeaturedImageInputSchema).optional(),
  composition: z.lazy(() => CompositionCreateNestedManyWithoutVideoInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutFilesInputSchema).optional()
}).strict();

export default FileCreateWithoutImageWidgetInputSchema;
