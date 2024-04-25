import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WidgetIncludeSchema } from '../inputTypeSchemas/WidgetIncludeSchema'
import { WidgetCreateInputSchema } from '../inputTypeSchemas/WidgetCreateInputSchema'
import { WidgetUncheckedCreateInputSchema } from '../inputTypeSchemas/WidgetUncheckedCreateInputSchema'
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

export const WidgetCreateArgsSchema: z.ZodType<Prisma.WidgetCreateArgs> = z.object({
  select: WidgetSelectSchema.optional(),
  include: WidgetIncludeSchema.optional(),
  data: z.union([ WidgetCreateInputSchema,WidgetUncheckedCreateInputSchema ]),
}).strict() ;

export default WidgetCreateArgsSchema;
