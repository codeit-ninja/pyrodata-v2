import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PageUpdateOneRequiredWithoutChemicalNestedInputSchema } from './PageUpdateOneRequiredWithoutChemicalNestedInputSchema';

export const ChemicalUpdateWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalUpdateWithoutHazardsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formula: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  page: z.lazy(() => PageUpdateOneRequiredWithoutChemicalNestedInputSchema).optional()
}).strict();

export default ChemicalUpdateWithoutHazardsInputSchema;
