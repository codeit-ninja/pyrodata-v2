import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { SessionCreateNestedOneWithoutUserInputSchema } from './SessionCreateNestedOneWithoutUserInputSchema';
import { FileCreateNestedManyWithoutUserInputSchema } from './FileCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutPagesInputSchema: z.ZodType<Prisma.UserCreateWithoutPagesInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  session: z.lazy(() => SessionCreateNestedOneWithoutUserInputSchema).optional(),
  files: z.lazy(() => FileCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutPagesInputSchema;
