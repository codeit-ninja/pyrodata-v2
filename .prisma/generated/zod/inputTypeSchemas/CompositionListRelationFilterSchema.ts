import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionWhereInputSchema } from './CompositionWhereInputSchema';

export const CompositionListRelationFilterSchema: z.ZodType<Prisma.CompositionListRelationFilter> = z.object({
  every: z.lazy(() => CompositionWhereInputSchema).optional(),
  some: z.lazy(() => CompositionWhereInputSchema).optional(),
  none: z.lazy(() => CompositionWhereInputSchema).optional()
}).strict();

export default CompositionListRelationFilterSchema;
