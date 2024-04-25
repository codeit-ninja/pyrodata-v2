import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ImageWidgetCreateManyInputSchema } from '../inputTypeSchemas/ImageWidgetCreateManyInputSchema'

export const ImageWidgetCreateManyArgsSchema: z.ZodType<Prisma.ImageWidgetCreateManyArgs> = z.object({
  data: z.union([ ImageWidgetCreateManyInputSchema,ImageWidgetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ImageWidgetCreateManyArgsSchema;
