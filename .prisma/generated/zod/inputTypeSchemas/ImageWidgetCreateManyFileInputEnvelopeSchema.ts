import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetCreateManyFileInputSchema } from './ImageWidgetCreateManyFileInputSchema';

export const ImageWidgetCreateManyFileInputEnvelopeSchema: z.ZodType<Prisma.ImageWidgetCreateManyFileInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ImageWidgetCreateManyFileInputSchema),z.lazy(() => ImageWidgetCreateManyFileInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ImageWidgetCreateManyFileInputEnvelopeSchema;
