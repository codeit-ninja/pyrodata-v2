import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionCountOutputTypeSelectSchema } from './CompositionCountOutputTypeSelectSchema';

export const CompositionCountOutputTypeArgsSchema: z.ZodType<Prisma.CompositionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CompositionCountOutputTypeSelectSchema).nullish(),
}).strict();

export default CompositionCountOutputTypeSelectSchema;
