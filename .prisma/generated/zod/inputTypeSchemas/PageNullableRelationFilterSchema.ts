import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereInputSchema } from './PageWhereInputSchema';

export const PageNullableRelationFilterSchema: z.ZodType<Prisma.PageNullableRelationFilter> = z.object({
  is: z.lazy(() => PageWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PageWhereInputSchema).optional().nullable()
}).strict();

export default PageNullableRelationFilterSchema;
