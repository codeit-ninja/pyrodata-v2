import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SessionUpdateOneWithoutUserNestedInputSchema } from './SessionUpdateOneWithoutUserNestedInputSchema';
import { TokenUpdateManyWithoutUserNestedInputSchema } from './TokenUpdateManyWithoutUserNestedInputSchema';
import { FileUpdateManyWithoutUserNestedInputSchema } from './FileUpdateManyWithoutUserNestedInputSchema';
import { PageUpdateManyWithoutUserNestedInputSchema } from './PageUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutCompositionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutCompositionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  session: z.lazy(() => SessionUpdateOneWithoutUserNestedInputSchema).optional(),
  tokens: z.lazy(() => TokenUpdateManyWithoutUserNestedInputSchema).optional(),
  files: z.lazy(() => FileUpdateManyWithoutUserNestedInputSchema).optional(),
  pages: z.lazy(() => PageUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutCompositionsInputSchema;
