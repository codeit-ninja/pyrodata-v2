import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HazardSymbolsWhereUniqueInputSchema } from './HazardSymbolsWhereUniqueInputSchema';
import { HazardSymbolsUpdateWithoutChemicalsInputSchema } from './HazardSymbolsUpdateWithoutChemicalsInputSchema';
import { HazardSymbolsUncheckedUpdateWithoutChemicalsInputSchema } from './HazardSymbolsUncheckedUpdateWithoutChemicalsInputSchema';

export const HazardSymbolsUpdateWithWhereUniqueWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsUpdateWithWhereUniqueWithoutChemicalsInput> = z.object({
  where: z.lazy(() => HazardSymbolsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => HazardSymbolsUpdateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUncheckedUpdateWithoutChemicalsInputSchema) ]),
}).strict();

export default HazardSymbolsUpdateWithWhereUniqueWithoutChemicalsInputSchema;
