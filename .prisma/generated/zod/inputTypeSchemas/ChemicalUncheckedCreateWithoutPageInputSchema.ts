import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HazardSymbolsUncheckedCreateNestedManyWithoutChemicalsInputSchema } from './HazardSymbolsUncheckedCreateNestedManyWithoutChemicalsInputSchema';

export const ChemicalUncheckedCreateWithoutPageInputSchema: z.ZodType<Prisma.ChemicalUncheckedCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  formula: z.string().optional().nullable(),
  hazards: z.lazy(() => HazardSymbolsUncheckedCreateNestedManyWithoutChemicalsInputSchema).optional()
}).strict();

export default ChemicalUncheckedCreateWithoutPageInputSchema;
