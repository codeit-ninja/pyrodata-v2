import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PageCreateManyCategoryInputSchema: z.ZodType<Prisma.PageCreateManyCategoryInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  pageContentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string().optional().nullable()
}).strict();

export default PageCreateManyCategoryInputSchema;
