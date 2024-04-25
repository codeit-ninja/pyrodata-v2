import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WidgetCreateNestedOneWithoutImageWidgetInputSchema } from './WidgetCreateNestedOneWithoutImageWidgetInputSchema';
import { FileCreateNestedOneWithoutImageWidgetInputSchema } from './FileCreateNestedOneWithoutImageWidgetInputSchema';

export const ImageWidgetCreateInputSchema: z.ZodType<Prisma.ImageWidgetCreateInput> = z.object({
  id: z.string().cuid().optional(),
  widgets: z.lazy(() => WidgetCreateNestedOneWithoutImageWidgetInputSchema),
  file: z.lazy(() => FileCreateNestedOneWithoutImageWidgetInputSchema)
}).strict();

export default ImageWidgetCreateInputSchema;
