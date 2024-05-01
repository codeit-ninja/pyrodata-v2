import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TokenCreateManyUserInputSchema: z.ZodType<Prisma.TokenCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  token: z.string()
}).strict();

export default TokenCreateManyUserInputSchema;
