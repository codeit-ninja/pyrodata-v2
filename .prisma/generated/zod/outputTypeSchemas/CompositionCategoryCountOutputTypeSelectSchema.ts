import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CompositionCategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.CompositionCategoryCountOutputTypeSelect> = z.object({
  compositions: z.boolean().optional(),
}).strict();

export default CompositionCategoryCountOutputTypeSelectSchema;
