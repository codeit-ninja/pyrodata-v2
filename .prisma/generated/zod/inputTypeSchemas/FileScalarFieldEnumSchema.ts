import { z } from 'zod';

export const FileScalarFieldEnumSchema = z.enum(['id','location','title','description','mimeType','userId','createdAt','updatedAt']);

export default FileScalarFieldEnumSchema;
