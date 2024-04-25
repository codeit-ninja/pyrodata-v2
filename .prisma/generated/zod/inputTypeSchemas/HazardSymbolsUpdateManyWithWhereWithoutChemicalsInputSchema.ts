import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HazardSymbolsScalarWhereInputSchema } from './HazardSymbolsScalarWhereInputSchema';
import { HazardSymbolsUpdateManyMutationInputSchema } from './HazardSymbolsUpdateManyMutationInputSchema';
import { HazardSymbolsUncheckedUpdateManyWithoutChemicalsInputSchema } from './HazardSymbolsUncheckedUpdateManyWithoutChemicalsInputSchema';

export const HazardSymbolsUpdateManyWithWhereWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsUpdateManyWithWhereWithoutChemicalsInput> = z.object({
  where: z.lazy(() => HazardSymbolsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => HazardSymbolsUpdateManyMutationInputSchema),z.lazy(() => HazardSymbolsUncheckedUpdateManyWithoutChemicalsInputSchema) ]),
}).strict();

export default HazardSymbolsUpdateManyWithWhereWithoutChemicalsInputSchema;
