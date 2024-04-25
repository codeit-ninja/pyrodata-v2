import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IngredientCreateManyPageInputSchema: z.ZodType<Prisma.IngredientCreateManyPageInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  compositionId: z.string()
}).strict();

export default IngredientCreateManyPageInputSchema;