import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageUncheckedCreateNestedManyWithoutContentInputSchema } from './PageUncheckedCreateNestedManyWithoutContentInputSchema';

export const PageContentUncheckedCreateWithoutWidgetsInputSchema: z.ZodType<Prisma.PageContentUncheckedCreateWithoutWidgetsInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
  page: z.lazy(() => PageUncheckedCreateNestedManyWithoutContentInputSchema).optional()
}).strict();

export default PageContentUncheckedCreateWithoutWidgetsInputSchema;
