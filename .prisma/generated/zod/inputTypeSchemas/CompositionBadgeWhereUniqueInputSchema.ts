import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionBadgeWhereInputSchema } from './CompositionBadgeWhereInputSchema';

export const CompositionBadgeWhereUniqueInputSchema: z.ZodType<Prisma.CompositionBadgeWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => CompositionBadgeWhereInputSchema),z.lazy(() => CompositionBadgeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionBadgeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionBadgeWhereInputSchema),z.lazy(() => CompositionBadgeWhereInputSchema).array() ]).optional(),
}).strict());

export default CompositionBadgeWhereUniqueInputSchema;
