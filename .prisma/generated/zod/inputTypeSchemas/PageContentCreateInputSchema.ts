import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateNestedManyWithoutContentInputSchema } from './PageCreateNestedManyWithoutContentInputSchema';
import { WidgetCreateNestedManyWithoutPageContentInputSchema } from './WidgetCreateNestedManyWithoutPageContentInputSchema';

export const PageContentCreateInputSchema: z.ZodType<Prisma.PageContentCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
  page: z.lazy(() => PageCreateNestedManyWithoutContentInputSchema).optional(),
  widgets: z.lazy(() => WidgetCreateNestedManyWithoutPageContentInputSchema).optional()
}).strict();

export default PageContentCreateInputSchema;
