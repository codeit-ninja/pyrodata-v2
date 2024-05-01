import { Drive } from '$lib/server/drive';

export const POST = async ({ request, locals }) => {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    const stream = Drive.use('s3').put(file, locals);

    return new Response(stream, {
        headers: {
            'content-type': 'text/event-stream',
        }
    });
}