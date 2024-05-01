import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutTokensInputSchema } from './UserCreateWithoutTokensInputSchema';
import { UserUncheckedCreateWithoutTokensInputSchema } from './UserUncheckedCreateWithoutTokensInputSchema';
import { UserCreateOrConnectWithoutTokensInputSchema } from './UserCreateOrConnectWithoutTokensInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutTokensInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTokensInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutTokensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTokensInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutTokensInputSchema;
