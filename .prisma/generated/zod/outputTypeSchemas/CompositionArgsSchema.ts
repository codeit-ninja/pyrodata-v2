import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionSelectSchema } from '../inputTypeSchemas/CompositionSelectSchema';
import { CompositionIncludeSchema } from '../inputTypeSchemas/CompositionIncludeSchema';

export const CompositionArgsSchema: z.ZodType<Prisma.CompositionDefaultArgs> = z.object({
  select: z.lazy(() => CompositionSelectSchema).optional(),
  include: z.lazy(() => CompositionIncludeSchema).optional(),
}).strict();

export default CompositionArgsSchema;
