import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { HazardSymbolsUncheckedUpdateManyWithoutChemicalsNestedInputSchema } from './HazardSymbolsUncheckedUpdateManyWithoutChemicalsNestedInputSchema';

export const ChemicalUncheckedUpdateInputSchema: z.ZodType<Prisma.ChemicalUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formula: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hazards: z.lazy(() => HazardSymbolsUncheckedUpdateManyWithoutChemicalsNestedInputSchema).optional()
}).strict();

export default ChemicalUncheckedUpdateInputSchema;
