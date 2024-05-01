import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentIncludeSchema } from '../inputTypeSchemas/PageContentIncludeSchema'
import { PageContentWhereUniqueInputSchema } from '../inputTypeSchemas/PageContentWhereUniqueInputSchema'
import { PageContentCreateInputSchema } from '../inputTypeSchemas/PageContentCreateInputSchema'
import { PageContentUncheckedCreateInputSchema } from '../inputTypeSchemas/PageContentUncheckedCreateInputSchema'
import { PageContentUpdateInputSchema } from '../inputTypeSchemas/PageContentUpdateInputSchema'
import { PageContentUncheckedUpdateInputSchema } from '../inputTypeSchemas/PageContentUncheckedUpdateInputSchema'
import { PageFindManyArgsSchema } from "../outputTypeSchemas/PageFindManyArgsSchema"
import { WidgetFindManyArgsSchema } from "../outputTypeSchemas/WidgetFindManyArgsSchema"
import { PageContentCountOutputTypeArgsSchema } from "../outputTypeSchemas/PageContentCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PageContentSelectSchema: z.ZodType<Prisma.PageContentSelect> = z.object({
  id: z.boolean().optional(),
  html: z.boolean().optional(),
  sidebar: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  page: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  widgets: z.union([z.boolean(),z.lazy(() => WidgetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PageContentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PageContentUpsertArgsSchema: z.ZodType<Prisma.PageContentUpsertArgs> = z.object({
  select: PageContentSelectSchema.optional(),
  include: PageContentIncludeSchema.optional(),
  where: PageContentWhereUniqueInputSchema,
  create: z.union([ PageContentCreateInputSchema,PageContentUncheckedCreateInputSchema ]),
  update: z.union([ PageContentUpdateInputSchema,PageContentUncheckedUpdateInputSchema ]),
}).strict() ;

export default PageContentUpsertArgsSchema;
