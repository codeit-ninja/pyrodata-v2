import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetUpdateWithoutWidgetsInputSchema } from './ImageWidgetUpdateWithoutWidgetsInputSchema';
import { ImageWidgetUncheckedUpdateWithoutWidgetsInputSchema } from './ImageWidgetUncheckedUpdateWithoutWidgetsInputSchema';
import { ImageWidgetCreateWithoutWidgetsInputSchema } from './ImageWidgetCreateWithoutWidgetsInputSchema';
import { ImageWidgetUncheckedCreateWithoutWidgetsInputSchema } from './ImageWidgetUncheckedCreateWithoutWidgetsInputSchema';
import { ImageWidgetWhereInputSchema } from './ImageWidgetWhereInputSchema';

export const ImageWidgetUpsertWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetUpsertWithoutWidgetsInput> = z.object({
  update: z.union([ z.lazy(() => ImageWidgetUpdateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedUpdateWithoutWidgetsInputSchema) ]),
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutWidgetsInputSchema) ]),
  where: z.lazy(() => ImageWidgetWhereInputSchema).optional()
}).strict();

export default ImageWidgetUpsertWithoutWidgetsInputSchema;
