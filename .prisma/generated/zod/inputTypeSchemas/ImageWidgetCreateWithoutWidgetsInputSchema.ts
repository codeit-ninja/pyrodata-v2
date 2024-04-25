import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateNestedOneWithoutImageWidgetInputSchema } from './FileCreateNestedOneWithoutImageWidgetInputSchema';

export const ImageWidgetCreateWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetCreateWithoutWidgetsInput> = z.object({
  id: z.string().cuid().optional(),
  file: z.lazy(() => FileCreateNestedOneWithoutImageWidgetInputSchema)
}).strict();

export default ImageWidgetCreateWithoutWidgetsInputSchema;
