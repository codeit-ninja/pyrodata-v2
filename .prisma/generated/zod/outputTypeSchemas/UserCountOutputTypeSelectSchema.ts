import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  files: z.boolean().optional(),
  pages: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
