import { z } from 'zod';

export const ChemicalScalarFieldEnumSchema = z.enum(['id','name','formula','pageId']);

export default ChemicalScalarFieldEnumSchema;
