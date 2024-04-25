import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsUncheckedCreateWithoutChemicalsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  symbol: z.string()
}).strict();

export default HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema;
