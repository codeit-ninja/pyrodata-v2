import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { HazardSymbolsUpdateManyWithoutChemicalsNestedInputSchema } from './HazardSymbolsUpdateManyWithoutChemicalsNestedInputSchema';

export const ChemicalUpdateWithoutPageInputSchema: z.ZodType<Prisma.ChemicalUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formula: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hazards: z.lazy(() => HazardSymbolsUpdateManyWithoutChemicalsNestedInputSchema).optional()
}).strict();

export default ChemicalUpdateWithoutPageInputSchema;
