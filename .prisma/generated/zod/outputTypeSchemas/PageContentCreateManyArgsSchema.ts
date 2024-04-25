import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentCreateManyInputSchema } from '../inputTypeSchemas/PageContentCreateManyInputSchema'

export const PageContentCreateManyArgsSchema: z.ZodType<Prisma.PageContentCreateManyArgs> = z.object({
  data: z.union([ PageContentCreateManyInputSchema,PageContentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default PageContentCreateManyArgsSchema;
