import { db } from "$lib/db"
import { json } from "@sveltejs/kit";

export const GET = async () => {
    return json(await db.compositionCategory.findMany());
}