import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetCreateNestedManyWithoutFileInputSchema } from './ImageWidgetCreateNestedManyWithoutFileInputSchema';
import { PageCreateNestedManyWithoutFeaturedImageInputSchema } from './PageCreateNestedManyWithoutFeaturedImageInputSchema';
import { CompositionCreateNestedManyWithoutVideoInputSchema } from './CompositionCreateNestedManyWithoutVideoInputSchema';

export const FileCreateWithoutUserInputSchema: z.ZodType<Prisma.FileCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetCreateNestedManyWithoutFileInputSchema).optional(),
  page: z.lazy(() => PageCreateNestedManyWithoutFeaturedImageInputSchema).optional(),
  composition: z.lazy(() => CompositionCreateNestedManyWithoutVideoInputSchema).optional()
}).strict();

export default FileCreateWithoutUserInputSchema;
