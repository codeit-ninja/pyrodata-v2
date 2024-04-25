import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetWhereUniqueInputSchema } from './WidgetWhereUniqueInputSchema';
import { WidgetUpdateWithoutPageContentInputSchema } from './WidgetUpdateWithoutPageContentInputSchema';
import { WidgetUncheckedUpdateWithoutPageContentInputSchema } from './WidgetUncheckedUpdateWithoutPageContentInputSchema';
import { WidgetCreateWithoutPageContentInputSchema } from './WidgetCreateWithoutPageContentInputSchema';
import { WidgetUncheckedCreateWithoutPageContentInputSchema } from './WidgetUncheckedCreateWithoutPageContentInputSchema';

export const WidgetUpsertWithWhereUniqueWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUpsertWithWhereUniqueWithoutPageContentInput> = z.object({
  where: z.lazy(() => WidgetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WidgetUpdateWithoutPageContentInputSchema),z.lazy(() => WidgetUncheckedUpdateWithoutPageContentInputSchema) ]),
  create: z.union([ z.lazy(() => WidgetCreateWithoutPageContentInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema) ]),
}).strict();

export default WidgetUpsertWithWhereUniqueWithoutPageContentInputSchema;
