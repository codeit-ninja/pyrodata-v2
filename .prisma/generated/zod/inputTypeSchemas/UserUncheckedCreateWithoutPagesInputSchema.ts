import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { SessionUncheckedCreateNestedOneWithoutUserInputSchema } from './SessionUncheckedCreateNestedOneWithoutUserInputSchema';
import { FileUncheckedCreateNestedManyWithoutUserInputSchema } from './FileUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutPagesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPagesInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  session: z.lazy(() => SessionUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  files: z.lazy(() => FileUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutPagesInputSchema;
