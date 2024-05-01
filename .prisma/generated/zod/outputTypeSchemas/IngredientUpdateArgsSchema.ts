import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IngredientIncludeSchema } from '../inputTypeSchemas/IngredientIncludeSchema'
import { IngredientUpdateInputSchema } from '../inputTypeSchemas/IngredientUpdateInputSchema'
import { IngredientUncheckedUpdateInputSchema } from '../inputTypeSchemas/IngredientUncheckedUpdateInputSchema'
import { IngredientWhereUniqueInputSchema } from '../inputTypeSchemas/IngredientWhereUniqueInputSchema'
import { PageArgsSchema } from "../outputTypeSchemas/PageArgsSchema"
import { CompositionArgsSchema } from "../outputTypeSchemas/CompositionArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IngredientSelectSchema: z.ZodType<Prisma.IngredientSelect> = z.object({
  id: z.boolean().optional(),
  amount: z.boolean().optional(),
  name: z.boolean().optional(),
  note: z.boolean().optional(),
  pageId: z.boolean().optional(),
  compositionId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
  composition: z.union([z.boolean(),z.lazy(() => CompositionArgsSchema)]).optional(),
}).strict()

export const IngredientUpdateArgsSchema: z.ZodType<Prisma.IngredientUpdateArgs> = z.object({
  select: IngredientSelectSchema.optional(),
  include: IngredientIncludeSchema.optional(),
  data: z.union([ IngredientUpdateInputSchema,IngredientUncheckedUpdateInputSchema ]),
  where: IngredientWhereUniqueInputSchema,
}).strict() ;

export default IngredientUpdateArgsSchema;
