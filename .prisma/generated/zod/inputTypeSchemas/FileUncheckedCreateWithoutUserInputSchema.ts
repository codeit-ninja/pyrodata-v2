import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetUncheckedCreateNestedManyWithoutFileInputSchema } from './ImageWidgetUncheckedCreateNestedManyWithoutFileInputSchema';
import { PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema } from './PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema';
import { CompositionUncheckedCreateNestedManyWithoutVideoInputSchema } from './CompositionUncheckedCreateNestedManyWithoutVideoInputSchema';

export const FileUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.FileUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedCreateNestedManyWithoutFileInputSchema).optional(),
  page: z.lazy(() => PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema).optional(),
  composition: z.lazy(() => CompositionUncheckedCreateNestedManyWithoutVideoInputSchema).optional()
}).strict();

export default FileUncheckedCreateWithoutUserInputSchema;
