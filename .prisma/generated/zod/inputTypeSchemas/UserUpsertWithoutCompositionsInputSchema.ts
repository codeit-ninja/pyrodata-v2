import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutCompositionsInputSchema } from './UserUpdateWithoutCompositionsInputSchema';
import { UserUncheckedUpdateWithoutCompositionsInputSchema } from './UserUncheckedUpdateWithoutCompositionsInputSchema';
import { UserCreateWithoutCompositionsInputSchema } from './UserCreateWithoutCompositionsInputSchema';
import { UserUncheckedCreateWithoutCompositionsInputSchema } from './UserUncheckedCreateWithoutCompositionsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutCompositionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutCompositionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCompositionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCompositionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCompositionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCompositionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutCompositionsInputSchema;
