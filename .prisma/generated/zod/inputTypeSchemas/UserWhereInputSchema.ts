import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema';
import { RoleSchema } from './RoleSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { SessionNullableRelationFilterSchema } from './SessionNullableRelationFilterSchema';
import { SessionWhereInputSchema } from './SessionWhereInputSchema';
import { TokenListRelationFilterSchema } from './TokenListRelationFilterSchema';
import { FileListRelationFilterSchema } from './FileListRelationFilterSchema';
import { PageListRelationFilterSchema } from './PageListRelationFilterSchema';
import { CompositionListRelationFilterSchema } from './CompositionListRelationFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  session: z.union([ z.lazy(() => SessionNullableRelationFilterSchema),z.lazy(() => SessionWhereInputSchema) ]).optional().nullable(),
  tokens: z.lazy(() => TokenListRelationFilterSchema).optional(),
  files: z.lazy(() => FileListRelationFilterSchema).optional(),
  pages: z.lazy(() => PageListRelationFilterSchema).optional(),
  compositions: z.lazy(() => CompositionListRelationFilterSchema).optional()
}).strict();

export default UserWhereInputSchema;
