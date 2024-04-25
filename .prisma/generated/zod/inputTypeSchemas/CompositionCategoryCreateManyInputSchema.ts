import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CompositionCategoryCreateManyInputSchema: z.ZodType<Prisma.CompositionCategoryCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  slug: z.string()
}).strict();

export default CompositionCategoryCreateManyInputSchema;
