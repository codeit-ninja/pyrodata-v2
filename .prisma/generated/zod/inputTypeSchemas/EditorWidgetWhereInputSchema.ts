import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const EditorWidgetWhereInputSchema: z.ZodType<Prisma.EditorWidgetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EditorWidgetWhereInputSchema),z.lazy(() => EditorWidgetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EditorWidgetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EditorWidgetWhereInputSchema),z.lazy(() => EditorWidgetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default EditorWidgetWhereInputSchema;
