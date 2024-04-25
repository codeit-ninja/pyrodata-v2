import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageUpdateManyMutationInputSchema } from '../inputTypeSchemas/PageUpdateManyMutationInputSchema'
import { PageUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PageUncheckedUpdateManyInputSchema'
import { PageWhereInputSchema } from '../inputTypeSchemas/PageWhereInputSchema'

export const PageUpdateManyArgsSchema: z.ZodType<Prisma.PageUpdateManyArgs> = z.object({
  data: z.union([ PageUpdateManyMutationInputSchema,PageUncheckedUpdateManyInputSchema ]),
  where: PageWhereInputSchema.optional(),
}).strict() ;

export default PageUpdateManyArgsSchema;
