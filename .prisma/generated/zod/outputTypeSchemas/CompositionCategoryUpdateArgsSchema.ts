import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionCategoryIncludeSchema } from '../inputTypeSchemas/CompositionCategoryIncludeSchema'
import { CompositionCategoryUpdateInputSchema } from '../inputTypeSchemas/CompositionCategoryUpdateInputSchema'
import { CompositionCategoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/CompositionCategoryUncheckedUpdateInputSchema'
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

export const CompositionCategoryUpdateArgsSchema: z.ZodType<Prisma.CompositionCategoryUpdateArgs> = z.object({
  select: CompositionCategorySelectSchema.optional(),
  include: CompositionCategoryIncludeSchema.optional(),
  data: z.union([ CompositionCategoryUpdateInputSchema,CompositionCategoryUncheckedUpdateInputSchema ]),
  where: CompositionCategoryWhereUniqueInputSchema,
}).strict() ;

export default CompositionCategoryUpdateArgsSchema;
