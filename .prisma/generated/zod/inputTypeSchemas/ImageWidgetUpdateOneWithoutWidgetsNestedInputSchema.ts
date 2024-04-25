import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetCreateWithoutWidgetsInputSchema } from './ImageWidgetCreateWithoutWidgetsInputSchema';
import { ImageWidgetUncheckedCreateWithoutWidgetsInputSchema } from './ImageWidgetUncheckedCreateWithoutWidgetsInputSchema';
import { ImageWidgetCreateOrConnectWithoutWidgetsInputSchema } from './ImageWidgetCreateOrConnectWithoutWidgetsInputSchema';
import { ImageWidgetUpsertWithoutWidgetsInputSchema } from './ImageWidgetUpsertWithoutWidgetsInputSchema';
import { ImageWidgetWhereInputSchema } from './ImageWidgetWhereInputSchema';
import { ImageWidgetWhereUniqueInputSchema } from './ImageWidgetWhereUniqueInputSchema';
import { ImageWidgetUpdateToOneWithWhereWithoutWidgetsInputSchema } from './ImageWidgetUpdateToOneWithWhereWithoutWidgetsInputSchema';
import { ImageWidgetUpdateWithoutWidgetsInputSchema } from './ImageWidgetUpdateWithoutWidgetsInputSchema';
import { ImageWidgetUncheckedUpdateWithoutWidgetsInputSchema } from './ImageWidgetUncheckedUpdateWithoutWidgetsInputSchema';

export const ImageWidgetUpdateOneWithoutWidgetsNestedInputSchema: z.ZodType<Prisma.ImageWidgetUpdateOneWithoutWidgetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutWidgetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImageWidgetCreateOrConnectWithoutWidgetsInputSchema).optional(),
  upsert: z.lazy(() => ImageWidgetUpsertWithoutWidgetsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ImageWidgetWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ImageWidgetWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ImageWidgetWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ImageWidgetUpdateToOneWithWhereWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUpdateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedUpdateWithoutWidgetsInputSchema) ]).optional(),
}).strict();

export default ImageWidgetUpdateOneWithoutWidgetsNestedInputSchema;
