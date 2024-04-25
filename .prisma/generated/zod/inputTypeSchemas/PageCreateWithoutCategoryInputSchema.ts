import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateNestedOneWithoutPageInputSchema } from './FileCreateNestedOneWithoutPageInputSchema';
import { PageContentCreateNestedOneWithoutPageInputSchema } from './PageContentCreateNestedOneWithoutPageInputSchema';
import { ChemicalCreateNestedOneWithoutPageInputSchema } from './ChemicalCreateNestedOneWithoutPageInputSchema';
import { IngredientCreateNestedManyWithoutPageInputSchema } from './IngredientCreateNestedManyWithoutPageInputSchema';
import { UserCreateNestedOneWithoutPagesInputSchema } from './UserCreateNestedOneWithoutPagesInputSchema';

export const PageCreateWithoutCategoryInputSchema: z.ZodType<Prisma.PageCreateWithoutCategoryInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  featuredImage: z.lazy(() => FileCreateNestedOneWithoutPageInputSchema).optional(),
  content: z.lazy(() => PageContentCreateNestedOneWithoutPageInputSchema),
  chemical: z.lazy(() => ChemicalCreateNestedOneWithoutPageInputSchema).optional(),
  ingredients: z.lazy(() => IngredientCreateNestedManyWithoutPageInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPagesInputSchema).optional()
}).strict();

export default PageCreateWithoutCategoryInputSchema;
