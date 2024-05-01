import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TokenCreateWithoutUserInputSchema: z.ZodType<Prisma.TokenCreateWithoutUserInput> = z.object({
  token: z.string()
}).strict();

export default TokenCreateWithoutUserInputSchema;
