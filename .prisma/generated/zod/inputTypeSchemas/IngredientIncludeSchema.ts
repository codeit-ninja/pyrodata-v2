import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionArgsSchema } from "../outputTypeSchemas/CompositionArgsSchema"
import { PageArgsSchema } from "../outputTypeSchemas/PageArgsSchema"

export const IngredientIncludeSchema: z.ZodType<Prisma.IngredientInclude> = z.object({
  composition: z.union([z.boolean(),z.lazy(() => CompositionArgsSchema)]).optional(),
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
}).strict()

export default IngredientIncludeSchema;
