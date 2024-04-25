import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetWhereUniqueInputSchema } from './WidgetWhereUniqueInputSchema';
import { WidgetCreateWithoutPageContentInputSchema } from './WidgetCreateWithoutPageContentInputSchema';
import { WidgetUncheckedCreateWithoutPageContentInputSchema } from './WidgetUncheckedCreateWithoutPageContentInputSchema';

export const WidgetCreateOrConnectWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetCreateOrConnectWithoutPageContentInput> = z.object({
  where: z.lazy(() => WidgetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WidgetCreateWithoutPageContentInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema) ]),
}).strict();

export default WidgetCreateOrConnectWithoutPageContentInputSchema;
