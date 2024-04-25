import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CompositionBadgeUncheckedCreateInputSchema: z.ZodType<Prisma.CompositionBadgeUncheckedCreateInput> = z.object({
  id: z.number().int().optional()
}).strict();

export default CompositionBadgeUncheckedCreateInputSchema;
