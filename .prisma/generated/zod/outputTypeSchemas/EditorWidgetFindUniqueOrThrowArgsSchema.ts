import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EditorWidgetWhereUniqueInputSchema } from '../inputTypeSchemas/EditorWidgetWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EditorWidgetSelectSchema: z.ZodType<Prisma.EditorWidgetSelect> = z.object({
  id: z.boolean().optional(),
}).strict()

export const EditorWidgetFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EditorWidgetFindUniqueOrThrowArgs> = z.object({
  select: EditorWidgetSelectSchema.optional(),
  where: EditorWidgetWhereUniqueInputSchema,
}).strict() ;

export default EditorWidgetFindUniqueOrThrowArgsSchema;
