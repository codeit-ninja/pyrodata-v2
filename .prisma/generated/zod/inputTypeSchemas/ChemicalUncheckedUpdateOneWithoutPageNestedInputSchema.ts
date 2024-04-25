import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalCreateWithoutPageInputSchema } from './ChemicalCreateWithoutPageInputSchema';
import { ChemicalUncheckedCreateWithoutPageInputSchema } from './ChemicalUncheckedCreateWithoutPageInputSchema';
import { ChemicalCreateOrConnectWithoutPageInputSchema } from './ChemicalCreateOrConnectWithoutPageInputSchema';
import { ChemicalUpsertWithoutPageInputSchema } from './ChemicalUpsertWithoutPageInputSchema';
import { ChemicalWhereInputSchema } from './ChemicalWhereInputSchema';
import { ChemicalWhereUniqueInputSchema } from './ChemicalWhereUniqueInputSchema';
import { ChemicalUpdateToOneWithWhereWithoutPageInputSchema } from './ChemicalUpdateToOneWithWhereWithoutPageInputSchema';
import { ChemicalUpdateWithoutPageInputSchema } from './ChemicalUpdateWithoutPageInputSchema';
import { ChemicalUncheckedUpdateWithoutPageInputSchema } from './ChemicalUncheckedUpdateWithoutPageInputSchema';

export const ChemicalUncheckedUpdateOneWithoutPageNestedInputSchema: z.ZodType<Prisma.ChemicalUncheckedUpdateOneWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChemicalCreateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChemicalCreateOrConnectWithoutPageInputSchema).optional(),
  upsert: z.lazy(() => ChemicalUpsertWithoutPageInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ChemicalWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ChemicalWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ChemicalWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ChemicalUpdateToOneWithWhereWithoutPageInputSchema),z.lazy(() => ChemicalUpdateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedUpdateWithoutPageInputSchema) ]).optional(),
}).strict();

export default ChemicalUncheckedUpdateOneWithoutPageNestedInputSchema;
