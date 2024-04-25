import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetWhereInputSchema } from './WidgetWhereInputSchema';
import { WidgetUpdateWithoutImageWidgetInputSchema } from './WidgetUpdateWithoutImageWidgetInputSchema';
import { WidgetUncheckedUpdateWithoutImageWidgetInputSchema } from './WidgetUncheckedUpdateWithoutImageWidgetInputSchema';

export const WidgetUpdateToOneWithWhereWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetUpdateToOneWithWhereWithoutImageWidgetInput> = z.object({
  where: z.lazy(() => WidgetWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WidgetUpdateWithoutImageWidgetInputSchema),z.lazy(() => WidgetUncheckedUpdateWithoutImageWidgetInputSchema) ]),
}).strict();

export default WidgetUpdateToOneWithWhereWithoutImageWidgetInputSchema;
