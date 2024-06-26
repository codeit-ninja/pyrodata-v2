import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export default SessionUncheckedCreateWithoutUserInputSchema;
