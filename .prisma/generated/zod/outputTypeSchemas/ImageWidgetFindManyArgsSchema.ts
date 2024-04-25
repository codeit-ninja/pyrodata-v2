import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ImageWidgetIncludeSchema } from '../inputTypeSchemas/ImageWidgetIncludeSchema'
import { ImageWidgetWhereInputSchema } from '../inputTypeSchemas/ImageWidgetWhereInputSchema'
import { ImageWidgetOrderByWithRelationInputSchema } from '../inputTypeSchemas/ImageWidgetOrderByWithRelationInputSchema'
import { ImageWidgetWhereUniqueInputSchema } from '../inputTypeSchemas/ImageWidgetWhereUniqueInputSchema'
import { ImageWidgetScalarFieldEnumSchema } from '../inputTypeSchemas/ImageWidgetScalarFieldEnumSchema'
import { WidgetArgsSchema } from "../outputTypeSchemas/WidgetArgsSchema"
import { FileArgsSchema } from "../outputTypeSchemas/FileArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ImageWidgetSelectSchema: z.ZodType<Prisma.ImageWidgetSelect> = z.object({
  id: z.boolean().optional(),
  widgetId: z.boolean().optional(),
  fileId: z.boolean().optional(),
  widgets: z.union([z.boolean(),z.lazy(() => WidgetArgsSchema)]).optional(),
  file: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
}).strict()

export const ImageWidgetFindManyArgsSchema: z.ZodType<Prisma.ImageWidgetFindManyArgs> = z.object({
  select: ImageWidgetSelectSchema.optional(),
  include: ImageWidgetIncludeSchema.optional(),
  where: ImageWidgetWhereInputSchema.optional(),
  orderBy: z.union([ ImageWidgetOrderByWithRelationInputSchema.array(),ImageWidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: ImageWidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImageWidgetScalarFieldEnumSchema,ImageWidgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ImageWidgetFindManyArgsSchema;
