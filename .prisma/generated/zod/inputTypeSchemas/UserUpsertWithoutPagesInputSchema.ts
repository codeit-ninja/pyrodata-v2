import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutPagesInputSchema } from './UserUpdateWithoutPagesInputSchema';
import { UserUncheckedUpdateWithoutPagesInputSchema } from './UserUncheckedUpdateWithoutPagesInputSchema';
import { UserCreateWithoutPagesInputSchema } from './UserCreateWithoutPagesInputSchema';
import { UserUncheckedCreateWithoutPagesInputSchema } from './UserUncheckedCreateWithoutPagesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutPagesInputSchema: z.ZodType<Prisma.UserUpsertWithoutPagesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutPagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPagesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutPagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutPagesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutPagesInputSchema;
