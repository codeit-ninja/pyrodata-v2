import { z } from 'zod';

export const IngredientScalarFieldEnumSchema = z.enum(['id','amount','name','note','compositionId','pageId']);

export default IngredientScalarFieldEnumSchema;
