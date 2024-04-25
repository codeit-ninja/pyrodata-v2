import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetWhereUniqueInputSchema } from './ImageWidgetWhereUniqueInputSchema';
import { ImageWidgetUpdateWithoutFileInputSchema } from './ImageWidgetUpdateWithoutFileInputSchema';
import { ImageWidgetUncheckedUpdateWithoutFileInputSchema } from './ImageWidgetUncheckedUpdateWithoutFileInputSchema';

export const ImageWidgetUpdateWithWhereUniqueWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetUpdateWithWhereUniqueWithoutFileInput> = z.object({
  where: z.lazy(() => ImageWidgetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ImageWidgetUpdateWithoutFileInputSchema),z.lazy(() => ImageWidgetUncheckedUpdateWithoutFileInputSchema) ]),
}).strict();

export default ImageWidgetUpdateWithWhereUniqueWithoutFileInputSchema;
