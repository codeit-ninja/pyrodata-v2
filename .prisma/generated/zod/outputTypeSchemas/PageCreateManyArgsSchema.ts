import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageCreateManyInputSchema } from '../inputTypeSchemas/PageCreateManyInputSchema'

export const PageCreateManyArgsSchema: z.ZodType<Prisma.PageCreateManyArgs> = z.object({
  data: z.union([ PageCreateManyInputSchema,PageCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default PageCreateManyArgsSchema;
