import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';

export const WidgetScalarWhereInputSchema: z.ZodType<Prisma.WidgetScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WidgetScalarWhereInputSchema),z.lazy(() => WidgetScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WidgetScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WidgetScalarWhereInputSchema),z.lazy(() => WidgetScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pageContentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default WidgetScalarWhereInputSchema;
