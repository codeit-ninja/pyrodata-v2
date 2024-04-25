import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EditorWidgetCreateInputSchema } from '../inputTypeSchemas/EditorWidgetCreateInputSchema'
import { EditorWidgetUncheckedCreateInputSchema } from '../inputTypeSchemas/EditorWidgetUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EditorWidgetSelectSchema: z.ZodType<Prisma.EditorWidgetSelect> = z.object({
  id: z.boolean().optional(),
}).strict()

export const EditorWidgetCreateArgsSchema: z.ZodType<Prisma.EditorWidgetCreateArgs> = z.object({
  select: EditorWidgetSelectSchema.optional(),
  data: z.union([ EditorWidgetCreateInputSchema,EditorWidgetUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export default EditorWidgetCreateArgsSchema;
