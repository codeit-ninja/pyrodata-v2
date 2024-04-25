import { CompositionOptionalDefaultsWithRelationsSchema } from '$prisma/zod';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

export const load = async () => {
    const form = await superValidate(zod(CompositionOptionalDefaultsWithRelationsSchema));

    return { form }
}