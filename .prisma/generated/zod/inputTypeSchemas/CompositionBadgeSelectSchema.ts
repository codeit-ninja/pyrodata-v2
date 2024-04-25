import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CompositionBadgeSelectSchema: z.ZodType<Prisma.CompositionBadgeSelect> = z.object({
  id: z.boolean().optional(),
}).strict()

export default CompositionBadgeSelectSchema;
