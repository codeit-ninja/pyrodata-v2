import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateNestedOneWithoutChemicalInputSchema } from './PageCreateNestedOneWithoutChemicalInputSchema';

export const ChemicalCreateWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalCreateWithoutHazardsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  formula: z.string().optional().nullable(),
  page: z.lazy(() => PageCreateNestedOneWithoutChemicalInputSchema)
}).strict();

export default ChemicalCreateWithoutHazardsInputSchema;
