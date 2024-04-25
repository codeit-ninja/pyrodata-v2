import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';

export const CompositionCreatebadgesInputSchema: z.ZodType<Prisma.CompositionCreatebadgesInput> = z.object({
  set: z.lazy(() => CompositionBadgesSchema).array()
}).strict();

export default CompositionCreatebadgesInputSchema;
