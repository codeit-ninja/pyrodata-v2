import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetWhereInputSchema } from './WidgetWhereInputSchema';

export const WidgetListRelationFilterSchema: z.ZodType<Prisma.WidgetListRelationFilter> = z.object({
  every: z.lazy(() => WidgetWhereInputSchema).optional(),
  some: z.lazy(() => WidgetWhereInputSchema).optional(),
  none: z.lazy(() => WidgetWhereInputSchema).optional()
}).strict();

export default WidgetListRelationFilterSchema;
