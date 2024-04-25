import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EditorWidgetWhereInputSchema } from '../inputTypeSchemas/EditorWidgetWhereInputSchema'

export const EditorWidgetDeleteManyArgsSchema: z.ZodType<Prisma.EditorWidgetDeleteManyArgs> = z.object({
  where: EditorWidgetWhereInputSchema.optional(),
}).strict() ;

export default EditorWidgetDeleteManyArgsSchema;
