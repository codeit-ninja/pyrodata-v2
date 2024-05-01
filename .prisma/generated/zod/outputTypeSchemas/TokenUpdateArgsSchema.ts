import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TokenIncludeSchema } from '../inputTypeSchemas/TokenIncludeSchema'
import { TokenUpdateInputSchema } from '../inputTypeSchemas/TokenUpdateInputSchema'
import { TokenUncheckedUpdateInputSchema } from '../inputTypeSchemas/TokenUncheckedUpdateInputSchema'
import { TokenWhereUniqueInputSchema } from '../inputTypeSchemas/TokenWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TokenSelectSchema: z.ZodType<Prisma.TokenSelect> = z.object({
  id: z.boolean().optional(),
  token: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const TokenUpdateArgsSchema: z.ZodType<Prisma.TokenUpdateArgs> = z.object({
  select: TokenSelectSchema.optional(),
  include: TokenIncludeSchema.optional(),
  data: z.union([ TokenUpdateInputSchema,TokenUncheckedUpdateInputSchema ]),
  where: TokenWhereUniqueInputSchema,
}).strict() ;

export default TokenUpdateArgsSchema;
