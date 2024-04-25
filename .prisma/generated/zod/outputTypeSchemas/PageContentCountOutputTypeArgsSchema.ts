import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentCountOutputTypeSelectSchema } from './PageContentCountOutputTypeSelectSchema';

export const PageContentCountOutputTypeArgsSchema: z.ZodType<Prisma.PageContentCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PageContentCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PageContentCountOutputTypeSelectSchema;
