import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetWhereUniqueInputSchema } from './WidgetWhereUniqueInputSchema';
import { WidgetUpdateWithoutPageContentInputSchema } from './WidgetUpdateWithoutPageContentInputSchema';
import { WidgetUncheckedUpdateWithoutPageContentInputSchema } from './WidgetUncheckedUpdateWithoutPageContentInputSchema';

export const WidgetUpdateWithWhereUniqueWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUpdateWithWhereUniqueWithoutPageContentInput> = z.object({
  where: z.lazy(() => WidgetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WidgetUpdateWithoutPageContentInputSchema),z.lazy(() => WidgetUncheckedUpdateWithoutPageContentInputSchema) ]),
}).strict();

export default WidgetUpdateWithWhereUniqueWithoutPageContentInputSchema;
