import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetWhereInputSchema } from './WidgetWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { PageContentRelationFilterSchema } from './PageContentRelationFilterSchema';
import { PageContentWhereInputSchema } from './PageContentWhereInputSchema';
import { ImageWidgetNullableRelationFilterSchema } from './ImageWidgetNullableRelationFilterSchema';
import { ImageWidgetWhereInputSchema } from './ImageWidgetWhereInputSchema';

export const WidgetWhereUniqueInputSchema: z.ZodType<Prisma.WidgetWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => WidgetWhereInputSchema),z.lazy(() => WidgetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WidgetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WidgetWhereInputSchema),z.lazy(() => WidgetWhereInputSchema).array() ]).optional(),
  pageContentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pageContent: z.union([ z.lazy(() => PageContentRelationFilterSchema),z.lazy(() => PageContentWhereInputSchema) ]).optional(),
  imageWidget: z.union([ z.lazy(() => ImageWidgetNullableRelationFilterSchema),z.lazy(() => ImageWidgetWhereInputSchema) ]).optional().nullable(),
}).strict());

export default WidgetWhereUniqueInputSchema;
