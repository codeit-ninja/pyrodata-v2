import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetCreateWithoutFileInputSchema } from './ImageWidgetCreateWithoutFileInputSchema';
import { ImageWidgetUncheckedCreateWithoutFileInputSchema } from './ImageWidgetUncheckedCreateWithoutFileInputSchema';
import { ImageWidgetCreateOrConnectWithoutFileInputSchema } from './ImageWidgetCreateOrConnectWithoutFileInputSchema';
import { ImageWidgetUpsertWithWhereUniqueWithoutFileInputSchema } from './ImageWidgetUpsertWithWhereUniqueWithoutFileInputSchema';
import { ImageWidgetCreateManyFileInputEnvelopeSchema } from './ImageWidgetCreateManyFileInputEnvelopeSchema';
import { ImageWidgetWhereUniqueInputSchema } from './ImageWidgetWhereUniqueInputSchema';
import { ImageWidgetUpdateWithWhereUniqueWithoutFileInputSchema } from './ImageWidgetUpdateWithWhereUniqueWithoutFileInputSchema';
import { ImageWidgetUpdateManyWithWhereWithoutFileInputSchema } from './ImageWidgetUpdateManyWithWhereWithoutFileInputSchema';
import { ImageWidgetScalarWhereInputSchema } from './ImageWidgetScalarWhereInputSchema';

export const ImageWidgetUpdateManyWithoutFileNestedInputSchema: z.ZodType<Prisma.ImageWidgetUpdateManyWithoutFileNestedInput> = z.object({
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetCreateWithoutFileInputSchema).array(),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ImageWidgetCreateOrConnectWithoutFileInputSchema),z.lazy(() => ImageWidgetCreateOrConnectWithoutFileInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ImageWidgetUpsertWithWhereUniqueWithoutFileInputSchema),z.lazy(() => ImageWidgetUpsertWithWhereUniqueWithoutFileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ImageWidgetCreateManyFileInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ImageWidgetUpdateWithWhereUniqueWithoutFileInputSchema),z.lazy(() => ImageWidgetUpdateWithWhereUniqueWithoutFileInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ImageWidgetUpdateManyWithWhereWithoutFileInputSchema),z.lazy(() => ImageWidgetUpdateManyWithWhereWithoutFileInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ImageWidgetScalarWhereInputSchema),z.lazy(() => ImageWidgetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ImageWidgetUpdateManyWithoutFileNestedInputSchema;
