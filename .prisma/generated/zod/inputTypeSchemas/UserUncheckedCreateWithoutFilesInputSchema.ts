import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { SessionUncheckedCreateNestedOneWithoutUserInputSchema } from './SessionUncheckedCreateNestedOneWithoutUserInputSchema';
import { PageUncheckedCreateNestedManyWithoutUserInputSchema } from './PageUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutFilesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutFilesInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  session: z.lazy(() => SessionUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  pages: z.lazy(() => PageUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutFilesInputSchema;
