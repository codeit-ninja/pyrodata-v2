import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { SessionUncheckedCreateNestedOneWithoutUserInputSchema } from './SessionUncheckedCreateNestedOneWithoutUserInputSchema';
import { FileUncheckedCreateNestedManyWithoutUserInputSchema } from './FileUncheckedCreateNestedManyWithoutUserInputSchema';
import { PageUncheckedCreateNestedManyWithoutUserInputSchema } from './PageUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  session: z.lazy(() => SessionUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  files: z.lazy(() => FileUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  pages: z.lazy(() => PageUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateInputSchema;
