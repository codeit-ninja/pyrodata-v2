<script lang="ts">
    import type { Prisma } from "@prisma/client";
    import Chemical from "$lib/components/cards/Chemical.svelte";

    let { data } = $props();
    let chemicalsSorted: {
        [key: string]: Prisma.ChemicalGetPayload<{
            include: {
                hazards: true;
                page: { include: { featuredImage: true } };
            };
        }>[];
    } = $state({});

    for (const chemical of data.chemicals) {
        const index = chemical.name[0].toLowerCase();

        if (!chemicalsSorted[index]) {
            chemicalsSorted[index] = [];
        }

        chemicalsSorted[index].push(chemical);
    }

    console.log(chemicalsSorted);
</script>

<div class="page">
    <div class="page--title">
        <h1>Chemicals</h1>
    </div>
    <div class="page--content">
        {#each Object.keys(chemicalsSorted) as key}
            <section id={key}>
                <h5 class="text-uppercase">{key}</h5>
                <div class="row g-2">
                    {#each chemicalsSorted[key] as chemical}
                        <div class="col-md-3">
                            <Chemical {chemical} />
                        </div>
                    {/each}
                </div>
            </section>
        {/each}
    </div>
</div>
