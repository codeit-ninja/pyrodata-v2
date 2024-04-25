import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalCreateNestedManyWithoutHazardsInputSchema } from './ChemicalCreateNestedManyWithoutHazardsInputSchema';

export const HazardSymbolsCreateInputSchema: z.ZodType<Prisma.HazardSymbolsCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  symbol: z.string(),
  chemicals: z.lazy(() => ChemicalCreateNestedManyWithoutHazardsInputSchema).optional()
}).strict();

export default HazardSymbolsCreateInputSchema;
