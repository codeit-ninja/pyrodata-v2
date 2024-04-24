<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        collapsed?: boolean;
        title: string;
        children: Snippet;
    }

    let { children, title, collapsed = $bindable(true) }: Props = $props();
    let element = $state<HTMLDivElement>();
</script>
<div class="collapsible" bind:this={element} aria-expanded={collapsed}>
    <div class="collapsible--header" onclick={() => collapsed = !collapsed} onkeydown={() => collapsed = !collapsed} role="button" tabindex="0">
        <h6 class="mb-0 d-flex align-items-center">
            { title }
            {#if collapsed}
                <span class="material-symbols-outlined ms-auto">
                    expand_more
                </span>
            {:else}
                <span class="material-symbols-outlined ms-auto">
                    expand_less
                </span>
            {/if}
        </h6>
    </div>
    <div class="collapsible--body">
        {@render children()}
    </div>
</div>