import { validate } from "$lib/request";
import { createFileSchema, createFile } from "$lib/server/schemas/file";
import { json } from "@sveltejs/kit";

export const POST = async ({ locals, request }) => {
    const [data, error] = await validate(createFileSchema, request)

    console.log(data)

    if (error || !data) {
        return json(error, { status: 400 })
    }

    const response = await createFile(data);

    return json('');
}