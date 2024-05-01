import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentIncludeSchema } from '../inputTypeSchemas/PageContentIncludeSchema'
import { PageContentWhereInputSchema } from '../inputTypeSchemas/PageContentWhereInputSchema'
import { PageContentOrderByWithRelationInputSchema } from '../inputTypeSchemas/PageContentOrderByWithRelationInputSchema'
import { PageContentWhereUniqueInputSchema } from '../inputTypeSchemas/PageContentWhereUniqueInputSchema'
import { PageContentScalarFieldEnumSchema } from '../inputTypeSchemas/PageContentScalarFieldEnumSchema'
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

export const PageContentFindFirstArgsSchema: z.ZodType<Prisma.PageContentFindFirstArgs> = z.object({
  select: PageContentSelectSchema.optional(),
  include: PageContentIncludeSchema.optional(),
  where: PageContentWhereInputSchema.optional(),
  orderBy: z.union([ PageContentOrderByWithRelationInputSchema.array(),PageContentOrderByWithRelationInputSchema ]).optional(),
  cursor: PageContentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PageContentScalarFieldEnumSchema,PageContentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PageContentFindFirstArgsSchema;
