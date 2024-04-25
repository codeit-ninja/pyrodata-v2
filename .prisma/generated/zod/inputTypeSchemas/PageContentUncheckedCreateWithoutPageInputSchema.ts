import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetUncheckedCreateNestedManyWithoutPageContentInputSchema } from './WidgetUncheckedCreateNestedManyWithoutPageContentInputSchema';

export const PageContentUncheckedCreateWithoutPageInputSchema: z.ZodType<Prisma.PageContentUncheckedCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
  widgets: z.lazy(() => WidgetUncheckedCreateNestedManyWithoutPageContentInputSchema).optional()
}).strict();

export default PageContentUncheckedCreateWithoutPageInputSchema;
