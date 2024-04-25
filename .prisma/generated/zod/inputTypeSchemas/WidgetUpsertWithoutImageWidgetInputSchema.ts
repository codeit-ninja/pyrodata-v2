import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetUpdateWithoutImageWidgetInputSchema } from './WidgetUpdateWithoutImageWidgetInputSchema';
import { WidgetUncheckedUpdateWithoutImageWidgetInputSchema } from './WidgetUncheckedUpdateWithoutImageWidgetInputSchema';
import { WidgetCreateWithoutImageWidgetInputSchema } from './WidgetCreateWithoutImageWidgetInputSchema';
import { WidgetUncheckedCreateWithoutImageWidgetInputSchema } from './WidgetUncheckedCreateWithoutImageWidgetInputSchema';
import { WidgetWhereInputSchema } from './WidgetWhereInputSchema';

export const WidgetUpsertWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetUpsertWithoutImageWidgetInput> = z.object({
  update: z.union([ z.lazy(() => WidgetUpdateWithoutImageWidgetInputSchema),z.lazy(() => WidgetUncheckedUpdateWithoutImageWidgetInputSchema) ]),
  create: z.union([ z.lazy(() => WidgetCreateWithoutImageWidgetInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutImageWidgetInputSchema) ]),
  where: z.lazy(() => WidgetWhereInputSchema).optional()
}).strict();

export default WidgetUpsertWithoutImageWidgetInputSchema;
