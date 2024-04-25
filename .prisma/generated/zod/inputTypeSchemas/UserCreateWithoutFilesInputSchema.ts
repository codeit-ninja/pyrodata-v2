import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { SessionCreateNestedOneWithoutUserInputSchema } from './SessionCreateNestedOneWithoutUserInputSchema';
import { PageCreateNestedManyWithoutUserInputSchema } from './PageCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutFilesInputSchema: z.ZodType<Prisma.UserCreateWithoutFilesInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  session: z.lazy(() => SessionCreateNestedOneWithoutUserInputSchema).optional(),
  pages: z.lazy(() => PageCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutFilesInputSchema;
