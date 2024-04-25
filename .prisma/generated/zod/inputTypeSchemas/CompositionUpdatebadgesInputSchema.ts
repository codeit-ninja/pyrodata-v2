import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';

export const CompositionUpdatebadgesInputSchema: z.ZodType<Prisma.CompositionUpdatebadgesInput> = z.object({
  set: z.lazy(() => CompositionBadgesSchema).array().optional(),
  push: z.union([ z.lazy(() => CompositionBadgesSchema),z.lazy(() => CompositionBadgesSchema).array() ]).optional(),
}).strict();

export default CompositionUpdatebadgesInputSchema;
