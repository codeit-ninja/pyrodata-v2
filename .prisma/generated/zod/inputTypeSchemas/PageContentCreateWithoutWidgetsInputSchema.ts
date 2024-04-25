import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateNestedManyWithoutContentInputSchema } from './PageCreateNestedManyWithoutContentInputSchema';

export const PageContentCreateWithoutWidgetsInputSchema: z.ZodType<Prisma.PageContentCreateWithoutWidgetsInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
  page: z.lazy(() => PageCreateNestedManyWithoutContentInputSchema).optional()
}).strict();

export default PageContentCreateWithoutWidgetsInputSchema;
