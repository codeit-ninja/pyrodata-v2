import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PageContentCreateManyInputSchema: z.ZodType<Prisma.PageContentCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional()
}).strict();

export default PageContentCreateManyInputSchema;
