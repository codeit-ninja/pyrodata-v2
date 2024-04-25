import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientCreateManyCompositionInputSchema } from './IngredientCreateManyCompositionInputSchema';

export const IngredientCreateManyCompositionInputEnvelopeSchema: z.ZodType<Prisma.IngredientCreateManyCompositionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => IngredientCreateManyCompositionInputSchema),z.lazy(() => IngredientCreateManyCompositionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default IngredientCreateManyCompositionInputEnvelopeSchema;
