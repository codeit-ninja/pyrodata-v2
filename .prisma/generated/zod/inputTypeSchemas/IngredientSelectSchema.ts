import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageArgsSchema } from "../outputTypeSchemas/PageArgsSchema"
import { CompositionArgsSchema } from "../outputTypeSchemas/CompositionArgsSchema"

export const IngredientSelectSchema: z.ZodType<Prisma.IngredientSelect> = z.object({
  id: z.boolean().optional(),
  amount: z.boolean().optional(),
  name: z.boolean().optional(),
  note: z.boolean().optional(),
  pageId: z.boolean().optional(),
  compositionId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
  composition: z.union([z.boolean(),z.lazy(() => CompositionArgsSchema)]).optional(),
}).strict()

export default IngredientSelectSchema;
