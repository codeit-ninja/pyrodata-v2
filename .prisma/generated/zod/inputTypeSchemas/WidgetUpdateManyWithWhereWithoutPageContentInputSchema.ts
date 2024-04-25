import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetScalarWhereInputSchema } from './WidgetScalarWhereInputSchema';
import { WidgetUpdateManyMutationInputSchema } from './WidgetUpdateManyMutationInputSchema';
import { WidgetUncheckedUpdateManyWithoutPageContentInputSchema } from './WidgetUncheckedUpdateManyWithoutPageContentInputSchema';

export const WidgetUpdateManyWithWhereWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUpdateManyWithWhereWithoutPageContentInput> = z.object({
  where: z.lazy(() => WidgetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WidgetUpdateManyMutationInputSchema),z.lazy(() => WidgetUncheckedUpdateManyWithoutPageContentInputSchema) ]),
}).strict();

export default WidgetUpdateManyWithWhereWithoutPageContentInputSchema;
