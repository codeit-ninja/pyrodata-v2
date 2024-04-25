import { z } from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum(['title','slug']);

export default CategoryScalarFieldEnumSchema;
