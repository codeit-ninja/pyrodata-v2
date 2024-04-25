import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HazardSymbolsWhereInputSchema } from './HazardSymbolsWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { ChemicalListRelationFilterSchema } from './ChemicalListRelationFilterSchema';

export const HazardSymbolsWhereUniqueInputSchema: z.ZodType<Prisma.HazardSymbolsWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => HazardSymbolsWhereInputSchema),z.lazy(() => HazardSymbolsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HazardSymbolsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HazardSymbolsWhereInputSchema),z.lazy(() => HazardSymbolsWhereInputSchema).array() ]).optional(),
  symbol: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  chemicals: z.lazy(() => ChemicalListRelationFilterSchema).optional()
}).strict());

export default HazardSymbolsWhereUniqueInputSchema;
