import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HazardSymbolsWhereUniqueInputSchema } from './HazardSymbolsWhereUniqueInputSchema';
import { HazardSymbolsUpdateWithoutChemicalsInputSchema } from './HazardSymbolsUpdateWithoutChemicalsInputSchema';
import { HazardSymbolsUncheckedUpdateWithoutChemicalsInputSchema } from './HazardSymbolsUncheckedUpdateWithoutChemicalsInputSchema';
import { HazardSymbolsCreateWithoutChemicalsInputSchema } from './HazardSymbolsCreateWithoutChemicalsInputSchema';
import { HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema } from './HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema';

export const HazardSymbolsUpsertWithWhereUniqueWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsUpsertWithWhereUniqueWithoutChemicalsInput> = z.object({
  where: z.lazy(() => HazardSymbolsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => HazardSymbolsUpdateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUncheckedUpdateWithoutChemicalsInputSchema) ]),
  create: z.union([ z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema) ]),
}).strict();

export default HazardSymbolsUpsertWithWhereUniqueWithoutChemicalsInputSchema;
