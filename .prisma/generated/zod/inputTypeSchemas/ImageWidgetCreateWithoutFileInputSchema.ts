import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetCreateNestedOneWithoutImageWidgetInputSchema } from './WidgetCreateNestedOneWithoutImageWidgetInputSchema';

export const ImageWidgetCreateWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetCreateWithoutFileInput> = z.object({
  id: z.string().cuid().optional(),
  widgets: z.lazy(() => WidgetCreateNestedOneWithoutImageWidgetInputSchema)
}).strict();

export default ImageWidgetCreateWithoutFileInputSchema;
