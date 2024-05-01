import { z } from 'zod';

export const TokenScalarFieldEnumSchema = z.enum(['id','token','userId']);

export default TokenScalarFieldEnumSchema;
