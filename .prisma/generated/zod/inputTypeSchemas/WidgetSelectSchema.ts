import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentArgsSchema } from "../outputTypeSchemas/PageContentArgsSchema"
import { ImageWidgetArgsSchema } from "../outputTypeSchemas/ImageWidgetArgsSchema"

export const WidgetSelectSchema: z.ZodType<Prisma.WidgetSelect> = z.object({
  id: z.boolean().optional(),
  pageContentId: z.boolean().optional(),
  pageContent: z.union([z.boolean(),z.lazy(() => PageContentArgsSchema)]).optional(),
  imageWidget: z.union([z.boolean(),z.lazy(() => ImageWidgetArgsSchema)]).optional(),
}).strict()

export default WidgetSelectSchema;
