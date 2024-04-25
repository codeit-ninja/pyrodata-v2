import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ImageWidgetUpdateManyMutationInputSchema } from '../inputTypeSchemas/ImageWidgetUpdateManyMutationInputSchema'
import { ImageWidgetUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ImageWidgetUncheckedUpdateManyInputSchema'
import { ImageWidgetWhereInputSchema } from '../inputTypeSchemas/ImageWidgetWhereInputSchema'

export const ImageWidgetUpdateManyArgsSchema: z.ZodType<Prisma.ImageWidgetUpdateManyArgs> = z.object({
  data: z.union([ ImageWidgetUpdateManyMutationInputSchema,ImageWidgetUncheckedUpdateManyInputSchema ]),
  where: ImageWidgetWhereInputSchema.optional(),
}).strict() ;

export default ImageWidgetUpdateManyArgsSchema;
