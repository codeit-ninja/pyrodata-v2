import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionCategorySelectSchema } from '../inputTypeSchemas/CompositionCategorySelectSchema';
import { CompositionCategoryIncludeSchema } from '../inputTypeSchemas/CompositionCategoryIncludeSchema';

export const CompositionCategoryArgsSchema: z.ZodType<Prisma.CompositionCategoryDefaultArgs> = z.object({
  select: z.lazy(() => CompositionCategorySelectSchema).optional(),
  include: z.lazy(() => CompositionCategoryIncludeSchema).optional(),
}).strict();

export default CompositionCategoryArgsSchema;
