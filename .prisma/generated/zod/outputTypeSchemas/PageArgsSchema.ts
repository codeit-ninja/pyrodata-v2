import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageSelectSchema } from '../inputTypeSchemas/PageSelectSchema';
import { PageIncludeSchema } from '../inputTypeSchemas/PageIncludeSchema';

export const PageArgsSchema: z.ZodType<Prisma.PageDefaultArgs> = z.object({
  select: z.lazy(() => PageSelectSchema).optional(),
  include: z.lazy(() => PageIncludeSchema).optional(),
}).strict();

export default PageArgsSchema;
