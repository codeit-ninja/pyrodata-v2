import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ImageWidgetIncludeSchema } from '../inputTypeSchemas/ImageWidgetIncludeSchema'
import { ImageWidgetWhereUniqueInputSchema } from '../inputTypeSchemas/ImageWidgetWhereUniqueInputSchema'
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

export const ImageWidgetFindUniqueArgsSchema: z.ZodType<Prisma.ImageWidgetFindUniqueArgs> = z.object({
  select: ImageWidgetSelectSchema.optional(),
  include: ImageWidgetIncludeSchema.optional(),
  where: ImageWidgetWhereUniqueInputSchema,
}).strict() ;

export default ImageWidgetFindUniqueArgsSchema;
