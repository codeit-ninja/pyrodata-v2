<script lang="ts">
    import type { ButtonGroup } from '$lib/components/editor';
    import { onMount } from 'svelte'
    import { Editor } from '@tiptap/core'
    import StarterKit from '@tiptap/starter-kit'
    import Toolbar from './Toolbar.svelte';

    import Image from '@tiptap/extension-image'
    import TextAlign from '@tiptap/extension-text-align'
    import ListItem from '@tiptap/extension-list-item'
    import Link from '@tiptap/extension-link'
    import Table from '@tiptap/extension-table'
    import TableCell from '@tiptap/extension-table-cell'
    import TableHeader from '@tiptap/extension-table-header'
    import TableRow from '@tiptap/extension-table-row'

    type Props = {
        content?: string;
    }

    let { content = $bindable() }: Props = $props();

    let element = $state<HTMLDivElement>();
    let editor = $state<Editor>();
    
    let buttons = $state<ButtonGroup[]>([])

    onMount(() => {
        editor = new Editor({
            element,
            content,
            extensions: [
                StarterKit,
                ListItem,
                Table.configure({
                    resizable: true
                }),
                TableRow,
                TableHeader,
                TableCell,
                Image.configure({
                    HTMLAttributes: {
                        class: 'img-fluid'
                    }
                }),
                Link.configure({
                    protocols: ['tel', 'mailto'],
                    openOnClick: "whenNotEditable"
                }),
                TextAlign.configure({
                    types: ['heading', 'paragraph']
                })
            ],
        })

        buttons = [
            {
                buttons: [
                    {
                        icon: 'format_h2',
                        action: () => editor!.chain().toggleHeading({ level: 2 })
                    }
                ]
            },
            {
                buttons: [
                    {
                        icon: 'format_bold',
                        action: () => editor!.chain().toggleBold()
                    },
                    {
                        icon: 'format_italic',
                        action: () => editor!.chain().toggleItalic()
                    },
                    {
                        icon: 'format_strikethrough',
                        action: () => editor!.chain().toggleStrike()
                    }
                ]
            },
            {
                buttons: [
                    {
                        icon: 'format_list_bulleted',
                        action: () => editor!.chain().toggleBulletList()
                    },
                    {
                        icon: 'format_list_numbered',
                        action: () => editor!.chain().toggleOrderedList()
                    }
                ]
            },
            {
                buttons: [
                    {
                        icon: 'format_align_left',
                        action: () => editor!.chain().setTextAlign('left')
                    },
                    {
                        icon: 'format_align_center',
                        action: () => editor!.chain().setTextAlign('center')
                    },
                    {
                        icon: 'format_align_right',
                        action: () => editor!.chain().setTextAlign('right')
                    }
                ]
            },
            {
                buttons: [
                    {
                        icon: 'table',
                        action: () => editor!.chain().insertTable({ cols: 2, rows: 2 })
                    }
                ]
            },
            {
                buttons: [
                    {
                        icon: 'link',
                        action: () => {
                            if (editor?.isActive('link')) {
                                return editor!.chain().unsetLink();
                            }

                            const url = window.prompt('URL');
                            
                            if (!url) {
                                return editor!.chain().unsetLink();
                            }

                            return editor!.chain().toggleLink({ href: url })
                        }
                    },
                    {
                        icon: 'imagesmode',
                        action: () => editor!.chain().setImage({ src: 'https://source.unsplash.com/8xznAGy4HcY/800x400' })
                    },
                    {
                        icon: 'table_rows',
                        action: () => editor!.chain().blur()
                    },
                    {
                        icon: 'youtube_activity',
                        action: () => editor!.chain().blur()
                    },
                ],
            }
        ]
    })
</script>
<div bind:this={element} class="editor">
    {#if editor}
        <Toolbar buttonGroups={buttons} {editor} />
    {/if}
</div>