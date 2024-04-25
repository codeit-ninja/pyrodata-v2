import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateManyContentInputSchema } from './PageCreateManyContentInputSchema';

export const PageCreateManyContentInputEnvelopeSchema: z.ZodType<Prisma.PageCreateManyContentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageCreateManyContentInputSchema),z.lazy(() => PageCreateManyContentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PageCreateManyContentInputEnvelopeSchema;
