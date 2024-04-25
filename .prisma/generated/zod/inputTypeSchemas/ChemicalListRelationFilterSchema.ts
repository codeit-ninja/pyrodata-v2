import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalWhereInputSchema } from './ChemicalWhereInputSchema';

export const ChemicalListRelationFilterSchema: z.ZodType<Prisma.ChemicalListRelationFilter> = z.object({
  every: z.lazy(() => ChemicalWhereInputSchema).optional(),
  some: z.lazy(() => ChemicalWhereInputSchema).optional(),
  none: z.lazy(() => ChemicalWhereInputSchema).optional()
}).strict();

export default ChemicalListRelationFilterSchema;
