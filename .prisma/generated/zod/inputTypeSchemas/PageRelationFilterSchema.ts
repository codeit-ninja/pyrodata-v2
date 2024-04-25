import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereInputSchema } from './PageWhereInputSchema';

export const PageRelationFilterSchema: z.ZodType<Prisma.PageRelationFilter> = z.object({
  is: z.lazy(() => PageWhereInputSchema).optional(),
  isNot: z.lazy(() => PageWhereInputSchema).optional()
}).strict();

export default PageRelationFilterSchema;
