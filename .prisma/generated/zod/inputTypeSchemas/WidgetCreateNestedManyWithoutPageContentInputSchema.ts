import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetCreateWithoutPageContentInputSchema } from './WidgetCreateWithoutPageContentInputSchema';
import { WidgetUncheckedCreateWithoutPageContentInputSchema } from './WidgetUncheckedCreateWithoutPageContentInputSchema';
import { WidgetCreateOrConnectWithoutPageContentInputSchema } from './WidgetCreateOrConnectWithoutPageContentInputSchema';
import { WidgetCreateManyPageContentInputEnvelopeSchema } from './WidgetCreateManyPageContentInputEnvelopeSchema';
import { WidgetWhereUniqueInputSchema } from './WidgetWhereUniqueInputSchema';

export const WidgetCreateNestedManyWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetCreateNestedManyWithoutPageContentInput> = z.object({
  create: z.union([ z.lazy(() => WidgetCreateWithoutPageContentInputSchema),z.lazy(() => WidgetCreateWithoutPageContentInputSchema).array(),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WidgetCreateOrConnectWithoutPageContentInputSchema),z.lazy(() => WidgetCreateOrConnectWithoutPageContentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WidgetCreateManyPageContentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WidgetCreateNestedManyWithoutPageContentInputSchema;
