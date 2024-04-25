import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SessionOrderByWithRelationInputSchema } from './SessionOrderByWithRelationInputSchema';
import { FileOrderByRelationAggregateInputSchema } from './FileOrderByRelationAggregateInputSchema';
import { PageOrderByRelationAggregateInputSchema } from './PageOrderByRelationAggregateInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  session: z.lazy(() => SessionOrderByWithRelationInputSchema).optional(),
  files: z.lazy(() => FileOrderByRelationAggregateInputSchema).optional(),
  pages: z.lazy(() => PageOrderByRelationAggregateInputSchema).optional()
}).strict();

export default UserOrderByWithRelationInputSchema;
