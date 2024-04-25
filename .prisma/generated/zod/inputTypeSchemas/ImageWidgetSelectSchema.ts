import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WidgetArgsSchema } from "../outputTypeSchemas/WidgetArgsSchema"
import { FileArgsSchema } from "../outputTypeSchemas/FileArgsSchema"

export const ImageWidgetSelectSchema: z.ZodType<Prisma.ImageWidgetSelect> = z.object({
  id: z.boolean().optional(),
  widgetId: z.boolean().optional(),
  fileId: z.boolean().optional(),
  widgets: z.union([z.boolean(),z.lazy(() => WidgetArgsSchema)]).optional(),
  file: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
}).strict()

export default ImageWidgetSelectSchema;
