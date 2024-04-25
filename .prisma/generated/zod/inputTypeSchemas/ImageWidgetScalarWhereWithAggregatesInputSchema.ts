import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const ImageWidgetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ImageWidgetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ImageWidgetScalarWhereWithAggregatesInputSchema),z.lazy(() => ImageWidgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageWidgetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageWidgetScalarWhereWithAggregatesInputSchema),z.lazy(() => ImageWidgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  widgetId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  fileId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default ImageWidgetScalarWhereWithAggregatesInputSchema;
