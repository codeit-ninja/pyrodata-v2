import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutFilesInputSchema } from './UserCreateWithoutFilesInputSchema';
import { UserUncheckedCreateWithoutFilesInputSchema } from './UserUncheckedCreateWithoutFilesInputSchema';
import { UserCreateOrConnectWithoutFilesInputSchema } from './UserCreateOrConnectWithoutFilesInputSchema';
import { UserUpsertWithoutFilesInputSchema } from './UserUpsertWithoutFilesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutFilesInputSchema } from './UserUpdateToOneWithWhereWithoutFilesInputSchema';
import { UserUpdateWithoutFilesInputSchema } from './UserUpdateWithoutFilesInputSchema';
import { UserUncheckedUpdateWithoutFilesInputSchema } from './UserUncheckedUpdateWithoutFilesInputSchema';

export const UserUpdateOneWithoutFilesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutFilesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutFilesInputSchema),z.lazy(() => UserUncheckedCreateWithoutFilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFilesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutFilesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutFilesInputSchema),z.lazy(() => UserUpdateWithoutFilesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutFilesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutFilesNestedInputSchema;
