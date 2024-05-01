import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PageCreateManyCategoryInputSchema: z.ZodType<Prisma.PageCreateManyCategoryInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  pageContentId: z.string(),
  userId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default PageCreateManyCategoryInputSchema;
