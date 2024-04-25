import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionCategoryCountOutputTypeSelectSchema } from './CompositionCategoryCountOutputTypeSelectSchema';

export const CompositionCategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.CompositionCategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CompositionCategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export default CompositionCategoryCountOutputTypeSelectSchema;
