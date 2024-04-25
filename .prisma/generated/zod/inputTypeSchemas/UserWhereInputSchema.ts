import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema';
import { RoleSchema } from './RoleSchema';
import { SessionNullableRelationFilterSchema } from './SessionNullableRelationFilterSchema';
import { SessionWhereInputSchema } from './SessionWhereInputSchema';
import { FileListRelationFilterSchema } from './FileListRelationFilterSchema';
import { PageListRelationFilterSchema } from './PageListRelationFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  session: z.union([ z.lazy(() => SessionNullableRelationFilterSchema),z.lazy(() => SessionWhereInputSchema) ]).optional().nullable(),
  files: z.lazy(() => FileListRelationFilterSchema).optional(),
  pages: z.lazy(() => PageListRelationFilterSchema).optional()
}).strict();

export default UserWhereInputSchema;
