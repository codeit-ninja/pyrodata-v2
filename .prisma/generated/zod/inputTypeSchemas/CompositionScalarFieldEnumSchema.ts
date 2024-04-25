import { z } from 'zod';

export const CompositionScalarFieldEnumSchema = z.enum(['id','name','description','videoId','badges']);

export default CompositionScalarFieldEnumSchema;
