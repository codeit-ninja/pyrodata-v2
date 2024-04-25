import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HazardSymbolsUncheckedCreateNestedManyWithoutChemicalsInputSchema } from './HazardSymbolsUncheckedCreateNestedManyWithoutChemicalsInputSchema';

export const ChemicalUncheckedCreateInputSchema: z.ZodType<Prisma.ChemicalUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  formula: z.string().optional().nullable(),
  pageId: z.string(),
  hazards: z.lazy(() => HazardSymbolsUncheckedCreateNestedManyWithoutChemicalsInputSchema).optional()
}).strict();

export default ChemicalUncheckedCreateInputSchema;
