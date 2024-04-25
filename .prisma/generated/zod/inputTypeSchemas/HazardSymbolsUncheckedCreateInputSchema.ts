import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalUncheckedCreateNestedManyWithoutHazardsInputSchema } from './ChemicalUncheckedCreateNestedManyWithoutHazardsInputSchema';

export const HazardSymbolsUncheckedCreateInputSchema: z.ZodType<Prisma.HazardSymbolsUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  symbol: z.string(),
  chemicals: z.lazy(() => ChemicalUncheckedCreateNestedManyWithoutHazardsInputSchema).optional()
}).strict();

export default HazardSymbolsUncheckedCreateInputSchema;
