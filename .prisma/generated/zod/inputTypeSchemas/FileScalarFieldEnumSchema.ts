import { z } from 'zod';

export const FileScalarFieldEnumSchema = z.enum(['id','name','title','description','mimeType','userId']);

export default FileScalarFieldEnumSchema;
