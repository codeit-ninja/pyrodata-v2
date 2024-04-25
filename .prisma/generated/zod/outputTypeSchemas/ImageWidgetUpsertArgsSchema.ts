import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ImageWidgetIncludeSchema } from '../inputTypeSchemas/ImageWidgetIncludeSchema'
import { ImageWidgetWhereUniqueInputSchema } from '../inputTypeSchemas/ImageWidgetWhereUniqueInputSchema'
import { ImageWidgetCreateInputSchema } from '../inputTypeSchemas/ImageWidgetCreateInputSchema'
import { ImageWidgetUncheckedCreateInputSchema } from '../inputTypeSchemas/ImageWidgetUncheckedCreateInputSchema'
import { ImageWidgetUpdateInputSchema } from '../inputTypeSchemas/ImageWidgetUpdateInputSchema'
import { ImageWidgetUncheckedUpdateInputSchema } from '../inputTypeSchemas/ImageWidgetUncheckedUpdateInputSchema'
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

export const ImageWidgetUpsertArgsSchema: z.ZodType<Prisma.ImageWidgetUpsertArgs> = z.object({
  select: ImageWidgetSelectSchema.optional(),
  include: ImageWidgetIncludeSchema.optional(),
  where: ImageWidgetWhereUniqueInputSchema,
  create: z.union([ ImageWidgetCreateInputSchema,ImageWidgetUncheckedCreateInputSchema ]),
  update: z.union([ ImageWidgetUpdateInputSchema,ImageWidgetUncheckedUpdateInputSchema ]),
}).strict() ;

export default ImageWidgetUpsertArgsSchema;
