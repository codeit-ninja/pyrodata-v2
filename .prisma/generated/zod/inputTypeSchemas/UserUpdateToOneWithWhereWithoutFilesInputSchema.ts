import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutFilesInputSchema } from './UserUpdateWithoutFilesInputSchema';
import { UserUncheckedUpdateWithoutFilesInputSchema } from './UserUncheckedUpdateWithoutFilesInputSchema';

export const UserUpdateToOneWithWhereWithoutFilesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFilesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutFilesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutFilesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutFilesInputSchema;
