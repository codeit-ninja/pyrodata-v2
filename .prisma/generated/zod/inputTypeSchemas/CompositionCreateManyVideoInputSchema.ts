import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreatebadgesInputSchema } from './CompositionCreatebadgesInputSchema';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';

export const CompositionCreateManyVideoInputSchema: z.ZodType<Prisma.CompositionCreateManyVideoInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  badges: z.union([ z.lazy(() => CompositionCreatebadgesInputSchema),z.lazy(() => CompositionBadgesSchema).array() ]).optional(),
}).strict();

export default CompositionCreateManyVideoInputSchema;
