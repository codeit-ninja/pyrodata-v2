import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetCreateWithoutImageWidgetInputSchema } from './WidgetCreateWithoutImageWidgetInputSchema';
import { WidgetUncheckedCreateWithoutImageWidgetInputSchema } from './WidgetUncheckedCreateWithoutImageWidgetInputSchema';
import { WidgetCreateOrConnectWithoutImageWidgetInputSchema } from './WidgetCreateOrConnectWithoutImageWidgetInputSchema';
import { WidgetWhereUniqueInputSchema } from './WidgetWhereUniqueInputSchema';

export const WidgetCreateNestedOneWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetCreateNestedOneWithoutImageWidgetInput> = z.object({
  create: z.union([ z.lazy(() => WidgetCreateWithoutImageWidgetInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutImageWidgetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WidgetCreateOrConnectWithoutImageWidgetInputSchema).optional(),
  connect: z.lazy(() => WidgetWhereUniqueInputSchema).optional()
}).strict();

export default WidgetCreateNestedOneWithoutImageWidgetInputSchema;
