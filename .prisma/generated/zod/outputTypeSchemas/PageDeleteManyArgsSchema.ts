import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageWhereInputSchema } from '../inputTypeSchemas/PageWhereInputSchema'

export const PageDeleteManyArgsSchema: z.ZodType<Prisma.PageDeleteManyArgs> = z.object({
  where: PageWhereInputSchema.optional(),
}).strict() ;

export default PageDeleteManyArgsSchema;
