import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetCreateWithoutPageContentInputSchema } from './WidgetCreateWithoutPageContentInputSchema';
import { WidgetUncheckedCreateWithoutPageContentInputSchema } from './WidgetUncheckedCreateWithoutPageContentInputSchema';
import { WidgetCreateOrConnectWithoutPageContentInputSchema } from './WidgetCreateOrConnectWithoutPageContentInputSchema';
import { WidgetUpsertWithWhereUniqueWithoutPageContentInputSchema } from './WidgetUpsertWithWhereUniqueWithoutPageContentInputSchema';
import { WidgetCreateManyPageContentInputEnvelopeSchema } from './WidgetCreateManyPageContentInputEnvelopeSchema';
import { WidgetWhereUniqueInputSchema } from './WidgetWhereUniqueInputSchema';
import { WidgetUpdateWithWhereUniqueWithoutPageContentInputSchema } from './WidgetUpdateWithWhereUniqueWithoutPageContentInputSchema';
import { WidgetUpdateManyWithWhereWithoutPageContentInputSchema } from './WidgetUpdateManyWithWhereWithoutPageContentInputSchema';
import { WidgetScalarWhereInputSchema } from './WidgetScalarWhereInputSchema';

export const WidgetUpdateManyWithoutPageContentNestedInputSchema: z.ZodType<Prisma.WidgetUpdateManyWithoutPageContentNestedInput> = z.object({
  create: z.union([ z.lazy(() => WidgetCreateWithoutPageContentInputSchema),z.lazy(() => WidgetCreateWithoutPageContentInputSchema).array(),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WidgetCreateOrConnectWithoutPageContentInputSchema),z.lazy(() => WidgetCreateOrConnectWithoutPageContentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WidgetUpsertWithWhereUniqueWithoutPageContentInputSchema),z.lazy(() => WidgetUpsertWithWhereUniqueWithoutPageContentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WidgetCreateManyPageContentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WidgetUpdateWithWhereUniqueWithoutPageContentInputSchema),z.lazy(() => WidgetUpdateWithWhereUniqueWithoutPageContentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WidgetUpdateManyWithWhereWithoutPageContentInputSchema),z.lazy(() => WidgetUpdateManyWithWhereWithoutPageContentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WidgetScalarWhereInputSchema),z.lazy(() => WidgetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WidgetUpdateManyWithoutPageContentNestedInputSchema;
