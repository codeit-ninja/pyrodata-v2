import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IngredientUncheckedCreateWithoutPageInputSchema: z.ZodType<Prisma.IngredientUncheckedCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  compositionId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default IngredientUncheckedCreateWithoutPageInputSchema;
