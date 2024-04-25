import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';

export const ImageWidgetScalarWhereInputSchema: z.ZodType<Prisma.ImageWidgetScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ImageWidgetScalarWhereInputSchema),z.lazy(() => ImageWidgetScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageWidgetScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageWidgetScalarWhereInputSchema),z.lazy(() => ImageWidgetScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  widgetId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default ImageWidgetScalarWhereInputSchema;
