import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TokenCreateManyInputSchema: z.ZodType<Prisma.TokenCreateManyInput> = z.object({
  id: z.number().int().optional(),
  token: z.string(),
  userId: z.string()
}).strict();

export default TokenCreateManyInputSchema;
