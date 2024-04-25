import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { ChemicalListRelationFilterSchema } from './ChemicalListRelationFilterSchema';

export const HazardSymbolsWhereInputSchema: z.ZodType<Prisma.HazardSymbolsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HazardSymbolsWhereInputSchema),z.lazy(() => HazardSymbolsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HazardSymbolsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HazardSymbolsWhereInputSchema),z.lazy(() => HazardSymbolsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  symbol: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  chemicals: z.lazy(() => ChemicalListRelationFilterSchema).optional()
}).strict();

export default HazardSymbolsWhereInputSchema;
