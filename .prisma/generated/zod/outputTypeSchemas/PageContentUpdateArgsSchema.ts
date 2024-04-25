import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentIncludeSchema } from '../inputTypeSchemas/PageContentIncludeSchema'
import { PageContentUpdateInputSchema } from '../inputTypeSchemas/PageContentUpdateInputSchema'
import { PageContentUncheckedUpdateInputSchema } from '../inputTypeSchemas/PageContentUncheckedUpdateInputSchema'
import { PageContentWhereUniqueInputSchema } from '../inputTypeSchemas/PageContentWhereUniqueInputSchema'
import { PageFindManyArgsSchema } from "../outputTypeSchemas/PageFindManyArgsSchema"
import { WidgetFindManyArgsSchema } from "../outputTypeSchemas/WidgetFindManyArgsSchema"
import { PageContentCountOutputTypeArgsSchema } from "../outputTypeSchemas/PageContentCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PageContentSelectSchema: z.ZodType<Prisma.PageContentSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  html: z.boolean().optional(),
  sidebar: z.boolean().optional(),
  page: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  widgets: z.union([z.boolean(),z.lazy(() => WidgetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PageContentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PageContentUpdateArgsSchema: z.ZodType<Prisma.PageContentUpdateArgs> = z.object({
  select: PageContentSelectSchema.optional(),
  include: PageContentIncludeSchema.optional(),
  data: z.union([ PageContentUpdateInputSchema,PageContentUncheckedUpdateInputSchema ]),
  where: PageContentWhereUniqueInputSchema,
}).strict() ;

export default PageContentUpdateArgsSchema;
