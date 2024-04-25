import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ChemicalCreateManyInputSchema: z.ZodType<Prisma.ChemicalCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  formula: z.string().optional().nullable(),
  pageId: z.string()
}).strict();

export default ChemicalCreateManyInputSchema;
