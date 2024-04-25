import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CompositionBadgeCreateInputSchema: z.ZodType<Prisma.CompositionBadgeCreateInput> = z.object({
}).strict();

export default CompositionBadgeCreateInputSchema;
