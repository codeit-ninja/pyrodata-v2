import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const PageContentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PageContentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PageContentScalarWhereWithAggregatesInputSchema),z.lazy(() => PageContentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageContentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageContentScalarWhereWithAggregatesInputSchema),z.lazy(() => PageContentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  html: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sidebar: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PageContentScalarWhereWithAggregatesInputSchema;
