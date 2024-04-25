import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionWhereInputSchema } from './CompositionWhereInputSchema';

export const CompositionRelationFilterSchema: z.ZodType<Prisma.CompositionRelationFilter> = z.object({
  is: z.lazy(() => CompositionWhereInputSchema).optional(),
  isNot: z.lazy(() => CompositionWhereInputSchema).optional()
}).strict();

export default CompositionRelationFilterSchema;
