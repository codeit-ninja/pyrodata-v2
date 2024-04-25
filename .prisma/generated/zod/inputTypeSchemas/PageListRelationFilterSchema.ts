import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereInputSchema } from './PageWhereInputSchema';

export const PageListRelationFilterSchema: z.ZodType<Prisma.PageListRelationFilter> = z.object({
  every: z.lazy(() => PageWhereInputSchema).optional(),
  some: z.lazy(() => PageWhereInputSchema).optional(),
  none: z.lazy(() => PageWhereInputSchema).optional()
}).strict();

export default PageListRelationFilterSchema;
