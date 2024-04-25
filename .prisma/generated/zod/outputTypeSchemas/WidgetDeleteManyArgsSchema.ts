import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WidgetWhereInputSchema } from '../inputTypeSchemas/WidgetWhereInputSchema'

export const WidgetDeleteManyArgsSchema: z.ZodType<Prisma.WidgetDeleteManyArgs> = z.object({
  where: WidgetWhereInputSchema.optional(),
}).strict() ;

export default WidgetDeleteManyArgsSchema;
