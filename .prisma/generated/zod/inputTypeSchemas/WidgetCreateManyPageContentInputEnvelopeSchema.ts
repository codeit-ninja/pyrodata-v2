import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetCreateManyPageContentInputSchema } from './WidgetCreateManyPageContentInputSchema';

export const WidgetCreateManyPageContentInputEnvelopeSchema: z.ZodType<Prisma.WidgetCreateManyPageContentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WidgetCreateManyPageContentInputSchema),z.lazy(() => WidgetCreateManyPageContentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WidgetCreateManyPageContentInputEnvelopeSchema;
