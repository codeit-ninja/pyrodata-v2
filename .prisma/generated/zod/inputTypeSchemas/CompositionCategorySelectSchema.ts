import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionFindManyArgsSchema } from "../outputTypeSchemas/CompositionFindManyArgsSchema"
import { CompositionCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/CompositionCategoryCountOutputTypeArgsSchema"

export const CompositionCategorySelectSchema: z.ZodType<Prisma.CompositionCategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  compositions: z.union([z.boolean(),z.lazy(() => CompositionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompositionCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default CompositionCategorySelectSchema;
