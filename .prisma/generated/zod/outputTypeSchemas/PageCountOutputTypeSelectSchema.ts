import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PageCountOutputTypeSelectSchema: z.ZodType<Prisma.PageCountOutputTypeSelect> = z.object({
  ingredients: z.boolean().optional(),
}).strict();

export default PageCountOutputTypeSelectSchema;
