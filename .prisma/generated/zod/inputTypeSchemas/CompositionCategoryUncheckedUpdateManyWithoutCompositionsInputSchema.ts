import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const CompositionCategoryUncheckedUpdateManyWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryUncheckedUpdateManyWithoutCompositionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default CompositionCategoryUncheckedUpdateManyWithoutCompositionsInputSchema;
