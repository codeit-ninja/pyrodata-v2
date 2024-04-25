import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalScalarWhereInputSchema } from './ChemicalScalarWhereInputSchema';
import { ChemicalUpdateManyMutationInputSchema } from './ChemicalUpdateManyMutationInputSchema';
import { ChemicalUncheckedUpdateManyWithoutHazardsInputSchema } from './ChemicalUncheckedUpdateManyWithoutHazardsInputSchema';

export const ChemicalUpdateManyWithWhereWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalUpdateManyWithWhereWithoutHazardsInput> = z.object({
  where: z.lazy(() => ChemicalScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ChemicalUpdateManyMutationInputSchema),z.lazy(() => ChemicalUncheckedUpdateManyWithoutHazardsInputSchema) ]),
}).strict();

export default ChemicalUpdateManyWithWhereWithoutHazardsInputSchema;
