import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetWhereInputSchema } from './ImageWidgetWhereInputSchema';
import { ImageWidgetUpdateWithoutWidgetsInputSchema } from './ImageWidgetUpdateWithoutWidgetsInputSchema';
import { ImageWidgetUncheckedUpdateWithoutWidgetsInputSchema } from './ImageWidgetUncheckedUpdateWithoutWidgetsInputSchema';

export const ImageWidgetUpdateToOneWithWhereWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetUpdateToOneWithWhereWithoutWidgetsInput> = z.object({
  where: z.lazy(() => ImageWidgetWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ImageWidgetUpdateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedUpdateWithoutWidgetsInputSchema) ]),
}).strict();

export default ImageWidgetUpdateToOneWithWhereWithoutWidgetsInputSchema;
