import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetScalarWhereInputSchema } from './ImageWidgetScalarWhereInputSchema';
import { ImageWidgetUpdateManyMutationInputSchema } from './ImageWidgetUpdateManyMutationInputSchema';
import { ImageWidgetUncheckedUpdateManyWithoutFileInputSchema } from './ImageWidgetUncheckedUpdateManyWithoutFileInputSchema';

export const ImageWidgetUpdateManyWithWhereWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetUpdateManyWithWhereWithoutFileInput> = z.object({
  where: z.lazy(() => ImageWidgetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ImageWidgetUpdateManyMutationInputSchema),z.lazy(() => ImageWidgetUncheckedUpdateManyWithoutFileInputSchema) ]),
}).strict();

export default ImageWidgetUpdateManyWithWhereWithoutFileInputSchema;
