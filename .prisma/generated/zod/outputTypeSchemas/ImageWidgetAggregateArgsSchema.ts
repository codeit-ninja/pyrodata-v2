import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ImageWidgetWhereInputSchema } from '../inputTypeSchemas/ImageWidgetWhereInputSchema'
import { ImageWidgetOrderByWithRelationInputSchema } from '../inputTypeSchemas/ImageWidgetOrderByWithRelationInputSchema'
import { ImageWidgetWhereUniqueInputSchema } from '../inputTypeSchemas/ImageWidgetWhereUniqueInputSchema'

export const ImageWidgetAggregateArgsSchema: z.ZodType<Prisma.ImageWidgetAggregateArgs> = z.object({
  where: ImageWidgetWhereInputSchema.optional(),
  orderBy: z.union([ ImageWidgetOrderByWithRelationInputSchema.array(),ImageWidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: ImageWidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ImageWidgetAggregateArgsSchema;
