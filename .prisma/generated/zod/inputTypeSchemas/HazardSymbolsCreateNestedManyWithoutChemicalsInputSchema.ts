import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HazardSymbolsCreateWithoutChemicalsInputSchema } from './HazardSymbolsCreateWithoutChemicalsInputSchema';
import { HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema } from './HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema';
import { HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema } from './HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema';
import { HazardSymbolsWhereUniqueInputSchema } from './HazardSymbolsWhereUniqueInputSchema';

export const HazardSymbolsCreateNestedManyWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsCreateNestedManyWithoutChemicalsInput> = z.object({
  create: z.union([ z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema).array(),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default HazardSymbolsCreateNestedManyWithoutChemicalsInputSchema;
