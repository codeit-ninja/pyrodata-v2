import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TokenUncheckedCreateInputSchema: z.ZodType<Prisma.TokenUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  token: z.string(),
  userId: z.string()
}).strict();

export default TokenUncheckedCreateInputSchema;
