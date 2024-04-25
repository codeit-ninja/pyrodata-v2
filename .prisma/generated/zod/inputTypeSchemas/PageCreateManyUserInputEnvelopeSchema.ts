import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateManyUserInputSchema } from './PageCreateManyUserInputSchema';

export const PageCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.PageCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageCreateManyUserInputSchema),z.lazy(() => PageCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PageCreateManyUserInputEnvelopeSchema;
