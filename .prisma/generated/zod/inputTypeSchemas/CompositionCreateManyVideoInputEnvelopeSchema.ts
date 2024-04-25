import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreateManyVideoInputSchema } from './CompositionCreateManyVideoInputSchema';

export const CompositionCreateManyVideoInputEnvelopeSchema: z.ZodType<Prisma.CompositionCreateManyVideoInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CompositionCreateManyVideoInputSchema),z.lazy(() => CompositionCreateManyVideoInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CompositionCreateManyVideoInputEnvelopeSchema;
