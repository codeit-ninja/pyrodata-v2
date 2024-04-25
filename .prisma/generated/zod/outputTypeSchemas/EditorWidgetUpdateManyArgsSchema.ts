import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EditorWidgetUpdateManyMutationInputSchema } from '../inputTypeSchemas/EditorWidgetUpdateManyMutationInputSchema'
import { EditorWidgetUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EditorWidgetUncheckedUpdateManyInputSchema'
import { EditorWidgetWhereInputSchema } from '../inputTypeSchemas/EditorWidgetWhereInputSchema'

export const EditorWidgetUpdateManyArgsSchema: z.ZodType<Prisma.EditorWidgetUpdateManyArgs> = z.object({
  data: z.union([ EditorWidgetUpdateManyMutationInputSchema,EditorWidgetUncheckedUpdateManyInputSchema ]),
  where: EditorWidgetWhereInputSchema.optional(),
}).strict() ;

export default EditorWidgetUpdateManyArgsSchema;
