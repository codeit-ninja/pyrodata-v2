import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const WidgetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WidgetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WidgetScalarWhereWithAggregatesInputSchema),z.lazy(() => WidgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WidgetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WidgetScalarWhereWithAggregatesInputSchema),z.lazy(() => WidgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pageContentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default WidgetScalarWhereWithAggregatesInputSchema;
