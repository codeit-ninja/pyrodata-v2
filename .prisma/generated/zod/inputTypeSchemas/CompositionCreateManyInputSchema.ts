import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreatebadgesInputSchema } from './CompositionCreatebadgesInputSchema';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';

export const CompositionCreateManyInputSchema: z.ZodType<Prisma.CompositionCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  videoId: z.string().optional().nullable(),
  badges: z.union([ z.lazy(() => CompositionCreatebadgesInputSchema),z.lazy(() => CompositionBadgesSchema).array() ]).optional(),
  userId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default CompositionCreateManyInputSchema;
