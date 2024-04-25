import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WidgetUpdateManyMutationInputSchema } from '../inputTypeSchemas/WidgetUpdateManyMutationInputSchema'
import { WidgetUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WidgetUncheckedUpdateManyInputSchema'
import { WidgetWhereInputSchema } from '../inputTypeSchemas/WidgetWhereInputSchema'

export const WidgetUpdateManyArgsSchema: z.ZodType<Prisma.WidgetUpdateManyArgs> = z.object({
  data: z.union([ WidgetUpdateManyMutationInputSchema,WidgetUncheckedUpdateManyInputSchema ]),
  where: WidgetWhereInputSchema.optional(),
}).strict() ;

export default WidgetUpdateManyArgsSchema;
