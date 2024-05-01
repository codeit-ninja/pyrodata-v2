<script lang="ts" generics="T">
    import Icon from '$lib/components/Icon.svelte';
    import { uniqueId } from 'lodash-es';
    import Dropzone from 'svelte-file-dropzone';

    type Props = {
        label: string;
        name: string;
        value?: T | null;
        preview?: 'video' | 'image';
        accept?: string;
        placeholder?: string;
        error?: string;
    }

    let {
        label,
        name,
        placeholder,
        preview,
        accept = $bindable(),
        value = $bindable(),
        error = $bindable(undefined),
    }: Props = $props();

    let file = $state<File>();
    let previewEl = $state<HTMLVideoElement>();
    let progress = $state(0);
    let isUploading = $state(false);

    const id = uniqueId(`${name}_`);

    const dragenter = (event: CustomEvent<{ dragEvent: DragEvent & { currentTarget: HTMLDivElement } }>) => {
        event.detail.dragEvent.currentTarget.classList.add('dragover');
    }

    const dragleave = (event: CustomEvent<{ dragEvent: DragEvent & { currentTarget: HTMLDivElement } }>) => {
        event.detail.dragEvent.currentTarget.classList.remove('dragover');
    }

    const drop = (event: CustomEvent<{ event: DragEvent & { currentTarget: HTMLDivElement } }>) => {
        event.detail.event.currentTarget.classList.remove('dragover');
    }

    const dropaccepted = async (event: CustomEvent<{ acceptedFiles: File[]; event: DragEvent }>) => {
        file = event.detail.acceptedFiles[0];
        isUploading = true;

        const formData = new FormData();
        formData.set('file', file);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        const reader = response.body!.pipeThrough(new TextDecoderStream()).getReader();

        while (true) {
            const stream = await reader.read();
            
            if (stream.done) {
                break;
            }

            if (!stream.value) {
                continue;
            }
            
            const data = JSON.parse(stream.value) as App.ApiReturnTypes['upload'];
            
            if (data.status === 202) {
                progress = (data.data.loaded / data.data.size) * 100;
            }

            if (data.status === 201) {
                isUploading = false;
                value = data.data as T;
            }
        }
    }

    $effect(() => {
        if (!previewEl || !file || !preview) {
            return;
        }

        previewEl.src = URL.createObjectURL(file)
        previewEl.load();
    })
</script>
<label class="form-label d-block" for={id}>{label}</label>
<Dropzone
    on:dragenter={dragenter}
    on:dragleave={dragleave}
    on:dropaccepted={dropaccepted}
    on:drop={drop}
    disableDefaultStyles 
    multiple={false}
    containerClasses="form-dropzone"
    {accept}
    {name}
>
    {#if file && preview}
        <!-- svelte-ignore a11y_media_has_caption -->
        <div class="dropzone-preview ratio ratio-16x9">
            <video preload="metadata" bind:this={previewEl} class="object-fit-cover"></video>
            <div class="filename">{file.name}</div>
            <div class="progress" style="width: {progress}%;"></div>
            {#if isUploading}
                <div class="spinner spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            {:else}
                <button type="button" onclick={() => file = undefined}>
                    <Icon icon="delete" size="xxl" />
                </button>
            {/if}
        </div>
    {:else}
        {placeholder}
    {/if}
</Dropzone>
{#if error}
    <div class="invalid-feedback d-block">
        {error}
    </div>
{/if}
<style lang="scss">
    .dropzone-preview {
        position: relative;
        max-width: 250px;
        overflow: clip;
        border-radius: var(--bs-border-radius);

        &:hover {
            button {
                visibility: visible;
                opacity: 1;
            }
        }
    }

    .progress {
        position: absolute;
        background-color: var(--bs-info);
        height: 5px;
        top: calc(100% - 5px);
        left: 0;
        transition: width .12s ease-in-out;
    }

    .spinner {
        --bs-spinner-border-width: 0.15em;

        position: absolute;
        width: 30px;
        height: 30px;
        top: calc(50% - 30px);
        left: calc(50% - 15px);
        color: var(--bs-primary);
    }

    .filename {
        display: flex;
        align-items: flex-end;
        background: linear-gradient(180deg, rgba(0, 0, 0, .1) 0%, var(--bs-gray-900) 100%);
        position: absolute;
        bottom: 0;
        height: 100%;
        width: 100%;
        padding: 1rem 1rem;
        text-wrap: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    video {
        max-width: 100%;
        border-radius: var(--bs-border-radius);
    }

    button {
        visibility: hidden;
        opacity: 0;
        color: var(--bs-danger);
        padding-bottom: 1rem;
        transition: all .12s ease-in-out;
    }
</style>