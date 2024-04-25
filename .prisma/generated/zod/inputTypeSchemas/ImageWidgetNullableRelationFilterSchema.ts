import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetWhereInputSchema } from './ImageWidgetWhereInputSchema';

export const ImageWidgetNullableRelationFilterSchema: z.ZodType<Prisma.ImageWidgetNullableRelationFilter> = z.object({
  is: z.lazy(() => ImageWidgetWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ImageWidgetWhereInputSchema).optional().nullable()
}).strict();

export default ImageWidgetNullableRelationFilterSchema;
