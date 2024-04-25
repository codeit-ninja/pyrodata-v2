<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import RichTextToolbar from "./RichTextToolbar.svelte";
    import uniqueId from "lodash-es/uniqueId";
    
    import { Editor } from "@tiptap/core";
    import StarterKit from "@tiptap/starter-kit";
    import Link from "@tiptap/extension-link";
    import ListItem from "@tiptap/extension-list-item";
    import Image from "@tiptap/extension-image";

    type Props = {
        label: string;
        name: string;
        value: string | null;
        placeholder?: string;
        error?: string[];
        rest?: any[];
    } & HTMLAttributes<HTMLTextAreaElement>;
    
    let editor = $state<Editor>();
    let element = $state<HTMLDivElement>();

    let {
        label,
        name,
        placeholder,
        value = $bindable(),
        error = $bindable(undefined),
        ...rest
    }: Props = $props();

    const id = uniqueId(`${name}_`);
    
    $effect( () => {
        editor = new Editor({
            element,
            extensions: [
                StarterKit,
                Link.configure({
                    autolink: true,
                    linkOnPaste: true,
                    openOnClick: false
                }),
                ListItem,
                Image
            ],
            content: "<p>Hello World! 🌍️ </p>",
            onTransaction: () => {
                // You probaly think wtf is going here?
                // Well to make sure .isActive() is working
                // we need to reassign so svelte triggers a
                // update in the toolbar ..
                const bk = editor;

                editor = undefined;
                editor = bk;

                value = editor?.getHTML() ?? null;
            }
        });

        return () => {
            editor?.destroy()
        }
    })
</script>
<label for={id} class="form-label">{label}</label>
<textarea
    {id}
    {name}
    {...rest}
    bind:value
    class="form-control mb-4 d-none"
></textarea>
<div bind:this={element} class="form-richtext">
    {#if editor}
        <RichTextToolbar bind:editor />
    {/if}
</div>
{#if error}
    <div class="invalid-feedback d-block">
        {error}
    </div>
{/if}