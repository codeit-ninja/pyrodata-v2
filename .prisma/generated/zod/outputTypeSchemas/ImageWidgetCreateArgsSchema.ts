import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ImageWidgetIncludeSchema } from '../inputTypeSchemas/ImageWidgetIncludeSchema'
import { ImageWidgetCreateInputSchema } from '../inputTypeSchemas/ImageWidgetCreateInputSchema'
import { ImageWidgetUncheckedCreateInputSchema } from '../inputTypeSchemas/ImageWidgetUncheckedCreateInputSchema'
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

export const ImageWidgetCreateArgsSchema: z.ZodType<Prisma.ImageWidgetCreateArgs> = z.object({
  select: ImageWidgetSelectSchema.optional(),
  include: ImageWidgetIncludeSchema.optional(),
  data: z.union([ ImageWidgetCreateInputSchema,ImageWidgetUncheckedCreateInputSchema ]),
}).strict() ;

export default ImageWidgetCreateArgsSchema;
