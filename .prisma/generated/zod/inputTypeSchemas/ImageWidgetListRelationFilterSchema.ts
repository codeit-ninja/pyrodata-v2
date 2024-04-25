import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetWhereInputSchema } from './ImageWidgetWhereInputSchema';

export const ImageWidgetListRelationFilterSchema: z.ZodType<Prisma.ImageWidgetListRelationFilter> = z.object({
  every: z.lazy(() => ImageWidgetWhereInputSchema).optional(),
  some: z.lazy(() => ImageWidgetWhereInputSchema).optional(),
  none: z.lazy(() => ImageWidgetWhereInputSchema).optional()
}).strict();

export default ImageWidgetListRelationFilterSchema;
