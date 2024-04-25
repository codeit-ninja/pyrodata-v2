import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentSelectSchema } from '../inputTypeSchemas/PageContentSelectSchema';
import { PageContentIncludeSchema } from '../inputTypeSchemas/PageContentIncludeSchema';

export const PageContentArgsSchema: z.ZodType<Prisma.PageContentDefaultArgs> = z.object({
  select: z.lazy(() => PageContentSelectSchema).optional(),
  include: z.lazy(() => PageContentIncludeSchema).optional(),
}).strict();

export default PageContentArgsSchema;
