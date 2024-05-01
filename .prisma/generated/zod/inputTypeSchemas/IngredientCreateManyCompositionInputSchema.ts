import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const IngredientCreateManyCompositionInputSchema: z.ZodType<Prisma.IngredientCreateManyCompositionInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  pageId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default IngredientCreateManyCompositionInputSchema;
