import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetCreateWithoutFileInputSchema } from './ImageWidgetCreateWithoutFileInputSchema';
import { ImageWidgetUncheckedCreateWithoutFileInputSchema } from './ImageWidgetUncheckedCreateWithoutFileInputSchema';
import { ImageWidgetCreateOrConnectWithoutFileInputSchema } from './ImageWidgetCreateOrConnectWithoutFileInputSchema';
import { ImageWidgetCreateManyFileInputEnvelopeSchema } from './ImageWidgetCreateManyFileInputEnvelopeSchema';
import { ImageWidgetWhereUniqueInputSchema } from './ImageWidgetWhereUniqueInputSchema';

export const ImageWidgetCreateNestedManyWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetCreateNestedManyWithoutFileInput> = z.object({
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetCreateWithoutFileInputSchema).array(),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ImageWidgetCreateOrConnectWithoutFileInputSchema),z.lazy(() => ImageWidgetCreateOrConnectWithoutFileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ImageWidgetCreateManyFileInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ImageWidgetCreateNestedManyWithoutFileInputSchema;
