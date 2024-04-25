import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WidgetIncludeSchema } from '../inputTypeSchemas/WidgetIncludeSchema'
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

export const WidgetFindUniqueArgsSchema: z.ZodType<Prisma.WidgetFindUniqueArgs> = z.object({
  select: WidgetSelectSchema.optional(),
  include: WidgetIncludeSchema.optional(),
  where: WidgetWhereUniqueInputSchema,
}).strict() ;

export default WidgetFindUniqueArgsSchema;
