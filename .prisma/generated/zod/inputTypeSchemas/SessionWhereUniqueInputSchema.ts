import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SessionWhereInputSchema } from './SessionWhereInputSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    userId: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default SessionWhereUniqueInputSchema;
