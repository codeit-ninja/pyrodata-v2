import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ImageWidgetWhereInputSchema } from '../inputTypeSchemas/ImageWidgetWhereInputSchema'
import { ImageWidgetOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ImageWidgetOrderByWithAggregationInputSchema'
import { ImageWidgetScalarFieldEnumSchema } from '../inputTypeSchemas/ImageWidgetScalarFieldEnumSchema'
import { ImageWidgetScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ImageWidgetScalarWhereWithAggregatesInputSchema'

export const ImageWidgetGroupByArgsSchema: z.ZodType<Prisma.ImageWidgetGroupByArgs> = z.object({
  where: ImageWidgetWhereInputSchema.optional(),
  orderBy: z.union([ ImageWidgetOrderByWithAggregationInputSchema.array(),ImageWidgetOrderByWithAggregationInputSchema ]).optional(),
  by: ImageWidgetScalarFieldEnumSchema.array(),
  having: ImageWidgetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ImageWidgetGroupByArgsSchema;
