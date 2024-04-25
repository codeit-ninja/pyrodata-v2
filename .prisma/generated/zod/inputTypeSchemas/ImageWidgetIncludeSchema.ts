import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WidgetArgsSchema } from "../outputTypeSchemas/WidgetArgsSchema"
import { FileArgsSchema } from "../outputTypeSchemas/FileArgsSchema"

export const ImageWidgetIncludeSchema: z.ZodType<Prisma.ImageWidgetInclude> = z.object({
  widgets: z.union([z.boolean(),z.lazy(() => WidgetArgsSchema)]).optional(),
  file: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
}).strict()

export default ImageWidgetIncludeSchema;
