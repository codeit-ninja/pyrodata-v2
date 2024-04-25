import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { WidgetRelationFilterSchema } from './WidgetRelationFilterSchema';
import { WidgetWhereInputSchema } from './WidgetWhereInputSchema';
import { FileRelationFilterSchema } from './FileRelationFilterSchema';
import { FileWhereInputSchema } from './FileWhereInputSchema';

export const ImageWidgetWhereInputSchema: z.ZodType<Prisma.ImageWidgetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ImageWidgetWhereInputSchema),z.lazy(() => ImageWidgetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageWidgetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageWidgetWhereInputSchema),z.lazy(() => ImageWidgetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  widgetId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  widgets: z.union([ z.lazy(() => WidgetRelationFilterSchema),z.lazy(() => WidgetWhereInputSchema) ]).optional(),
  file: z.union([ z.lazy(() => FileRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional(),
}).strict();

export default ImageWidgetWhereInputSchema;
