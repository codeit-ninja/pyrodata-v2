import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionCategoryIncludeSchema } from '../inputTypeSchemas/CompositionCategoryIncludeSchema'
import { CompositionCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/CompositionCategoryWhereUniqueInputSchema'
import { CompositionFindManyArgsSchema } from "../outputTypeSchemas/CompositionFindManyArgsSchema"
import { CompositionCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/CompositionCategoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompositionCategorySelectSchema: z.ZodType<Prisma.CompositionCategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  compositions: z.union([z.boolean(),z.lazy(() => CompositionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompositionCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CompositionCategoryDeleteArgsSchema: z.ZodType<Prisma.CompositionCategoryDeleteArgs> = z.object({
  select: CompositionCategorySelectSchema.optional(),
  include: CompositionCategoryIncludeSchema.optional(),
  where: CompositionCategoryWhereUniqueInputSchema,
}).strict() ;

export default CompositionCategoryDeleteArgsSchema;
