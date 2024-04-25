import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EditorWidgetWhereInputSchema } from '../inputTypeSchemas/EditorWidgetWhereInputSchema'
import { EditorWidgetOrderByWithRelationInputSchema } from '../inputTypeSchemas/EditorWidgetOrderByWithRelationInputSchema'
import { EditorWidgetWhereUniqueInputSchema } from '../inputTypeSchemas/EditorWidgetWhereUniqueInputSchema'
import { EditorWidgetScalarFieldEnumSchema } from '../inputTypeSchemas/EditorWidgetScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EditorWidgetSelectSchema: z.ZodType<Prisma.EditorWidgetSelect> = z.object({
  id: z.boolean().optional(),
}).strict()

export const EditorWidgetFindManyArgsSchema: z.ZodType<Prisma.EditorWidgetFindManyArgs> = z.object({
  select: EditorWidgetSelectSchema.optional(),
  where: EditorWidgetWhereInputSchema.optional(),
  orderBy: z.union([ EditorWidgetOrderByWithRelationInputSchema.array(),EditorWidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: EditorWidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EditorWidgetScalarFieldEnumSchema,EditorWidgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default EditorWidgetFindManyArgsSchema;
