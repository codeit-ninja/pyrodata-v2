import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WidgetIncludeSchema } from '../inputTypeSchemas/WidgetIncludeSchema'
import { WidgetUpdateInputSchema } from '../inputTypeSchemas/WidgetUpdateInputSchema'
import { WidgetUncheckedUpdateInputSchema } from '../inputTypeSchemas/WidgetUncheckedUpdateInputSchema'
import { WidgetWhereUniqueInputSchema } from '../inputTypeSchemas/WidgetWhereUniqueInputSchema'
import { PageContentArgsSchema } from "../outputTypeSchemas/PageContentArgsSchema"
import { ImageWidgetArgsSchema } from "../outputTypeSchemas/ImageWidgetArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WidgetSelectSchema: z.ZodType<Prisma.WidgetSelect> = z.object({
  id: z.boolean().optional(),
  pageContentId: z.boolean().optional(),
  pageContent: z.union([z.boolean(),z.lazy(() => PageContentArgsSchema)]).optional(),
  imageWidget: z.union([z.boolean(),z.lazy(() => ImageWidgetArgsSchema)]).optional(),
}).strict()

export const WidgetUpdateArgsSchema: z.ZodType<Prisma.WidgetUpdateArgs> = z.object({
  select: WidgetSelectSchema.optional(),
  include: WidgetIncludeSchema.optional(),
  data: z.union([ WidgetUpdateInputSchema,WidgetUncheckedUpdateInputSchema ]),
  where: WidgetWhereUniqueInputSchema,
}).strict() ;

export default WidgetUpdateArgsSchema;
