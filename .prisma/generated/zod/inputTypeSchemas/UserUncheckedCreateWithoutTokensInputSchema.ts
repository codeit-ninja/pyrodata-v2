import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { SessionUncheckedCreateNestedOneWithoutUserInputSchema } from './SessionUncheckedCreateNestedOneWithoutUserInputSchema';
import { FileUncheckedCreateNestedManyWithoutUserInputSchema } from './FileUncheckedCreateNestedManyWithoutUserInputSchema';
import { PageUncheckedCreateNestedManyWithoutUserInputSchema } from './PageUncheckedCreateNestedManyWithoutUserInputSchema';
import { CompositionUncheckedCreateNestedManyWithoutSubmittedByInputSchema } from './CompositionUncheckedCreateNestedManyWithoutSubmittedByInputSchema';

export const UserUncheckedCreateWithoutTokensInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTokensInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  session: z.lazy(() => SessionUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  files: z.lazy(() => FileUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  pages: z.lazy(() => PageUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  compositions: z.lazy(() => CompositionUncheckedCreateNestedManyWithoutSubmittedByInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutTokensInputSchema;
