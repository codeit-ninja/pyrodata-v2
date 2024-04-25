import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalCreateWithoutPageInputSchema } from './ChemicalCreateWithoutPageInputSchema';
import { ChemicalUncheckedCreateWithoutPageInputSchema } from './ChemicalUncheckedCreateWithoutPageInputSchema';
import { ChemicalCreateOrConnectWithoutPageInputSchema } from './ChemicalCreateOrConnectWithoutPageInputSchema';
import { ChemicalWhereUniqueInputSchema } from './ChemicalWhereUniqueInputSchema';

export const ChemicalCreateNestedOneWithoutPageInputSchema: z.ZodType<Prisma.ChemicalCreateNestedOneWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => ChemicalCreateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChemicalCreateOrConnectWithoutPageInputSchema).optional(),
  connect: z.lazy(() => ChemicalWhereUniqueInputSchema).optional()
}).strict();

export default ChemicalCreateNestedOneWithoutPageInputSchema;
