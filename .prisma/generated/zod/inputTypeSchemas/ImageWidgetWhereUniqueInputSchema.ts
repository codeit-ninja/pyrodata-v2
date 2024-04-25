import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetWhereInputSchema } from './ImageWidgetWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { WidgetRelationFilterSchema } from './WidgetRelationFilterSchema';
import { WidgetWhereInputSchema } from './WidgetWhereInputSchema';
import { FileRelationFilterSchema } from './FileRelationFilterSchema';
import { FileWhereInputSchema } from './FileWhereInputSchema';

export const ImageWidgetWhereUniqueInputSchema: z.ZodType<Prisma.ImageWidgetWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    widgetId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    widgetId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  widgetId: z.string().optional(),
  AND: z.union([ z.lazy(() => ImageWidgetWhereInputSchema),z.lazy(() => ImageWidgetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageWidgetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageWidgetWhereInputSchema),z.lazy(() => ImageWidgetWhereInputSchema).array() ]).optional(),
  fileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  widgets: z.union([ z.lazy(() => WidgetRelationFilterSchema),z.lazy(() => WidgetWhereInputSchema) ]).optional(),
  file: z.union([ z.lazy(() => FileRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional(),
}).strict());

export default ImageWidgetWhereUniqueInputSchema;
