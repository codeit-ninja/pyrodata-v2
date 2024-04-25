<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";
import type { Editor } from "@tiptap/core";

    type Props = {
        editor: Editor;
    }

    let { 
        editor = $bindable()
    }: Props = $props();

    let heading = $state<1 | 2 | 3 | 4 | 5 | 6>(2);
    let linkDropdownEl = $state<HTMLDivElement>();
    let link = $state('');

    const toggleHeading = () => {
        if( heading > 6 ) {
            heading = 2;
            return editor.chain().focus().setParagraph().run();
        }

        // @ts-expect-error This will never be bigger than 6, because of above if check
        editor.chain().focus().toggleHeading({ level: heading++ }).run()
    }

    const toggleBold = () => {
        editor.chain().focus().toggleBold().run();
    }

    const toggleItalic = () => {
        editor.chain().focus().toggleItalic().run();
    }

    const toggleStrike = () => {
        editor.chain().focus().toggleStrike().run();
    }

    const toggleLink = () => {
        if (editor.isActive('link')) {
            link = editor.getAttributes('link').href;
        }

        const input = linkDropdownEl?.querySelector('input');

        if (!input) {
            return;
        }

        input.focus();
    }

    const insertLink = () => {
        editor.chain().focus().setLink({ href: link }).run();
    }

    const unsetLink = () => {
        editor.chain().focus().unsetLink().run();
        link = '';
    }

    const toggleOrderedList = () => {
        editor.chain().focus().toggleOrderedList().run();
    }

    const toggleBulletList = () => {
        editor.chain().focus().toggleBulletList().run();
    }

    const toggleBlockQuote = () => {
        editor.chain().focus().toggleBlockquote().run();
    }

    const toggleCodeBlock = () => {
        editor.chain().focus().toggleCodeBlock().run();
    }
</script>
<div class="form-richtext-toolbar">
    <div class="toolbar-group">
        <button type="button" data-bs-toggle="tooltip" data-bs-title="Heading" onclick={toggleHeading} class:active={editor.isActive('heading')}>
            <Icon icon="title" />
        </button>
    </div>
    <div class="toolbar-group">
        <button type="button" data-bs-toggle="tooltip" data-bs-title="Bold" onclick={toggleBold} class:active={editor.isActive('bold')}>
            <Icon icon="format_bold" />
        </button>
        <button type="button" data-bs-toggle="tooltip" data-bs-title="Italic" onclick={toggleItalic} class:active={editor.isActive('italic')}>
            <Icon icon="format_italic" />
        </button>
        <button type="button" data-bs-toggle="tooltip" data-bs-title="Strikethrough" onclick={toggleStrike} class:active={editor.isActive('strike')}>
            <Icon icon="strikethrough_s" />
        </button>
        <div class="dropdown" data-bs-toggle="tooltip" data-bs-title="Link" bind:this={linkDropdownEl}>
            <button type="button" onclick={toggleLink} class:active={editor.isActive('link')} class="dropdown-open" data-bs-toggle="dropdown" aria-expanded="false">
                <Icon icon="link" />
            </button>
            <div class="dropdown-menu p-4">
                <label class="form-label" for="insert-url">Enter URL</label>
                <div class="d-flex align-items-center gap-1">
                    <input type="url" class="form-control form-control-sm" placeholder="https://example.com" id="insert-url" bind:value={link} />
                    <button class="btn btn-dark" type="button" onclick={insertLink}>Insert</button>
                    {#if editor.isActive('link')}
                        <button class="btn btn-dark" type="button" onclick={unsetLink}>
                            <Icon icon="delete" />
                        </button>
                    {/if}
                </div>
            </div>
        </div>
    </div>
    <div class="toolbar-group">
        <button type="button" data-bs-toggle="tooltip" data-bs-title="Unordered list" onclick={toggleBulletList} class:active={editor.isActive('bulletList')}>
            <Icon icon="format_list_bulleted" />
        </button>
        <button type="button" data-bs-toggle="tooltip" data-bs-title="Ordered list" onclick={toggleOrderedList} class:active={editor.isActive('orderedList')}>
            <Icon icon="format_list_numbered" />
        </button>
        <button type="button" data-bs-toggle="tooltip" data-bs-title="Quote block" onclick={toggleBlockQuote} class:active={editor.isActive('blockquote')}>
            <Icon icon="format_quote" />
        </button>
        <button type="button" data-bs-toggle="tooltip" data-bs-title="Code block" onclick={toggleCodeBlock} class:active={editor.isActive('codeBlock')}>
            <Icon icon="code_blocks" />
        </button>
    </div>
</div>
<style lang="scss">
    .form-richtext-toolbar {
        display: flex;
        align-items: center;
        background-color: var(--bs-gray-850);
        padding: .35rem;
    }

    .toolbar-group {
        display: flex;
        align-items: center;

        &:not(:first-child) {
            &::before {
                background-color: var(--bs-gray-600);
                display: block;
                content: "";
                height: 15px;
                width: 1px;
                margin: 0 .5rem;
            }
        }
    }

    .dropdown-menu {
        width: 300px;
    }

    button {
        display: flex;
        padding: 0;
        color: var(--bs-gray-000);
        padding: .25rem .25rem;

        &:hover {
            background-color: var(--bs-gray-600);
            border-radius: var(--bs-border-radius);
        }

        &.active {
            color: var(--bs-white);
        }
    }
</style>