import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutFilesInputSchema } from './UserUpdateWithoutFilesInputSchema';
import { UserUncheckedUpdateWithoutFilesInputSchema } from './UserUncheckedUpdateWithoutFilesInputSchema';
import { UserCreateWithoutFilesInputSchema } from './UserCreateWithoutFilesInputSchema';
import { UserUncheckedCreateWithoutFilesInputSchema } from './UserUncheckedCreateWithoutFilesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutFilesInputSchema: z.ZodType<Prisma.UserUpsertWithoutFilesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutFilesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutFilesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutFilesInputSchema),z.lazy(() => UserUncheckedCreateWithoutFilesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutFilesInputSchema;
