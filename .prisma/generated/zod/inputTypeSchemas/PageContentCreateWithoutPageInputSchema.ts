import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetCreateNestedManyWithoutPageContentInputSchema } from './WidgetCreateNestedManyWithoutPageContentInputSchema';

export const PageContentCreateWithoutPageInputSchema: z.ZodType<Prisma.PageContentCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  widgets: z.lazy(() => WidgetCreateNestedManyWithoutPageContentInputSchema).optional()
}).strict();

export default PageContentCreateWithoutPageInputSchema;
