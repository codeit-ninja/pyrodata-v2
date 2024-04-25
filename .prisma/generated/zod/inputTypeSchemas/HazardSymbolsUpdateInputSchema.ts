import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ChemicalUpdateManyWithoutHazardsNestedInputSchema } from './ChemicalUpdateManyWithoutHazardsNestedInputSchema';

export const HazardSymbolsUpdateInputSchema: z.ZodType<Prisma.HazardSymbolsUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  chemicals: z.lazy(() => ChemicalUpdateManyWithoutHazardsNestedInputSchema).optional()
}).strict();

export default HazardSymbolsUpdateInputSchema;
