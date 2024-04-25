import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { PageListRelationFilterSchema } from './PageListRelationFilterSchema';
import { WidgetListRelationFilterSchema } from './WidgetListRelationFilterSchema';

export const PageContentWhereInputSchema: z.ZodType<Prisma.PageContentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PageContentWhereInputSchema),z.lazy(() => PageContentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageContentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageContentWhereInputSchema),z.lazy(() => PageContentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  html: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sidebar: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  page: z.lazy(() => PageListRelationFilterSchema).optional(),
  widgets: z.lazy(() => WidgetListRelationFilterSchema).optional()
}).strict();

export default PageContentWhereInputSchema;
