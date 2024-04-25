import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentUpdateManyMutationInputSchema } from '../inputTypeSchemas/PageContentUpdateManyMutationInputSchema'
import { PageContentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PageContentUncheckedUpdateManyInputSchema'
import { PageContentWhereInputSchema } from '../inputTypeSchemas/PageContentWhereInputSchema'

export const PageContentUpdateManyArgsSchema: z.ZodType<Prisma.PageContentUpdateManyArgs> = z.object({
  data: z.union([ PageContentUpdateManyMutationInputSchema,PageContentUncheckedUpdateManyInputSchema ]),
  where: PageContentWhereInputSchema.optional(),
}).strict() ;

export default PageContentUpdateManyArgsSchema;
