import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateNestedOneWithoutPageInputSchema } from './FileCreateNestedOneWithoutPageInputSchema';
import { CategoryCreateNestedOneWithoutPageInputSchema } from './CategoryCreateNestedOneWithoutPageInputSchema';
import { ChemicalCreateNestedOneWithoutPageInputSchema } from './ChemicalCreateNestedOneWithoutPageInputSchema';
import { IngredientCreateNestedManyWithoutPageInputSchema } from './IngredientCreateNestedManyWithoutPageInputSchema';
import { UserCreateNestedOneWithoutPagesInputSchema } from './UserCreateNestedOneWithoutPagesInputSchema';

export const PageCreateWithoutContentInputSchema: z.ZodType<Prisma.PageCreateWithoutContentInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  featuredImage: z.lazy(() => FileCreateNestedOneWithoutPageInputSchema).optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutPageInputSchema).optional(),
  chemical: z.lazy(() => ChemicalCreateNestedOneWithoutPageInputSchema).optional(),
  ingredients: z.lazy(() => IngredientCreateNestedManyWithoutPageInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPagesInputSchema).optional()
}).strict();

export default PageCreateWithoutContentInputSchema;
