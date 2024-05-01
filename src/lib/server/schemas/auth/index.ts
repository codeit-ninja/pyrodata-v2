import type { loginSchema } from "./schema";
import { db } from "$lib/db";
import { compare } from "bcrypt";

export const login = async (data: loginSchema) => {
    const user = await db.user.findFirst({
        where: {
            OR: [
                { username: { equals: data.username, mode: 'insensitive' } },
                { email: { equals: data.username, mode: 'insensitive' } }
            ]
        }
    });

    const isValid = await compare(data.password, user?.password ?? '');

    if (!isValid || !user) {
        return false;
    }

    return await db.session.upsert({
        create: { user: { connect: user } },
        update: {},
        where: { userId: user.id },
        include: {
            user: { select: { id: true, email: true, username: true, role: true } }
        }
    })
}

export const update = () => {

}

export * from './schema';