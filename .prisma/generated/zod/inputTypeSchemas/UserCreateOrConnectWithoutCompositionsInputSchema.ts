import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutCompositionsInputSchema } from './UserCreateWithoutCompositionsInputSchema';
import { UserUncheckedCreateWithoutCompositionsInputSchema } from './UserUncheckedCreateWithoutCompositionsInputSchema';

export const UserCreateOrConnectWithoutCompositionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCompositionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCompositionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCompositionsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutCompositionsInputSchema;
