import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IngredientUncheckedCreateInputSchema: z.ZodType<Prisma.IngredientUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  compositionId: z.string(),
  pageId: z.string().optional().nullable()
}).strict();

export default IngredientUncheckedCreateInputSchema;
