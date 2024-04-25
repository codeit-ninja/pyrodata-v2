import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { FileCreateNestedManyWithoutUserInputSchema } from './FileCreateNestedManyWithoutUserInputSchema';
import { PageCreateNestedManyWithoutUserInputSchema } from './PageCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutSessionInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  files: z.lazy(() => FileCreateNestedManyWithoutUserInputSchema).optional(),
  pages: z.lazy(() => PageCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutSessionInputSchema;
