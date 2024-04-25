import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetWhereUniqueInputSchema } from './WidgetWhereUniqueInputSchema';
import { WidgetCreateWithoutImageWidgetInputSchema } from './WidgetCreateWithoutImageWidgetInputSchema';
import { WidgetUncheckedCreateWithoutImageWidgetInputSchema } from './WidgetUncheckedCreateWithoutImageWidgetInputSchema';

export const WidgetCreateOrConnectWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetCreateOrConnectWithoutImageWidgetInput> = z.object({
  where: z.lazy(() => WidgetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WidgetCreateWithoutImageWidgetInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutImageWidgetInputSchema) ]),
}).strict();

export default WidgetCreateOrConnectWithoutImageWidgetInputSchema;
