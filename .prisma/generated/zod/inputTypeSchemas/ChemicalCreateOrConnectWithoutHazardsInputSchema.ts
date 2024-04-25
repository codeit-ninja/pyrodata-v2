import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalWhereUniqueInputSchema } from './ChemicalWhereUniqueInputSchema';
import { ChemicalCreateWithoutHazardsInputSchema } from './ChemicalCreateWithoutHazardsInputSchema';
import { ChemicalUncheckedCreateWithoutHazardsInputSchema } from './ChemicalUncheckedCreateWithoutHazardsInputSchema';

export const ChemicalCreateOrConnectWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalCreateOrConnectWithoutHazardsInput> = z.object({
  where: z.lazy(() => ChemicalWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChemicalCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema) ]),
}).strict();

export default ChemicalCreateOrConnectWithoutHazardsInputSchema;
