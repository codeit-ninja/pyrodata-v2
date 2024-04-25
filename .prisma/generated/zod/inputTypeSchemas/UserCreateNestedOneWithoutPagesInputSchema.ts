import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutPagesInputSchema } from './UserCreateWithoutPagesInputSchema';
import { UserUncheckedCreateWithoutPagesInputSchema } from './UserUncheckedCreateWithoutPagesInputSchema';
import { UserCreateOrConnectWithoutPagesInputSchema } from './UserCreateOrConnectWithoutPagesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutPagesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPagesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutPagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPagesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutPagesInputSchema;
