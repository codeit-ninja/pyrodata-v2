import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ImageWidgetWhereInputSchema } from '../inputTypeSchemas/ImageWidgetWhereInputSchema'

export const ImageWidgetDeleteManyArgsSchema: z.ZodType<Prisma.ImageWidgetDeleteManyArgs> = z.object({
  where: ImageWidgetWhereInputSchema.optional(),
}).strict() ;

export default ImageWidgetDeleteManyArgsSchema;
