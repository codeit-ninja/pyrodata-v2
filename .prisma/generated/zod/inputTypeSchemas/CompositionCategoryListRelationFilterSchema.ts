import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCategoryWhereInputSchema } from './CompositionCategoryWhereInputSchema';

export const CompositionCategoryListRelationFilterSchema: z.ZodType<Prisma.CompositionCategoryListRelationFilter> = z.object({
  every: z.lazy(() => CompositionCategoryWhereInputSchema).optional(),
  some: z.lazy(() => CompositionCategoryWhereInputSchema).optional(),
  none: z.lazy(() => CompositionCategoryWhereInputSchema).optional()
}).strict();

export default CompositionCategoryListRelationFilterSchema;
