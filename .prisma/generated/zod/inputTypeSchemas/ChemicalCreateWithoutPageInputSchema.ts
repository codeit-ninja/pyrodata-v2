import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HazardSymbolsCreateNestedManyWithoutChemicalsInputSchema } from './HazardSymbolsCreateNestedManyWithoutChemicalsInputSchema';

export const ChemicalCreateWithoutPageInputSchema: z.ZodType<Prisma.ChemicalCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  formula: z.string().optional().nullable(),
  hazards: z.lazy(() => HazardSymbolsCreateNestedManyWithoutChemicalsInputSchema).optional()
}).strict();

export default ChemicalCreateWithoutPageInputSchema;
