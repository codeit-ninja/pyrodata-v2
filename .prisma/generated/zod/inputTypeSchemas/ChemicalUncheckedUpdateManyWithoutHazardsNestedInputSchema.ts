import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalCreateWithoutHazardsInputSchema } from './ChemicalCreateWithoutHazardsInputSchema';
import { ChemicalUncheckedCreateWithoutHazardsInputSchema } from './ChemicalUncheckedCreateWithoutHazardsInputSchema';
import { ChemicalCreateOrConnectWithoutHazardsInputSchema } from './ChemicalCreateOrConnectWithoutHazardsInputSchema';
import { ChemicalUpsertWithWhereUniqueWithoutHazardsInputSchema } from './ChemicalUpsertWithWhereUniqueWithoutHazardsInputSchema';
import { ChemicalWhereUniqueInputSchema } from './ChemicalWhereUniqueInputSchema';
import { ChemicalUpdateWithWhereUniqueWithoutHazardsInputSchema } from './ChemicalUpdateWithWhereUniqueWithoutHazardsInputSchema';
import { ChemicalUpdateManyWithWhereWithoutHazardsInputSchema } from './ChemicalUpdateManyWithWhereWithoutHazardsInputSchema';
import { ChemicalScalarWhereInputSchema } from './ChemicalScalarWhereInputSchema';

export const ChemicalUncheckedUpdateManyWithoutHazardsNestedInputSchema: z.ZodType<Prisma.ChemicalUncheckedUpdateManyWithoutHazardsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChemicalCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalCreateWithoutHazardsInputSchema).array(),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChemicalCreateOrConnectWithoutHazardsInputSchema),z.lazy(() => ChemicalCreateOrConnectWithoutHazardsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChemicalUpsertWithWhereUniqueWithoutHazardsInputSchema),z.lazy(() => ChemicalUpsertWithWhereUniqueWithoutHazardsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChemicalUpdateWithWhereUniqueWithoutHazardsInputSchema),z.lazy(() => ChemicalUpdateWithWhereUniqueWithoutHazardsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChemicalUpdateManyWithWhereWithoutHazardsInputSchema),z.lazy(() => ChemicalUpdateManyWithWhereWithoutHazardsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChemicalScalarWhereInputSchema),z.lazy(() => ChemicalScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ChemicalUncheckedUpdateManyWithoutHazardsNestedInputSchema;
