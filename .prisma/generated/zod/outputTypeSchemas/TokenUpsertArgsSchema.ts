import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TokenIncludeSchema } from '../inputTypeSchemas/TokenIncludeSchema'
import { TokenWhereUniqueInputSchema } from '../inputTypeSchemas/TokenWhereUniqueInputSchema'
import { TokenCreateInputSchema } from '../inputTypeSchemas/TokenCreateInputSchema'
import { TokenUncheckedCreateInputSchema } from '../inputTypeSchemas/TokenUncheckedCreateInputSchema'
import { TokenUpdateInputSchema } from '../inputTypeSchemas/TokenUpdateInputSchema'
import { TokenUncheckedUpdateInputSchema } from '../inputTypeSchemas/TokenUncheckedUpdateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TokenSelectSchema: z.ZodType<Prisma.TokenSelect> = z.object({
  id: z.boolean().optional(),
  token: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const TokenUpsertArgsSchema: z.ZodType<Prisma.TokenUpsertArgs> = z.object({
  select: TokenSelectSchema.optional(),
  include: TokenIncludeSchema.optional(),
  where: TokenWhereUniqueInputSchema,
  create: z.union([ TokenCreateInputSchema,TokenUncheckedCreateInputSchema ]),
  update: z.union([ TokenUpdateInputSchema,TokenUncheckedUpdateInputSchema ]),
}).strict() ;

export default TokenUpsertArgsSchema;
