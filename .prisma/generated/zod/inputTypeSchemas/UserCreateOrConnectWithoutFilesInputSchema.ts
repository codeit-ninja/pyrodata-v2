import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutFilesInputSchema } from './UserCreateWithoutFilesInputSchema';
import { UserUncheckedCreateWithoutFilesInputSchema } from './UserUncheckedCreateWithoutFilesInputSchema';

export const UserCreateOrConnectWithoutFilesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFilesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutFilesInputSchema),z.lazy(() => UserUncheckedCreateWithoutFilesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutFilesInputSchema;
