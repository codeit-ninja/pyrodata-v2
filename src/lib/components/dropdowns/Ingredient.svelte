<script lang="ts">
    import { get } from "$lib/fetch";
    import type { PageOptionalDefaultsWithRelations } from "$prisma/zod";
    import type { Dropdown } from "bootstrap";
    import { debounce } from "lodash-es";
    import { onMount } from "svelte";

    type Props = {
        value: string;
        onselect?: ( page: PageOptionalDefaultsWithRelations ) => void;
    }

    let dropdownElement = $state<HTMLDivElement>();
    let dropdown = $state<Dropdown>();
    let pages = $state<PageOptionalDefaultsWithRelations[]>([]);

    let { value = $bindable(), onselect }: Props = $props();

    const search = debounce( async () => {
        const [response, err] = await get<PageOptionalDefaultsWithRelations[]>('/api/pages', { q: value, limit: 5 });

        pages = response;
    }, 150);

    const select = (page: PageOptionalDefaultsWithRelations) => {
        if (onselect) {
            onselect(page);
        }
        
        pages = [];
    }

    onMount( async () => {
        const { Dropdown } = await import('bootstrap');

        if (!dropdownElement) {
            return;
        }

        dropdown = new Dropdown(dropdownElement);
    })

    $effect(() => {
        if (pages.length > 0) {
            dropdown?.show();
        }

        if (pages.length === 0 || value === '') {
            dropdown?.hide();
        }
    })
</script>
<div class="dropdown dropdown--ingredient" bind:this={dropdownElement}>
    <label class="form-label" for="ingredient">Ingredient</label>
    <input
        type="text" 
        class="form-control" 
        placeholder="Chemical / ingredient name" 
        id="ingredient" 
        bind:value
        onkeyup={search}
        autocomplete="off"
    />
    <ul class="dropdown-menu">
        {#each pages as page}
            <li><button type="button" role="link" class="dropdown-item" onclick={() => select(page)}>{page.title}</button></li>
        {/each}
    </ul>
</div>