import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetCreateWithoutImageWidgetInputSchema } from './WidgetCreateWithoutImageWidgetInputSchema';
import { WidgetUncheckedCreateWithoutImageWidgetInputSchema } from './WidgetUncheckedCreateWithoutImageWidgetInputSchema';
import { WidgetCreateOrConnectWithoutImageWidgetInputSchema } from './WidgetCreateOrConnectWithoutImageWidgetInputSchema';
import { WidgetUpsertWithoutImageWidgetInputSchema } from './WidgetUpsertWithoutImageWidgetInputSchema';
import { WidgetWhereUniqueInputSchema } from './WidgetWhereUniqueInputSchema';
import { WidgetUpdateToOneWithWhereWithoutImageWidgetInputSchema } from './WidgetUpdateToOneWithWhereWithoutImageWidgetInputSchema';
import { WidgetUpdateWithoutImageWidgetInputSchema } from './WidgetUpdateWithoutImageWidgetInputSchema';
import { WidgetUncheckedUpdateWithoutImageWidgetInputSchema } from './WidgetUncheckedUpdateWithoutImageWidgetInputSchema';

export const WidgetUpdateOneRequiredWithoutImageWidgetNestedInputSchema: z.ZodType<Prisma.WidgetUpdateOneRequiredWithoutImageWidgetNestedInput> = z.object({
  create: z.union([ z.lazy(() => WidgetCreateWithoutImageWidgetInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutImageWidgetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WidgetCreateOrConnectWithoutImageWidgetInputSchema).optional(),
  upsert: z.lazy(() => WidgetUpsertWithoutImageWidgetInputSchema).optional(),
  connect: z.lazy(() => WidgetWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WidgetUpdateToOneWithWhereWithoutImageWidgetInputSchema),z.lazy(() => WidgetUpdateWithoutImageWidgetInputSchema),z.lazy(() => WidgetUncheckedUpdateWithoutImageWidgetInputSchema) ]).optional(),
}).strict();

export default WidgetUpdateOneRequiredWithoutImageWidgetNestedInputSchema;
