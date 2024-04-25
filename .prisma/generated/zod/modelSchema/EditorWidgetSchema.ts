import { z } from 'zod';

/////////////////////////////////////////
// EDITOR WIDGET SCHEMA
/////////////////////////////////////////

export const EditorWidgetSchema = z.object({
  id: z.number().int(),
})

export type EditorWidget = z.infer<typeof EditorWidgetSchema>

/////////////////////////////////////////
// EDITOR WIDGET PARTIAL SCHEMA
/////////////////////////////////////////

export const EditorWidgetPartialSchema = EditorWidgetSchema.partial()

export type EditorWidgetPartial = z.infer<typeof EditorWidgetPartialSchema>

/////////////////////////////////////////
// EDITOR WIDGET OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const EditorWidgetOptionalDefaultsSchema = EditorWidgetSchema.merge(z.object({
  id: z.number().int().optional(),
}))

export type EditorWidgetOptionalDefaults = z.infer<typeof EditorWidgetOptionalDefaultsSchema>

export default EditorWidgetSchema;
