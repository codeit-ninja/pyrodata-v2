import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const CompositionBadgeWhereInputSchema: z.ZodType<Prisma.CompositionBadgeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompositionBadgeWhereInputSchema),z.lazy(() => CompositionBadgeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionBadgeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionBadgeWhereInputSchema),z.lazy(() => CompositionBadgeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default CompositionBadgeWhereInputSchema;
