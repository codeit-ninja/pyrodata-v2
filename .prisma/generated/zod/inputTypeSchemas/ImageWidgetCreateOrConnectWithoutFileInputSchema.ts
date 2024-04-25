import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetWhereUniqueInputSchema } from './ImageWidgetWhereUniqueInputSchema';
import { ImageWidgetCreateWithoutFileInputSchema } from './ImageWidgetCreateWithoutFileInputSchema';
import { ImageWidgetUncheckedCreateWithoutFileInputSchema } from './ImageWidgetUncheckedCreateWithoutFileInputSchema';

export const ImageWidgetCreateOrConnectWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetCreateOrConnectWithoutFileInput> = z.object({
  where: z.lazy(() => ImageWidgetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema) ]),
}).strict();

export default ImageWidgetCreateOrConnectWithoutFileInputSchema;
