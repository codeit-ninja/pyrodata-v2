import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetWhereInputSchema } from './WidgetWhereInputSchema';

export const WidgetRelationFilterSchema: z.ZodType<Prisma.WidgetRelationFilter> = z.object({
  is: z.lazy(() => WidgetWhereInputSchema).optional(),
  isNot: z.lazy(() => WidgetWhereInputSchema).optional()
}).strict();

export default WidgetRelationFilterSchema;
