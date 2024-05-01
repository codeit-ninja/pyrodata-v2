import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IngredientIncludeSchema } from '../inputTypeSchemas/IngredientIncludeSchema'
import { IngredientWhereUniqueInputSchema } from '../inputTypeSchemas/IngredientWhereUniqueInputSchema'
import { IngredientCreateInputSchema } from '../inputTypeSchemas/IngredientCreateInputSchema'
import { IngredientUncheckedCreateInputSchema } from '../inputTypeSchemas/IngredientUncheckedCreateInputSchema'
import { IngredientUpdateInputSchema } from '../inputTypeSchemas/IngredientUpdateInputSchema'
import { IngredientUncheckedUpdateInputSchema } from '../inputTypeSchemas/IngredientUncheckedUpdateInputSchema'
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

export const IngredientUpsertArgsSchema: z.ZodType<Prisma.IngredientUpsertArgs> = z.object({
  select: IngredientSelectSchema.optional(),
  include: IngredientIncludeSchema.optional(),
  where: IngredientWhereUniqueInputSchema,
  create: z.union([ IngredientCreateInputSchema,IngredientUncheckedCreateInputSchema ]),
  update: z.union([ IngredientUpdateInputSchema,IngredientUncheckedUpdateInputSchema ]),
}).strict() ;

export default IngredientUpsertArgsSchema;
