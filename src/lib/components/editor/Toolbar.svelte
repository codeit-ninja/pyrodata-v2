<script lang="ts">
    import type { Editor } from '@tiptap/core';
    import type { Button, ButtonGroup } from '$lib/components/editor';

    type Props = {
        buttonGroups: ButtonGroup[];
        editor: Editor;
    }

    let { editor, buttonGroups }: Props = $props();

    const runAction = (button: Button) => {
        button.action().run();
        editor.commands.focus();
    }
</script>
<div class="editor--toolbar">
    {#each buttonGroups as group}
        <div class="editor--toolbar--group">
            {#each group.buttons as button}
                <button onclick={() => runAction(button)}>
                    <span class="material-symbols-outlined">
                        {button.icon}
                    </span>
                </button>
            {/each}
        </div>
    {/each}
    <button class="btn btn-primary ms-auto">Save</button>
</div>