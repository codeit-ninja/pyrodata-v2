import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageArgsSchema } from "../outputTypeSchemas/PageArgsSchema"
import { CompositionArgsSchema } from "../outputTypeSchemas/CompositionArgsSchema"

export const IngredientIncludeSchema: z.ZodType<Prisma.IngredientInclude> = z.object({
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
  composition: z.union([z.boolean(),z.lazy(() => CompositionArgsSchema)]).optional(),
}).strict()

export default IngredientIncludeSchema;
