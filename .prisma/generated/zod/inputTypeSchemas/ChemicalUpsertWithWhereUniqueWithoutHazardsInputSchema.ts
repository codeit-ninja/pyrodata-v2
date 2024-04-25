import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalWhereUniqueInputSchema } from './ChemicalWhereUniqueInputSchema';
import { ChemicalUpdateWithoutHazardsInputSchema } from './ChemicalUpdateWithoutHazardsInputSchema';
import { ChemicalUncheckedUpdateWithoutHazardsInputSchema } from './ChemicalUncheckedUpdateWithoutHazardsInputSchema';
import { ChemicalCreateWithoutHazardsInputSchema } from './ChemicalCreateWithoutHazardsInputSchema';
import { ChemicalUncheckedCreateWithoutHazardsInputSchema } from './ChemicalUncheckedCreateWithoutHazardsInputSchema';

export const ChemicalUpsertWithWhereUniqueWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalUpsertWithWhereUniqueWithoutHazardsInput> = z.object({
  where: z.lazy(() => ChemicalWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ChemicalUpdateWithoutHazardsInputSchema),z.lazy(() => ChemicalUncheckedUpdateWithoutHazardsInputSchema) ]),
  create: z.union([ z.lazy(() => ChemicalCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema) ]),
}).strict();

export default ChemicalUpsertWithWhereUniqueWithoutHazardsInputSchema;
