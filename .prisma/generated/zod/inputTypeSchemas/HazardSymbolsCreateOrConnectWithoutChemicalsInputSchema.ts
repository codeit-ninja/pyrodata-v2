import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HazardSymbolsWhereUniqueInputSchema } from './HazardSymbolsWhereUniqueInputSchema';
import { HazardSymbolsCreateWithoutChemicalsInputSchema } from './HazardSymbolsCreateWithoutChemicalsInputSchema';
import { HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema } from './HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema';

export const HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsCreateOrConnectWithoutChemicalsInput> = z.object({
  where: z.lazy(() => HazardSymbolsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema) ]),
}).strict();

export default HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema;
