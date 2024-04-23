import { db } from '$lib/db';
import { validate } from '$lib/request';
import { json } from '@sveltejs/kit';
import { compare } from 'bcrypt';
import { z } from 'zod';

const schema = z.object({
    username: z.string({ required_error: 'Field is required.' }).min(1, { message: 'Field cannot be empty.' }),
    password: z.string({ required_error: 'Field is required.' }).min(1, { message: 'Field cannot be empty.' })
})

export const POST = async ({ request, cookies }) => {
    const [data, error] = await validate(schema, request)

    if (error) {
        return json(error, { status: 400 });
    }

    const user = await db.user.findFirst({
        where: {
            OR: [
                {
                    username: {
                        equals: data.username,
                        mode: 'insensitive'
                    }
                },
                {
                    email: {
                        equals: data.username,
                        mode: 'insensitive'
                    }
                }
            ]
        }
    });

    const isValid = await compare(data.password, user?.password ?? '');

    if (!user || !isValid) {
        return json({ _errors: ['Username or password incorrect'] }, { status: 404 });
    }

    const session = await db.session.upsert({
        create: {
            user: {
                connect: user
            }
        },
        update: {},
        where: {
            userId: user.id
        },
        include: {
            user: {
                select: {
                    id: true,
                    email: true,
                    username: true,
                    role: true
                }
            }
        }
    })

    cookies.set('session', JSON.stringify( session ), { path: '/' })
    // if (!result.success) {
    //     const { username, password } = result.error.format();

    //     return Response.json({
    //         username: username?._errors,
    //         password: password?._errors
    //     }, { status: 400 })
    // }

    return Response.json(session);
}