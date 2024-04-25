import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentArgsSchema } from "../outputTypeSchemas/PageContentArgsSchema"
import { ImageWidgetArgsSchema } from "../outputTypeSchemas/ImageWidgetArgsSchema"

export const WidgetIncludeSchema: z.ZodType<Prisma.WidgetInclude> = z.object({
  pageContent: z.union([z.boolean(),z.lazy(() => PageContentArgsSchema)]).optional(),
  imageWidget: z.union([z.boolean(),z.lazy(() => ImageWidgetArgsSchema)]).optional(),
}).strict()

export default WidgetIncludeSchema;
