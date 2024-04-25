<script lang="ts" generics="T">
    import type { Snippet } from 'svelte';
    
    type Props = {
		header: Snippet;
		body: Snippet;
		footer: Snippet;
        element: HTMLDialogElement;
        type?: 'modal' | 'offcanvas';
        position?: 'left' | 'right';
        closeButton?: boolean;
	}

    let { header, body, footer, element = $bindable(), type = 'modal', position = 'right', closeButton = true }: Props = $props();
</script>
<dialog 
    bind:this={element} 
    class="dialog dialog--sm" 
    class:dialog--offcanvas={type === 'offcanvas'}
    class:dialog--offcanvas--left={type === 'offcanvas' && position === 'left'}
    class:dialog--offcanvas--right={type === 'offcanvas' && position === 'right'}
    class:dialog--modal={type === 'modal'}
>
    {#if closeButton}
        <button class="dialog--close material-symbols-outlined" aria-roledescription="Close login modal" onclick={() => element.close()}>
            close
        </button>
    {/if}
    <div class="dialog--header">
        {@render header()}
    </div>
    <div class="dialog--body">
        {@render body()}
    </div>
    <div class="dialog--footer">
        {@render footer()}
    </div>
</dialog>