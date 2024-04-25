import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalWhereInputSchema } from './ChemicalWhereInputSchema';
import { ChemicalUpdateWithoutPageInputSchema } from './ChemicalUpdateWithoutPageInputSchema';
import { ChemicalUncheckedUpdateWithoutPageInputSchema } from './ChemicalUncheckedUpdateWithoutPageInputSchema';

export const ChemicalUpdateToOneWithWhereWithoutPageInputSchema: z.ZodType<Prisma.ChemicalUpdateToOneWithWhereWithoutPageInput> = z.object({
  where: z.lazy(() => ChemicalWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ChemicalUpdateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedUpdateWithoutPageInputSchema) ]),
}).strict();

export default ChemicalUpdateToOneWithWhereWithoutPageInputSchema;
