import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema';
import { RoleSchema } from './RoleSchema';
import { SessionNullableRelationFilterSchema } from './SessionNullableRelationFilterSchema';
import { SessionWhereInputSchema } from './SessionWhereInputSchema';
import { FileListRelationFilterSchema } from './FileListRelationFilterSchema';
import { PageListRelationFilterSchema } from './PageListRelationFilterSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    username: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    username: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    email: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    username: z.string(),
    email: z.string(),
  }),
  z.object({
    username: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  session: z.union([ z.lazy(() => SessionNullableRelationFilterSchema),z.lazy(() => SessionWhereInputSchema) ]).optional().nullable(),
  files: z.lazy(() => FileListRelationFilterSchema).optional(),
  pages: z.lazy(() => PageListRelationFilterSchema).optional()
}).strict());

export default UserWhereUniqueInputSchema;
