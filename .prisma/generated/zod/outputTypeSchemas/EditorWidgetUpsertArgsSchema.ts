import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EditorWidgetWhereUniqueInputSchema } from '../inputTypeSchemas/EditorWidgetWhereUniqueInputSchema'
import { EditorWidgetCreateInputSchema } from '../inputTypeSchemas/EditorWidgetCreateInputSchema'
import { EditorWidgetUncheckedCreateInputSchema } from '../inputTypeSchemas/EditorWidgetUncheckedCreateInputSchema'
import { EditorWidgetUpdateInputSchema } from '../inputTypeSchemas/EditorWidgetUpdateInputSchema'
import { EditorWidgetUncheckedUpdateInputSchema } from '../inputTypeSchemas/EditorWidgetUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EditorWidgetSelectSchema: z.ZodType<Prisma.EditorWidgetSelect> = z.object({
  id: z.boolean().optional(),
}).strict()

export const EditorWidgetUpsertArgsSchema: z.ZodType<Prisma.EditorWidgetUpsertArgs> = z.object({
  select: EditorWidgetSelectSchema.optional(),
  where: EditorWidgetWhereUniqueInputSchema,
  create: z.union([ EditorWidgetCreateInputSchema,EditorWidgetUncheckedCreateInputSchema ]),
  update: z.union([ EditorWidgetUpdateInputSchema,EditorWidgetUncheckedUpdateInputSchema ]),
}).strict() ;

export default EditorWidgetUpsertArgsSchema;
