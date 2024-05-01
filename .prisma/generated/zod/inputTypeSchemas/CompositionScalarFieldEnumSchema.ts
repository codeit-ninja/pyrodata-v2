import { z } from 'zod';

export const CompositionScalarFieldEnumSchema = z.enum(['id','name','description','videoId','badges','userId','createdAt','updatedAt']);

export default CompositionScalarFieldEnumSchema;
