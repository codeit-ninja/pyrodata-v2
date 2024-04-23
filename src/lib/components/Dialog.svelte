<script lang="ts" generics="T">
    import type { Snippet } from 'svelte';
    
    type Props = {
		header: Snippet;
		body: Snippet;
		footer: Snippet;
        element: HTMLDialogElement;
	}

    let { header, body, footer, element = $bindable() }: Props = $props();
</script>
<dialog bind:this={element} class="dialog dialog--sm">
    <button class="dialog--close material-symbols-outlined" aria-roledescription="Close login modal" onclick={() => element.close()}>
        close
    </button>
    <div class="dialog--header justify-content-center">
        {@render header()}
    </div>
    <div class="dialog--body">
        {@render body()}
    </div>
    <div class="dialog--footer">
        {@render footer()}
    </div>
</dialog>