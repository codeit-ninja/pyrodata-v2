import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SessionUncheckedUpdateOneWithoutUserNestedInputSchema } from './SessionUncheckedUpdateOneWithoutUserNestedInputSchema';
import { FileUncheckedUpdateManyWithoutUserNestedInputSchema } from './FileUncheckedUpdateManyWithoutUserNestedInputSchema';
import { PageUncheckedUpdateManyWithoutUserNestedInputSchema } from './PageUncheckedUpdateManyWithoutUserNestedInputSchema';
import { CompositionUncheckedUpdateManyWithoutSubmittedByNestedInputSchema } from './CompositionUncheckedUpdateManyWithoutSubmittedByNestedInputSchema';

export const UserUncheckedUpdateWithoutTokensInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutTokensInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  session: z.lazy(() => SessionUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  files: z.lazy(() => FileUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  pages: z.lazy(() => PageUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  compositions: z.lazy(() => CompositionUncheckedUpdateManyWithoutSubmittedByNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutTokensInputSchema;
