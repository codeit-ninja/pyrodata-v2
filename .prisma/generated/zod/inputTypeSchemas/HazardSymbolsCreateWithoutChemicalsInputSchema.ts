import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const HazardSymbolsCreateWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsCreateWithoutChemicalsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  symbol: z.string()
}).strict();

export default HazardSymbolsCreateWithoutChemicalsInputSchema;
