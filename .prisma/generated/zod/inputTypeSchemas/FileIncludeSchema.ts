import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ImageWidgetFindManyArgsSchema } from "../outputTypeSchemas/ImageWidgetFindManyArgsSchema"
import { PageFindManyArgsSchema } from "../outputTypeSchemas/PageFindManyArgsSchema"
import { CompositionFindManyArgsSchema } from "../outputTypeSchemas/CompositionFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { FileCountOutputTypeArgsSchema } from "../outputTypeSchemas/FileCountOutputTypeArgsSchema"

export const FileIncludeSchema: z.ZodType<Prisma.FileInclude> = z.object({
  imageWidget: z.union([z.boolean(),z.lazy(() => ImageWidgetFindManyArgsSchema)]).optional(),
  page: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  composition: z.union([z.boolean(),z.lazy(() => CompositionFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FileCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default FileIncludeSchema;
