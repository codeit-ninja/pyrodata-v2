import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionFindManyArgsSchema } from "../outputTypeSchemas/CompositionFindManyArgsSchema"
import { CompositionCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/CompositionCategoryCountOutputTypeArgsSchema"

export const CompositionCategoryIncludeSchema: z.ZodType<Prisma.CompositionCategoryInclude> = z.object({
  compositions: z.union([z.boolean(),z.lazy(() => CompositionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompositionCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default CompositionCategoryIncludeSchema;
