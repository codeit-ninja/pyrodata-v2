import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalWhereInputSchema } from './ChemicalWhereInputSchema';

export const ChemicalNullableRelationFilterSchema: z.ZodType<Prisma.ChemicalNullableRelationFilter> = z.object({
  is: z.lazy(() => ChemicalWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ChemicalWhereInputSchema).optional().nullable()
}).strict();

export default ChemicalNullableRelationFilterSchema;
