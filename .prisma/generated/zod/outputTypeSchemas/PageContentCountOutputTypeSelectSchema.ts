import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PageContentCountOutputTypeSelectSchema: z.ZodType<Prisma.PageContentCountOutputTypeSelect> = z.object({
  page: z.boolean().optional(),
  widgets: z.boolean().optional(),
}).strict();

export default PageContentCountOutputTypeSelectSchema;
