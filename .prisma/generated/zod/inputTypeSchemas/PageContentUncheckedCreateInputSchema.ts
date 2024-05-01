import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageUncheckedCreateNestedManyWithoutContentInputSchema } from './PageUncheckedCreateNestedManyWithoutContentInputSchema';
import { WidgetUncheckedCreateNestedManyWithoutPageContentInputSchema } from './WidgetUncheckedCreateNestedManyWithoutPageContentInputSchema';

export const PageContentUncheckedCreateInputSchema: z.ZodType<Prisma.PageContentUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  page: z.lazy(() => PageUncheckedCreateNestedManyWithoutContentInputSchema).optional(),
  widgets: z.lazy(() => WidgetUncheckedCreateNestedManyWithoutPageContentInputSchema).optional()
}).strict();

export default PageContentUncheckedCreateInputSchema;
