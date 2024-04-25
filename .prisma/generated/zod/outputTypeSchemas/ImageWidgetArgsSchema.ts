import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ImageWidgetSelectSchema } from '../inputTypeSchemas/ImageWidgetSelectSchema';
import { ImageWidgetIncludeSchema } from '../inputTypeSchemas/ImageWidgetIncludeSchema';

export const ImageWidgetArgsSchema: z.ZodType<Prisma.ImageWidgetDefaultArgs> = z.object({
  select: z.lazy(() => ImageWidgetSelectSchema).optional(),
  include: z.lazy(() => ImageWidgetIncludeSchema).optional(),
}).strict();

export default ImageWidgetArgsSchema;
