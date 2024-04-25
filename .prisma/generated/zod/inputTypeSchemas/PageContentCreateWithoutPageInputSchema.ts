import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetCreateNestedManyWithoutPageContentInputSchema } from './WidgetCreateNestedManyWithoutPageContentInputSchema';

export const PageContentCreateWithoutPageInputSchema: z.ZodType<Prisma.PageContentCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
  widgets: z.lazy(() => WidgetCreateNestedManyWithoutPageContentInputSchema).optional()
}).strict();

export default PageContentCreateWithoutPageInputSchema;
