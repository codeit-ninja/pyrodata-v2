import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TokenUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.TokenUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  token: z.string()
}).strict();

export default TokenUncheckedCreateWithoutUserInputSchema;
