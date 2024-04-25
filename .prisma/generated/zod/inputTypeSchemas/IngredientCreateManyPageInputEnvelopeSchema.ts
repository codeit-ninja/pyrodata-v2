import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientCreateManyPageInputSchema } from './IngredientCreateManyPageInputSchema';

export const IngredientCreateManyPageInputEnvelopeSchema: z.ZodType<Prisma.IngredientCreateManyPageInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => IngredientCreateManyPageInputSchema),z.lazy(() => IngredientCreateManyPageInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default IngredientCreateManyPageInputEnvelopeSchema;
