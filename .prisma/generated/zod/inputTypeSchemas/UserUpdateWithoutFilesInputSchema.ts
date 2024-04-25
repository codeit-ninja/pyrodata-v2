import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { SessionUpdateOneWithoutUserNestedInputSchema } from './SessionUpdateOneWithoutUserNestedInputSchema';
import { PageUpdateManyWithoutUserNestedInputSchema } from './PageUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutFilesInputSchema: z.ZodType<Prisma.UserUpdateWithoutFilesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  session: z.lazy(() => SessionUpdateOneWithoutUserNestedInputSchema).optional(),
  pages: z.lazy(() => PageUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutFilesInputSchema;
