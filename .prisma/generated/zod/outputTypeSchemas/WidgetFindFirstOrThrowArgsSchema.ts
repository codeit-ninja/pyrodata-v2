import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WidgetIncludeSchema } from '../inputTypeSchemas/WidgetIncludeSchema'
import { WidgetWhereInputSchema } from '../inputTypeSchemas/WidgetWhereInputSchema'
import { WidgetOrderByWithRelationInputSchema } from '../inputTypeSchemas/WidgetOrderByWithRelationInputSchema'
import { WidgetWhereUniqueInputSchema } from '../inputTypeSchemas/WidgetWhereUniqueInputSchema'
import { WidgetScalarFieldEnumSchema } from '../inputTypeSchemas/WidgetScalarFieldEnumSchema'
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

export const WidgetFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WidgetFindFirstOrThrowArgs> = z.object({
  select: WidgetSelectSchema.optional(),
  include: WidgetIncludeSchema.optional(),
  where: WidgetWhereInputSchema.optional(),
  orderBy: z.union([ WidgetOrderByWithRelationInputSchema.array(),WidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: WidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WidgetScalarFieldEnumSchema,WidgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default WidgetFindFirstOrThrowArgsSchema;
