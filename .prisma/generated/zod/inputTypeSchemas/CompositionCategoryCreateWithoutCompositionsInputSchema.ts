import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CompositionCategoryCreateWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryCreateWithoutCompositionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  slug: z.string()
}).strict();

export default CompositionCategoryCreateWithoutCompositionsInputSchema;
