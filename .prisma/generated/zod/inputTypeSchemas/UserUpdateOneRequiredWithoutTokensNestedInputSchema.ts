import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutTokensInputSchema } from './UserCreateWithoutTokensInputSchema';
import { UserUncheckedCreateWithoutTokensInputSchema } from './UserUncheckedCreateWithoutTokensInputSchema';
import { UserCreateOrConnectWithoutTokensInputSchema } from './UserCreateOrConnectWithoutTokensInputSchema';
import { UserUpsertWithoutTokensInputSchema } from './UserUpsertWithoutTokensInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutTokensInputSchema } from './UserUpdateToOneWithWhereWithoutTokensInputSchema';
import { UserUpdateWithoutTokensInputSchema } from './UserUpdateWithoutTokensInputSchema';
import { UserUncheckedUpdateWithoutTokensInputSchema } from './UserUncheckedUpdateWithoutTokensInputSchema';

export const UserUpdateOneRequiredWithoutTokensNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTokensNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutTokensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTokensInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTokensInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutTokensInputSchema),z.lazy(() => UserUpdateWithoutTokensInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTokensInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutTokensNestedInputSchema;
