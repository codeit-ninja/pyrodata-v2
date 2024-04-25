import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EditorWidgetWhereInputSchema } from './EditorWidgetWhereInputSchema';

export const EditorWidgetWhereUniqueInputSchema: z.ZodType<Prisma.EditorWidgetWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => EditorWidgetWhereInputSchema),z.lazy(() => EditorWidgetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EditorWidgetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EditorWidgetWhereInputSchema),z.lazy(() => EditorWidgetWhereInputSchema).array() ]).optional(),
}).strict());

export default EditorWidgetWhereUniqueInputSchema;
