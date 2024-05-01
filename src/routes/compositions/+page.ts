import type { API } from '$app/types';
import type { CompositionCategory, Prisma } from '@prisma/client';

type Compositions = Prisma.CompositionGetPayload<{ 
    include: { 
        categories: true, 
        ingredients: { include: { page: { include: { chemical: true } } } }, 
        submittedBy: true, video: true } 
    }
>

export const load = async ({ fetch }) => {
    const fetchCompositions = await fetch('/api/compositions')
    const compositionsResponse = await fetchCompositions.json() as API.Response<Compositions[]>;

    const fetchCategories = await fetch('/api/compositions/categories');
    const categoriesResponse = await fetchCategories.json() as API.Response<CompositionCategory[]>;

    return {
        compositions: compositionsResponse,
        categories: categoriesResponse
    }
}