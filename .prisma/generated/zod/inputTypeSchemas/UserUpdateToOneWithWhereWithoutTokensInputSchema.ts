import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutTokensInputSchema } from './UserUpdateWithoutTokensInputSchema';
import { UserUncheckedUpdateWithoutTokensInputSchema } from './UserUncheckedUpdateWithoutTokensInputSchema';

export const UserUpdateToOneWithWhereWithoutTokensInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTokensInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutTokensInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTokensInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutTokensInputSchema;
