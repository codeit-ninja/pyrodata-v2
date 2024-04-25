import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateManyCategoryInputSchema } from './PageCreateManyCategoryInputSchema';

export const PageCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.PageCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageCreateManyCategoryInputSchema),z.lazy(() => PageCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PageCreateManyCategoryInputEnvelopeSchema;
