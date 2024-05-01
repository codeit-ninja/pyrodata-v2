import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { SessionUncheckedCreateNestedOneWithoutUserInputSchema } from './SessionUncheckedCreateNestedOneWithoutUserInputSchema';
import { TokenUncheckedCreateNestedManyWithoutUserInputSchema } from './TokenUncheckedCreateNestedManyWithoutUserInputSchema';
import { FileUncheckedCreateNestedManyWithoutUserInputSchema } from './FileUncheckedCreateNestedManyWithoutUserInputSchema';
import { PageUncheckedCreateNestedManyWithoutUserInputSchema } from './PageUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutCompositionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCompositionsInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  session: z.lazy(() => SessionUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  tokens: z.lazy(() => TokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  files: z.lazy(() => FileUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  pages: z.lazy(() => PageUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutCompositionsInputSchema;
