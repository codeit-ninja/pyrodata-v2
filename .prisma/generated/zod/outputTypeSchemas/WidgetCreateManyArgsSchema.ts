import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WidgetCreateManyInputSchema } from '../inputTypeSchemas/WidgetCreateManyInputSchema'

export const WidgetCreateManyArgsSchema: z.ZodType<Prisma.WidgetCreateManyArgs> = z.object({
  data: z.union([ WidgetCreateManyInputSchema,WidgetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WidgetCreateManyArgsSchema;
