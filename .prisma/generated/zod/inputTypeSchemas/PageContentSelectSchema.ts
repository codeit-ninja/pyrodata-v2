import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageFindManyArgsSchema } from "../outputTypeSchemas/PageFindManyArgsSchema"
import { WidgetFindManyArgsSchema } from "../outputTypeSchemas/WidgetFindManyArgsSchema"
import { PageContentCountOutputTypeArgsSchema } from "../outputTypeSchemas/PageContentCountOutputTypeArgsSchema"

export const PageContentSelectSchema: z.ZodType<Prisma.PageContentSelect> = z.object({
  id: z.boolean().optional(),
  html: z.boolean().optional(),
  sidebar: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  page: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  widgets: z.union([z.boolean(),z.lazy(() => WidgetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PageContentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PageContentSelectSchema;
