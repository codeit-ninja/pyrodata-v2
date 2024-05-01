import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TokenWhereInputSchema } from './TokenWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const TokenWhereUniqueInputSchema: z.ZodType<Prisma.TokenWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    token: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    token: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  token: z.string().optional(),
  AND: z.union([ z.lazy(() => TokenWhereInputSchema),z.lazy(() => TokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TokenWhereInputSchema),z.lazy(() => TokenWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default TokenWhereUniqueInputSchema;
