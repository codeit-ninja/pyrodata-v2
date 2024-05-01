import { z } from 'zod';

export const IngredientScalarFieldEnumSchema = z.enum(['id','amount','name','note','pageId','compositionId','createdAt','updatedAt']);

export default IngredientScalarFieldEnumSchema;
