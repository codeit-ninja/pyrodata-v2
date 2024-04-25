import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryUncheckedCreateWithoutCompositionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  slug: z.string()
}).strict();

export default CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema;
