import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  userId: z.string()
}).strict();

export default SessionUncheckedCreateInputSchema;
