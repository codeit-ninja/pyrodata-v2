import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ChemicalUncheckedUpdateManyWithoutHazardsNestedInputSchema } from './ChemicalUncheckedUpdateManyWithoutHazardsNestedInputSchema';

export const HazardSymbolsUncheckedUpdateInputSchema: z.ZodType<Prisma.HazardSymbolsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  chemicals: z.lazy(() => ChemicalUncheckedUpdateManyWithoutHazardsNestedInputSchema).optional()
}).strict();

export default HazardSymbolsUncheckedUpdateInputSchema;
