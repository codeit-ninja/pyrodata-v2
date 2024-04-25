import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HazardSymbolsCreateWithoutChemicalsInputSchema } from './HazardSymbolsCreateWithoutChemicalsInputSchema';
import { HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema } from './HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema';
import { HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema } from './HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema';
import { HazardSymbolsUpsertWithWhereUniqueWithoutChemicalsInputSchema } from './HazardSymbolsUpsertWithWhereUniqueWithoutChemicalsInputSchema';
import { HazardSymbolsWhereUniqueInputSchema } from './HazardSymbolsWhereUniqueInputSchema';
import { HazardSymbolsUpdateWithWhereUniqueWithoutChemicalsInputSchema } from './HazardSymbolsUpdateWithWhereUniqueWithoutChemicalsInputSchema';
import { HazardSymbolsUpdateManyWithWhereWithoutChemicalsInputSchema } from './HazardSymbolsUpdateManyWithWhereWithoutChemicalsInputSchema';
import { HazardSymbolsScalarWhereInputSchema } from './HazardSymbolsScalarWhereInputSchema';

export const HazardSymbolsUncheckedUpdateManyWithoutChemicalsNestedInputSchema: z.ZodType<Prisma.HazardSymbolsUncheckedUpdateManyWithoutChemicalsNestedInput> = z.object({
  create: z.union([ z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema).array(),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HazardSymbolsUpsertWithWhereUniqueWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUpsertWithWhereUniqueWithoutChemicalsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HazardSymbolsUpdateWithWhereUniqueWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUpdateWithWhereUniqueWithoutChemicalsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HazardSymbolsUpdateManyWithWhereWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUpdateManyWithWhereWithoutChemicalsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HazardSymbolsScalarWhereInputSchema),z.lazy(() => HazardSymbolsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default HazardSymbolsUncheckedUpdateManyWithoutChemicalsNestedInputSchema;
