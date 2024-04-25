import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CompositionBadgeCreateManyInputSchema: z.ZodType<Prisma.CompositionBadgeCreateManyInput> = z.object({
  id: z.number().int().optional()
}).strict();

export default CompositionBadgeCreateManyInputSchema;
