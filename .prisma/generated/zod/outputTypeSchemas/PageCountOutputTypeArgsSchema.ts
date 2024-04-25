import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageCountOutputTypeSelectSchema } from './PageCountOutputTypeSelectSchema';

export const PageCountOutputTypeArgsSchema: z.ZodType<Prisma.PageCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PageCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PageCountOutputTypeSelectSchema;
