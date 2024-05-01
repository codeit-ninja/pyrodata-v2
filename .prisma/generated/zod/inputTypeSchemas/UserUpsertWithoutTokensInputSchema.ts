import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutTokensInputSchema } from './UserUpdateWithoutTokensInputSchema';
import { UserUncheckedUpdateWithoutTokensInputSchema } from './UserUncheckedUpdateWithoutTokensInputSchema';
import { UserCreateWithoutTokensInputSchema } from './UserCreateWithoutTokensInputSchema';
import { UserUncheckedCreateWithoutTokensInputSchema } from './UserUncheckedCreateWithoutTokensInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutTokensInputSchema: z.ZodType<Prisma.UserUpsertWithoutTokensInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutTokensInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTokensInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutTokensInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutTokensInputSchema;
