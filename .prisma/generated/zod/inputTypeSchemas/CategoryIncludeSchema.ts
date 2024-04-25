import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageFindManyArgsSchema } from "../outputTypeSchemas/PageFindManyArgsSchema"
import { CategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/CategoryCountOutputTypeArgsSchema"

export const CategoryIncludeSchema: z.ZodType<Prisma.CategoryInclude> = z.object({
  page: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default CategoryIncludeSchema;
