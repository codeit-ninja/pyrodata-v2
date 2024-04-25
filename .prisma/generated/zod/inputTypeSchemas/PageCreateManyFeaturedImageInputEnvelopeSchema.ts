import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateManyFeaturedImageInputSchema } from './PageCreateManyFeaturedImageInputSchema';

export const PageCreateManyFeaturedImageInputEnvelopeSchema: z.ZodType<Prisma.PageCreateManyFeaturedImageInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageCreateManyFeaturedImageInputSchema),z.lazy(() => PageCreateManyFeaturedImageInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PageCreateManyFeaturedImageInputEnvelopeSchema;
