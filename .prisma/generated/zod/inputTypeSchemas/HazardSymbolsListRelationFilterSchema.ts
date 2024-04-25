import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HazardSymbolsWhereInputSchema } from './HazardSymbolsWhereInputSchema';

export const HazardSymbolsListRelationFilterSchema: z.ZodType<Prisma.HazardSymbolsListRelationFilter> = z.object({
  every: z.lazy(() => HazardSymbolsWhereInputSchema).optional(),
  some: z.lazy(() => HazardSymbolsWhereInputSchema).optional(),
  none: z.lazy(() => HazardSymbolsWhereInputSchema).optional()
}).strict();

export default HazardSymbolsListRelationFilterSchema;
