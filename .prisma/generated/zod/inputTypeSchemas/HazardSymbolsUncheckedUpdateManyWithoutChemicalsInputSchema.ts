import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const HazardSymbolsUncheckedUpdateManyWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsUncheckedUpdateManyWithoutChemicalsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default HazardSymbolsUncheckedUpdateManyWithoutChemicalsInputSchema;
