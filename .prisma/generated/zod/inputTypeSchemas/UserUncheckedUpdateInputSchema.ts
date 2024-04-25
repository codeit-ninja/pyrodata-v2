import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { SessionUncheckedUpdateOneWithoutUserNestedInputSchema } from './SessionUncheckedUpdateOneWithoutUserNestedInputSchema';
import { FileUncheckedUpdateManyWithoutUserNestedInputSchema } from './FileUncheckedUpdateManyWithoutUserNestedInputSchema';
import { PageUncheckedUpdateManyWithoutUserNestedInputSchema } from './PageUncheckedUpdateManyWithoutUserNestedInputSchema';

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  session: z.lazy(() => SessionUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  files: z.lazy(() => FileUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  pages: z.lazy(() => PageUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateInputSchema;