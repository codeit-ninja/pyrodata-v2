import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCompositionsInputSchema } from './UserCreateWithoutCompositionsInputSchema';
import { UserUncheckedCreateWithoutCompositionsInputSchema } from './UserUncheckedCreateWithoutCompositionsInputSchema';
import { UserCreateOrConnectWithoutCompositionsInputSchema } from './UserCreateOrConnectWithoutCompositionsInputSchema';
import { UserUpsertWithoutCompositionsInputSchema } from './UserUpsertWithoutCompositionsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCompositionsInputSchema } from './UserUpdateToOneWithWhereWithoutCompositionsInputSchema';
import { UserUpdateWithoutCompositionsInputSchema } from './UserUpdateWithoutCompositionsInputSchema';
import { UserUncheckedUpdateWithoutCompositionsInputSchema } from './UserUncheckedUpdateWithoutCompositionsInputSchema';

export const UserUpdateOneWithoutCompositionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutCompositionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCompositionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCompositionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCompositionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCompositionsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCompositionsInputSchema),z.lazy(() => UserUpdateWithoutCompositionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCompositionsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutCompositionsNestedInputSchema;
