import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { HazardSymbolsUpdateManyWithoutChemicalsNestedInputSchema } from './HazardSymbolsUpdateManyWithoutChemicalsNestedInputSchema';
import { PageUpdateOneRequiredWithoutChemicalNestedInputSchema } from './PageUpdateOneRequiredWithoutChemicalNestedInputSchema';

export const ChemicalUpdateInputSchema: z.ZodType<Prisma.ChemicalUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formula: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hazards: z.lazy(() => HazardSymbolsUpdateManyWithoutChemicalsNestedInputSchema).optional(),
  page: z.lazy(() => PageUpdateOneRequiredWithoutChemicalNestedInputSchema).optional()
}).strict();

export default ChemicalUpdateInputSchema;
