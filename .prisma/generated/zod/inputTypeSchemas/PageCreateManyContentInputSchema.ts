import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PageCreateManyContentInputSchema: z.ZodType<Prisma.PageCreateManyContentInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  categorySlug: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default PageCreateManyContentInputSchema;
