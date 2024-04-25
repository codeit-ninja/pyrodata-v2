import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IngredientUncheckedCreateWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientUncheckedCreateWithoutCompositionInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  pageId: z.string().optional().nullable()
}).strict();

export default IngredientUncheckedCreateWithoutCompositionInputSchema;
