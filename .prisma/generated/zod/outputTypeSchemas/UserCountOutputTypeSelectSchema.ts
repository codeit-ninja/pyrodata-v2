import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  tokens: z.boolean().optional(),
  files: z.boolean().optional(),
  pages: z.boolean().optional(),
  compositions: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
