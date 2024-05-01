import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCompositionsInputSchema } from './UserCreateWithoutCompositionsInputSchema';
import { UserUncheckedCreateWithoutCompositionsInputSchema } from './UserUncheckedCreateWithoutCompositionsInputSchema';
import { UserCreateOrConnectWithoutCompositionsInputSchema } from './UserCreateOrConnectWithoutCompositionsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutCompositionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCompositionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCompositionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCompositionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCompositionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutCompositionsInputSchema;
