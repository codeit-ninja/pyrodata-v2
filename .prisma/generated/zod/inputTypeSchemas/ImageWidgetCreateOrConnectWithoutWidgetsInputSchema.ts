import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetWhereUniqueInputSchema } from './ImageWidgetWhereUniqueInputSchema';
import { ImageWidgetCreateWithoutWidgetsInputSchema } from './ImageWidgetCreateWithoutWidgetsInputSchema';
import { ImageWidgetUncheckedCreateWithoutWidgetsInputSchema } from './ImageWidgetUncheckedCreateWithoutWidgetsInputSchema';

export const ImageWidgetCreateOrConnectWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetCreateOrConnectWithoutWidgetsInput> = z.object({
  where: z.lazy(() => ImageWidgetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutWidgetsInputSchema) ]),
}).strict();

export default ImageWidgetCreateOrConnectWithoutWidgetsInputSchema;
