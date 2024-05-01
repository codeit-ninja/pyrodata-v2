import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateNestedManyWithoutContentInputSchema } from './PageCreateNestedManyWithoutContentInputSchema';
import { WidgetCreateNestedManyWithoutPageContentInputSchema } from './WidgetCreateNestedManyWithoutPageContentInputSchema';

export const PageContentCreateInputSchema: z.ZodType<Prisma.PageContentCreateInput> = z.object({
  id: z.string().cuid().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  page: z.lazy(() => PageCreateNestedManyWithoutContentInputSchema).optional(),
  widgets: z.lazy(() => WidgetCreateNestedManyWithoutPageContentInputSchema).optional()
}).strict();

export default PageContentCreateInputSchema;
