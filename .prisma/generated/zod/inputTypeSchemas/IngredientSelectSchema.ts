import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionArgsSchema } from "../outputTypeSchemas/CompositionArgsSchema"
import { PageArgsSchema } from "../outputTypeSchemas/PageArgsSchema"

export const IngredientSelectSchema: z.ZodType<Prisma.IngredientSelect> = z.object({
  id: z.boolean().optional(),
  amount: z.boolean().optional(),
  name: z.boolean().optional(),
  note: z.boolean().optional(),
  compositionId: z.boolean().optional(),
  pageId: z.boolean().optional(),
  composition: z.union([z.boolean(),z.lazy(() => CompositionArgsSchema)]).optional(),
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
}).strict()

export default IngredientSelectSchema;
