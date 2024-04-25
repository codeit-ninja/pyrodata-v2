import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export default SessionCreateWithoutUserInputSchema;
