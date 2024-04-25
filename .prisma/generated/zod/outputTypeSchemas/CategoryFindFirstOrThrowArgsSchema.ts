import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryIncludeSchema } from '../inputTypeSchemas/CategoryIncludeSchema'
import { CategoryWhereInputSchema } from '../inputTypeSchemas/CategoryWhereInputSchema'
import { CategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/CategoryOrderByWithRelationInputSchema'
import { CategoryWhereUniqueInputSchema } from '../inputTypeSchemas/CategoryWhereUniqueInputSchema'
import { CategoryScalarFieldEnumSchema } from '../inputTypeSchemas/CategoryScalarFieldEnumSchema'
import { PageFindManyArgsSchema } from "../outputTypeSchemas/PageFindManyArgsSchema"
import { CategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/CategoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CategorySelectSchema: z.ZodType<Prisma.CategorySelect> = z.object({
  title: z.boolean().optional(),
  slug: z.boolean().optional(),
  page: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindFirstOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CategoryFindFirstOrThrowArgsSchema;
