import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetWhereUniqueInputSchema } from './ImageWidgetWhereUniqueInputSchema';
import { ImageWidgetUpdateWithoutFileInputSchema } from './ImageWidgetUpdateWithoutFileInputSchema';
import { ImageWidgetUncheckedUpdateWithoutFileInputSchema } from './ImageWidgetUncheckedUpdateWithoutFileInputSchema';
import { ImageWidgetCreateWithoutFileInputSchema } from './ImageWidgetCreateWithoutFileInputSchema';
import { ImageWidgetUncheckedCreateWithoutFileInputSchema } from './ImageWidgetUncheckedCreateWithoutFileInputSchema';

export const ImageWidgetUpsertWithWhereUniqueWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetUpsertWithWhereUniqueWithoutFileInput> = z.object({
  where: z.lazy(() => ImageWidgetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ImageWidgetUpdateWithoutFileInputSchema),z.lazy(() => ImageWidgetUncheckedUpdateWithoutFileInputSchema) ]),
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema) ]),
}).strict();

export default ImageWidgetUpsertWithWhereUniqueWithoutFileInputSchema;
