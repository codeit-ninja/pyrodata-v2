import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { SessionUpdateOneWithoutUserNestedInputSchema } from './SessionUpdateOneWithoutUserNestedInputSchema';
import { FileUpdateManyWithoutUserNestedInputSchema } from './FileUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutPagesInputSchema: z.ZodType<Prisma.UserUpdateWithoutPagesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  session: z.lazy(() => SessionUpdateOneWithoutUserNestedInputSchema).optional(),
  files: z.lazy(() => FileUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutPagesInputSchema;
