import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreateManySubmittedByInputSchema } from './CompositionCreateManySubmittedByInputSchema';

export const CompositionCreateManySubmittedByInputEnvelopeSchema: z.ZodType<Prisma.CompositionCreateManySubmittedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CompositionCreateManySubmittedByInputSchema),z.lazy(() => CompositionCreateManySubmittedByInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CompositionCreateManySubmittedByInputEnvelopeSchema;
