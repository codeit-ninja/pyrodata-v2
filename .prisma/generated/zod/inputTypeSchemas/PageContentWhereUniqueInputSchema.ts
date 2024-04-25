import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageContentWhereInputSchema } from './PageContentWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { PageListRelationFilterSchema } from './PageListRelationFilterSchema';
import { WidgetListRelationFilterSchema } from './WidgetListRelationFilterSchema';

export const PageContentWhereUniqueInputSchema: z.ZodType<Prisma.PageContentWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => PageContentWhereInputSchema),z.lazy(() => PageContentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageContentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageContentWhereInputSchema),z.lazy(() => PageContentWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  html: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sidebar: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  page: z.lazy(() => PageListRelationFilterSchema).optional(),
  widgets: z.lazy(() => WidgetListRelationFilterSchema).optional()
}).strict());

export default PageContentWhereUniqueInputSchema;
