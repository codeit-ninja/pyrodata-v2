import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalWhereUniqueInputSchema } from './ChemicalWhereUniqueInputSchema';
import { ChemicalUpdateWithoutHazardsInputSchema } from './ChemicalUpdateWithoutHazardsInputSchema';
import { ChemicalUncheckedUpdateWithoutHazardsInputSchema } from './ChemicalUncheckedUpdateWithoutHazardsInputSchema';

export const ChemicalUpdateWithWhereUniqueWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalUpdateWithWhereUniqueWithoutHazardsInput> = z.object({
  where: z.lazy(() => ChemicalWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ChemicalUpdateWithoutHazardsInputSchema),z.lazy(() => ChemicalUncheckedUpdateWithoutHazardsInputSchema) ]),
}).strict();

export default ChemicalUpdateWithWhereUniqueWithoutHazardsInputSchema;
