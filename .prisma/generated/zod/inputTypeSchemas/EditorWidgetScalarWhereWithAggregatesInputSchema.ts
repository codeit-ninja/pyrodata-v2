import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const EditorWidgetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EditorWidgetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EditorWidgetScalarWhereWithAggregatesInputSchema),z.lazy(() => EditorWidgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EditorWidgetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EditorWidgetScalarWhereWithAggregatesInputSchema),z.lazy(() => EditorWidgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default EditorWidgetScalarWhereWithAggregatesInputSchema;
