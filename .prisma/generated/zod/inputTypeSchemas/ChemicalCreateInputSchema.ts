import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HazardSymbolsCreateNestedManyWithoutChemicalsInputSchema } from './HazardSymbolsCreateNestedManyWithoutChemicalsInputSchema';
import { PageCreateNestedOneWithoutChemicalInputSchema } from './PageCreateNestedOneWithoutChemicalInputSchema';

export const ChemicalCreateInputSchema: z.ZodType<Prisma.ChemicalCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  formula: z.string().optional().nullable(),
  hazards: z.lazy(() => HazardSymbolsCreateNestedManyWithoutChemicalsInputSchema).optional(),
  page: z.lazy(() => PageCreateNestedOneWithoutChemicalInputSchema)
}).strict();

export default ChemicalCreateInputSchema;
