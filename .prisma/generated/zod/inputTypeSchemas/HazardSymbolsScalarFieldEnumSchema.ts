import { z } from 'zod';

export const HazardSymbolsScalarFieldEnumSchema = z.enum(['id','name','symbol']);

export default HazardSymbolsScalarFieldEnumSchema;
