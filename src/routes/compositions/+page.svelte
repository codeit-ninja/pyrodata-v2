<script lang="ts">
    const { data } = $props();

    console.log(data)
</script>
<div class="page">
    <div class="page--title">
        <h1>Compositions</h1>
    </div>
    <div class="page--content d-flex">
        <section class="page--content--filters">
            <form>
                <h5 class="mb-4">Filters</h5>
                <div class="mb-7">
                    <h6>Search</h6>
                    <input type="text" class="form-control" placeholder="Search by name" />
                </div>
                <div class="mb-7">
                    <h6>Type</h6>
                    {#each data.categories as category}
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value={category.id} id={category.id} name="type">
                            <label class="form-check-label" for={category.id}>
                                { category.name }
                            </label>
                        </div>
                    {/each}
                </div>
                <div class="mb-3">
                    <h6>Contains</h6>
                    {#each data.chemicals as chemical}
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value={chemical.id} id={chemical.id} name="contains[]">
                            <label class="form-check-label" for={chemical.id}>
                                { chemical.name }
                            </label>
                        </div>
                    {/each}
                </div>
            </form>
        </section>
        <section class="flex-grow-1">
            <div class="row g-5">
                {#each data.compositions as composition}
                    <div class="col-6">
                        <div class="card card--composition h-100">
                            <div class="card-header">
                                <a href={`/compositions/${composition.name}`}>{ composition.name }</a>
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
                            <div class="card-footer">
                                <!-- <span class="badge badge--danger">
                                    <span class="material-symbols-outlined">
                                        dangerous
                                    </span>
                                </span> -->
                                <span class="badge badge--verified">
                                    <span class="material-symbols-outlined">
                                        verified
                                    </span>
                                </span>
                                <span class="badge badge--expert">
                                    <span class="material-symbols-outlined">
                                        workspace_premium
                                    </span>
                                </span>
                                <span class="badge badge--beginner">
                                    <span class="material-symbols-outlined">
                                        editor_choice
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </section>
    </div>
</div>