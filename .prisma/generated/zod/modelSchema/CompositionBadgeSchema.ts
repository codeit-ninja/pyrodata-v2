import { z } from 'zod';

/////////////////////////////////////////
// COMPOSITION BADGE SCHEMA
/////////////////////////////////////////

export const CompositionBadgeSchema = z.object({
  id: z.number().int(),
})

export type CompositionBadge = z.infer<typeof CompositionBadgeSchema>

/////////////////////////////////////////
// COMPOSITION BADGE PARTIAL SCHEMA
/////////////////////////////////////////

export const CompositionBadgePartialSchema = CompositionBadgeSchema.partial()

export type CompositionBadgePartial = z.infer<typeof CompositionBadgePartialSchema>

/////////////////////////////////////////
// COMPOSITION BADGE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CompositionBadgeOptionalDefaultsSchema = CompositionBadgeSchema.merge(z.object({
  id: z.number().int().optional(),
}))

export type CompositionBadgeOptionalDefaults = z.infer<typeof CompositionBadgeOptionalDefaultsSchema>

export default CompositionBadgeSchema;
