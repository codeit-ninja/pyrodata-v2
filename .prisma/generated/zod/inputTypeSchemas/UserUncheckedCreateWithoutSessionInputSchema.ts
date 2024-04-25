import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { FileUncheckedCreateNestedManyWithoutUserInputSchema } from './FileUncheckedCreateNestedManyWithoutUserInputSchema';
import { PageUncheckedCreateNestedManyWithoutUserInputSchema } from './PageUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutSessionInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  files: z.lazy(() => FileUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  pages: z.lazy(() => PageUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutSessionInputSchema;
