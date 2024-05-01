import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { SessionCreateNestedOneWithoutUserInputSchema } from './SessionCreateNestedOneWithoutUserInputSchema';
import { TokenCreateNestedManyWithoutUserInputSchema } from './TokenCreateNestedManyWithoutUserInputSchema';
import { FileCreateNestedManyWithoutUserInputSchema } from './FileCreateNestedManyWithoutUserInputSchema';
import { CompositionCreateNestedManyWithoutSubmittedByInputSchema } from './CompositionCreateNestedManyWithoutSubmittedByInputSchema';

export const UserCreateWithoutPagesInputSchema: z.ZodType<Prisma.UserCreateWithoutPagesInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  session: z.lazy(() => SessionCreateNestedOneWithoutUserInputSchema).optional(),
  tokens: z.lazy(() => TokenCreateNestedManyWithoutUserInputSchema).optional(),
  files: z.lazy(() => FileCreateNestedManyWithoutUserInputSchema).optional(),
  compositions: z.lazy(() => CompositionCreateNestedManyWithoutSubmittedByInputSchema).optional()
}).strict();

export default UserCreateWithoutPagesInputSchema;
