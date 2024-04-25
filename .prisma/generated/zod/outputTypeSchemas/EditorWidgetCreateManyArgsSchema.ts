import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EditorWidgetCreateManyInputSchema } from '../inputTypeSchemas/EditorWidgetCreateManyInputSchema'

export const EditorWidgetCreateManyArgsSchema: z.ZodType<Prisma.EditorWidgetCreateManyArgs> = z.object({
  data: z.union([ EditorWidgetCreateManyInputSchema,EditorWidgetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default EditorWidgetCreateManyArgsSchema;
