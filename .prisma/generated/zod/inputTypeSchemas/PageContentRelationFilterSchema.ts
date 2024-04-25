import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageContentWhereInputSchema } from './PageContentWhereInputSchema';

export const PageContentRelationFilterSchema: z.ZodType<Prisma.PageContentRelationFilter> = z.object({
  is: z.lazy(() => PageContentWhereInputSchema).optional(),
  isNot: z.lazy(() => PageContentWhereInputSchema).optional()
}).strict();

export default PageContentRelationFilterSchema;
