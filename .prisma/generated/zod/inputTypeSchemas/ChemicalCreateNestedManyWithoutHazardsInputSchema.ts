import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalCreateWithoutHazardsInputSchema } from './ChemicalCreateWithoutHazardsInputSchema';
import { ChemicalUncheckedCreateWithoutHazardsInputSchema } from './ChemicalUncheckedCreateWithoutHazardsInputSchema';
import { ChemicalCreateOrConnectWithoutHazardsInputSchema } from './ChemicalCreateOrConnectWithoutHazardsInputSchema';
import { ChemicalWhereUniqueInputSchema } from './ChemicalWhereUniqueInputSchema';

export const ChemicalCreateNestedManyWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalCreateNestedManyWithoutHazardsInput> = z.object({
  create: z.union([ z.lazy(() => ChemicalCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalCreateWithoutHazardsInputSchema).array(),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChemicalCreateOrConnectWithoutHazardsInputSchema),z.lazy(() => ChemicalCreateOrConnectWithoutHazardsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ChemicalCreateNestedManyWithoutHazardsInputSchema;
