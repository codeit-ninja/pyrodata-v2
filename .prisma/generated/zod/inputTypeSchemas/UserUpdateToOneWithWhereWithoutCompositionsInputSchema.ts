import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutCompositionsInputSchema } from './UserUpdateWithoutCompositionsInputSchema';
import { UserUncheckedUpdateWithoutCompositionsInputSchema } from './UserUncheckedUpdateWithoutCompositionsInputSchema';

export const UserUpdateToOneWithWhereWithoutCompositionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCompositionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCompositionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCompositionsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutCompositionsInputSchema;
