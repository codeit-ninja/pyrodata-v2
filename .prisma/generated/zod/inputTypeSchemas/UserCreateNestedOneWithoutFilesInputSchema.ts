import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutFilesInputSchema } from './UserCreateWithoutFilesInputSchema';
import { UserUncheckedCreateWithoutFilesInputSchema } from './UserUncheckedCreateWithoutFilesInputSchema';
import { UserCreateOrConnectWithoutFilesInputSchema } from './UserCreateOrConnectWithoutFilesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutFilesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutFilesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutFilesInputSchema),z.lazy(() => UserUncheckedCreateWithoutFilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFilesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutFilesInputSchema;
