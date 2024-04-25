import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ChemicalUncheckedCreateWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalUncheckedCreateWithoutHazardsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  formula: z.string().optional().nullable(),
  pageId: z.string()
}).strict();

export default ChemicalUncheckedCreateWithoutHazardsInputSchema;
