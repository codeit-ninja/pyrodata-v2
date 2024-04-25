import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetCreateWithoutWidgetsInputSchema } from './ImageWidgetCreateWithoutWidgetsInputSchema';
import { ImageWidgetUncheckedCreateWithoutWidgetsInputSchema } from './ImageWidgetUncheckedCreateWithoutWidgetsInputSchema';
import { ImageWidgetCreateOrConnectWithoutWidgetsInputSchema } from './ImageWidgetCreateOrConnectWithoutWidgetsInputSchema';
import { ImageWidgetWhereUniqueInputSchema } from './ImageWidgetWhereUniqueInputSchema';

export const ImageWidgetUncheckedCreateNestedOneWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedCreateNestedOneWithoutWidgetsInput> = z.object({
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutWidgetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImageWidgetCreateOrConnectWithoutWidgetsInputSchema).optional(),
  connect: z.lazy(() => ImageWidgetWhereUniqueInputSchema).optional()
}).strict();

export default ImageWidgetUncheckedCreateNestedOneWithoutWidgetsInputSchema;
