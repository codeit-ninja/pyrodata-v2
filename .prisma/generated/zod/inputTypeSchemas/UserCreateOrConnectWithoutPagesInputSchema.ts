import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutPagesInputSchema } from './UserCreateWithoutPagesInputSchema';
import { UserUncheckedCreateWithoutPagesInputSchema } from './UserUncheckedCreateWithoutPagesInputSchema';

export const UserCreateOrConnectWithoutPagesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPagesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutPagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutPagesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutPagesInputSchema;
