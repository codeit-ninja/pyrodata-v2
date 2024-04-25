import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutPagesInputSchema } from './UserUpdateWithoutPagesInputSchema';
import { UserUncheckedUpdateWithoutPagesInputSchema } from './UserUncheckedUpdateWithoutPagesInputSchema';

export const UserUpdateToOneWithWhereWithoutPagesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPagesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutPagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPagesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutPagesInputSchema;
