import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IngredientIncludeSchema } from '../inputTypeSchemas/IngredientIncludeSchema'
import { IngredientWhereInputSchema } from '../inputTypeSchemas/IngredientWhereInputSchema'
import { IngredientOrderByWithRelationInputSchema } from '../inputTypeSchemas/IngredientOrderByWithRelationInputSchema'
import { IngredientWhereUniqueInputSchema } from '../inputTypeSchemas/IngredientWhereUniqueInputSchema'
import { IngredientScalarFieldEnumSchema } from '../inputTypeSchemas/IngredientScalarFieldEnumSchema'
import { CompositionArgsSchema } from "../outputTypeSchemas/CompositionArgsSchema"
import { PageArgsSchema } from "../outputTypeSchemas/PageArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IngredientSelectSchema: z.ZodType<Prisma.IngredientSelect> = z.object({
  id: z.boolean().optional(),
  amount: z.boolean().optional(),
  name: z.boolean().optional(),
  note: z.boolean().optional(),
  compositionId: z.boolean().optional(),
  pageId: z.boolean().optional(),
  composition: z.union([z.boolean(),z.lazy(() => CompositionArgsSchema)]).optional(),
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
}).strict()

export const IngredientFindFirstArgsSchema: z.ZodType<Prisma.IngredientFindFirstArgs> = z.object({
  select: IngredientSelectSchema.optional(),
  include: IngredientIncludeSchema.optional(),
  where: IngredientWhereInputSchema.optional(),
  orderBy: z.union([ IngredientOrderByWithRelationInputSchema.array(),IngredientOrderByWithRelationInputSchema ]).optional(),
  cursor: IngredientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IngredientScalarFieldEnumSchema,IngredientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default IngredientFindFirstArgsSchema;
