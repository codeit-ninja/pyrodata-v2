import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalUpdateWithoutPageInputSchema } from './ChemicalUpdateWithoutPageInputSchema';
import { ChemicalUncheckedUpdateWithoutPageInputSchema } from './ChemicalUncheckedUpdateWithoutPageInputSchema';
import { ChemicalCreateWithoutPageInputSchema } from './ChemicalCreateWithoutPageInputSchema';
import { ChemicalUncheckedCreateWithoutPageInputSchema } from './ChemicalUncheckedCreateWithoutPageInputSchema';
import { ChemicalWhereInputSchema } from './ChemicalWhereInputSchema';

export const ChemicalUpsertWithoutPageInputSchema: z.ZodType<Prisma.ChemicalUpsertWithoutPageInput> = z.object({
  update: z.union([ z.lazy(() => ChemicalUpdateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedUpdateWithoutPageInputSchema) ]),
  create: z.union([ z.lazy(() => ChemicalCreateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutPageInputSchema) ]),
  where: z.lazy(() => ChemicalWhereInputSchema).optional()
}).strict();

export default ChemicalUpsertWithoutPageInputSchema;
