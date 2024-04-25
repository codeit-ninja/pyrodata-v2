import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CompositionCountOutputTypeSelectSchema: z.ZodType<Prisma.CompositionCountOutputTypeSelect> = z.object({
  ingredients: z.boolean().optional(),
  categories: z.boolean().optional(),
}).strict();

export default CompositionCountOutputTypeSelectSchema;
