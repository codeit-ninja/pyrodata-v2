import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalWhereUniqueInputSchema } from './ChemicalWhereUniqueInputSchema';
import { ChemicalCreateWithoutPageInputSchema } from './ChemicalCreateWithoutPageInputSchema';
import { ChemicalUncheckedCreateWithoutPageInputSchema } from './ChemicalUncheckedCreateWithoutPageInputSchema';

export const ChemicalCreateOrConnectWithoutPageInputSchema: z.ZodType<Prisma.ChemicalCreateOrConnectWithoutPageInput> = z.object({
  where: z.lazy(() => ChemicalWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChemicalCreateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export default ChemicalCreateOrConnectWithoutPageInputSchema;
