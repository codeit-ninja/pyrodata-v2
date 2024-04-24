<script lang="ts">
    import Collapsible from "$lib/components/Collapsible.svelte";
    import { get } from "$lib/fetch";

    const { data } = $props();

    const applyFilters = async (e: Event & { currentTarget: HTMLFormElement }) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const params = {
            type: formData.get('type'),
            contains: formData.getAll('contains[]'),
            q: formData.get('q')
        }

        const [response, err] = await get('/api/compositions', params);

        // @ts-ignore
        data.compositions = response;
    }
</script>
<div class="page">
    <div class="page--title d-flex align-items-center">
        <h1>Compositions</h1>
        <a href="/compositions/create" role="button" class="btn btn-dark ms-auto">Submit a composition</a>
    </div>
    <div class="page--content d-flex">
        <section class="page--content--filters">
            <form onchange={applyFilters} onsubmit={applyFilters}>
                <h5 class="mb-4">Filters</h5>
                <div class="mb-7">
                    <h6>Search</h6>
                    <input type="text" class="form-control" placeholder="Search by name" name="q" />
                </div>
                <div class="mb-7">
                    <Collapsible title="Type">
                        {#each data.categories as category}
                            <div class="form-check">
                                <input class="form-check-input" type="radio" value={category.id} id={category.id} name="type">
                                <label class="form-check-label" for={category.id}>
                                    { category.name }
                                </label>
                            </div>
                        {/each}
                    </Collapsible>
                </div>
                <div class="mb-3">
                    <Collapsible title="Contains">
                        {#each data.chemicals as chemical}
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value={chemical.id} id={chemical.id} name="contains[]">
                                <label class="form-check-label" for={chemical.id}>
                                    { chemical.name }
                                </label>
                            </div>
                        {/each}
                    </Collapsible>
                </div>
            </form>
        </section>
        <section class="flex-grow-1">
            <div class="row g-5">
                {#each data.compositions as composition}
                    <div class="col-6">
                        <div class="card card--composition h-100">
                            <div class="card-header d-flex align-items-center">
                                <a href={`/compositions/${composition.name}`}>{ composition.name }</a>
                                <span class="material-symbols-outlined badge--beginner ms-auto">
                                    verified_user
                                </span>
                                <span class="material-symbols-outlined badge--verified">
                                    verified_user
                                </span>
                            </div>
                            <div class="card-body flex-grow-1">
                                {#each composition.ingredients as ingredient}
                                    <div class="d-flex">
                                        <div class="card--composition--quantity">{ ingredient.amount }</div>
                                        <div class="card--composition--ingredient">
                                            {#if ingredient.page}
                                                <a href={``}>{ ingredient.name }</a>
                                            {:else}
                                                { ingredient.name }
                                            {/if}
                                            {#if ingredient.note}
                                                ({ ingredient.note })
                                            {/if}
                                        </div>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </section>
    </div>
</div>