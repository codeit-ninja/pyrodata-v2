import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutPagesInputSchema } from './UserCreateWithoutPagesInputSchema';
import { UserUncheckedCreateWithoutPagesInputSchema } from './UserUncheckedCreateWithoutPagesInputSchema';
import { UserCreateOrConnectWithoutPagesInputSchema } from './UserCreateOrConnectWithoutPagesInputSchema';
import { UserUpsertWithoutPagesInputSchema } from './UserUpsertWithoutPagesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutPagesInputSchema } from './UserUpdateToOneWithWhereWithoutPagesInputSchema';
import { UserUpdateWithoutPagesInputSchema } from './UserUpdateWithoutPagesInputSchema';
import { UserUncheckedUpdateWithoutPagesInputSchema } from './UserUncheckedUpdateWithoutPagesInputSchema';

export const UserUpdateOneWithoutPagesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutPagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutPagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPagesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPagesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutPagesInputSchema),z.lazy(() => UserUpdateWithoutPagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPagesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutPagesNestedInputSchema;
