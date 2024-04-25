import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentWhereInputSchema } from '../inputTypeSchemas/PageContentWhereInputSchema'

export const PageContentDeleteManyArgsSchema: z.ZodType<Prisma.PageContentDeleteManyArgs> = z.object({
  where: PageContentWhereInputSchema.optional(),
}).strict() ;

export default PageContentDeleteManyArgsSchema;
