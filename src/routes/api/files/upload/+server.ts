import { MAX_UPLOAD_SIZE } from "$env/static/private";
import { formData, validate, type ValidateErrors } from "$lib/request";
import { Drive } from "$lib/server/drive";
import { json } from "@sveltejs/kit";

export const POST = async ({ locals, request }) => {
    const data = formData<{ file: File }>(await request.formData());
    
    if (data.file.size > parseInt(MAX_UPLOAD_SIZE)) {
        const error = {
            errors: { 
                file: { 
                    message: 'Woaah, that file it too big, I dont have that much storage ..' 
                } 
            }
        }
        
        return json(error, { status: 413 })
    }

    const stream = Drive.use('s3').put(data.file, locals);
    
    return new Response(stream, {
        headers: {
            'content-type': 'text/event-stream',
        }
    });
}