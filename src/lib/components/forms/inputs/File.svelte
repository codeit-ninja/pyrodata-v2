<script lang="ts" generics="T">
    /**
     * TODO: Implement multi file upload!
     */
    import Icon from "$lib/components/Icon.svelte";
import Dropzone from "svelte-file-dropzone";

    type Props = {
        label: string;
        name: string;
        multiple?: boolean;
        minSize?: number;
        maxSize?: number;
        uploadOnDrop?: boolean;
        showPreview?: boolean;
        accept?: string;
        value?: T | null;
        placeholder?: string;
        error?: string;
        rest?: any[];
    }

    type FileRejections = {
        file: File;
        errors: { code: string, message: string }[];
    }

    type Events = {
        DRAGENTER: CustomEvent<{ dragEvent: DragEvent & { currentTarget: HTMLDivElement } }>;
        DRAGLEAVE: CustomEvent<{ dragEvent: DragEvent & { currentTarget: HTMLDivElement } }>;
        DROP: CustomEvent<{ event: DragEvent & { currentTarget: HTMLDivElement }, acceptedFiles: File[], fileRejections: FileRejections[] }>;
        DROPREJECTED: CustomEvent<{ event: DragEvent & { currentTarget: HTMLDivElement }, fileRejections: FileRejections[] }>;
        DROPACCEPTED: CustomEvent<{ event: DragEvent & { currentTarget: HTMLDivElement }, acceptedFiles: File[] }>;
    }

    let {
        label,
        name,
        minSize,
        maxSize,
        accept,
        placeholder,
        multiple = false,
        uploadOnDrop = false,
        showPreview = false,
        value = $bindable(),
        error = $bindable(undefined),
    }: Props = $props();

    let inputElement = $state<HTMLInputElement>();
    let progress = $state(0);
    let isUploading = $state(false);
    let file = $state<File>();
    let previewType = $state<'image' | 'video'>('image');
    let previewEl = $state<HTMLImageElement | HTMLVideoElement>();

    const dragenter = (event: Events['DRAGENTER']) => {
        event.detail.dragEvent.currentTarget.classList.add('dragenter');
    }

    const dragleave = (event: Events['DRAGLEAVE']) => {
        event.detail.dragEvent.currentTarget.classList.remove('dragenter');
    }

    const drop = (event: Events['DROP']) => {
        event.detail.event.currentTarget.classList.remove('dragenter');
    }

    const droprejected = (event: Events['DROPREJECTED']) => {
        if (event.detail.fileRejections) {
            inputElement!.value = '';
            error = `<ul>${event.detail.fileRejections.map(file => file.errors.map(error => `<li>${error.message}</li>`)).join('')}`
        }
    }

    const dropaccepted = async (event: Events['DROPACCEPTED']) => {
        error = undefined;
        file = event.detail.acceptedFiles[0];

        if (!uploadOnDrop) {
            return;
        }

        const formData = new FormData;
        formData.append('file', event.detail.acceptedFiles[0]);

        const response = await fetch('/api/files/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const responseData = await response.json();
            error = responseData?.errors?.file.message
            return;
        }

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

    const deleteFile = () => {
        value = undefined;
        file = undefined;
        inputElement!.value = '';
    }

    $effect(() => {
        if (showPreview && file && previewEl) {
            /**
             * Create preview for image
             */
            if (file?.type.startsWith('image/')) {
                previewType = 'image';
            }

            /**
             * Create preview for video
             */
            if (file?.type.startsWith('video/mp4')) {
                previewType = 'video';
            }

            previewEl.src = URL.createObjectURL(file)
        }
    })
</script>
<span class="d-block form-label">{label}</span>
{#if showPreview && !file}
    <Dropzone
        containerClasses="form-dropzone"
        disableDefaultStyles
        on:dragenter={dragenter}
        on:dragleave={dragleave}
        on:droprejected={droprejected}
        on:dropaccepted={dropaccepted}
        on:drop={drop}
        {minSize}
        {maxSize}
        {accept}
        {multiple}
        {inputElement}
    >
        {placeholder}
    </Dropzone>
{:else}
    <div class="dropzone-preview ratio ratio-16x9">
        {#if previewType === 'video'}
            <!-- svelte-ignore a11y_media_has_caption -->
            <video bind:this={previewEl} class="object-fit-cover" controls></video>
        {/if}
        {#if previewType === 'image'}
            <!-- svelte-ignore a11y_missing_attribute -->
            <img bind:this={previewEl} class="object-fit-cover" />
        {/if}
        <div class="progress" style="width: {progress}%;"></div>
        <button type="button" class="delete" title="Delete" onclick={deleteFile}><Icon icon="close" size="lg" /></button>
    </div>
{/if}
<input 
    class="d-none"
    type="file" 
    {name}
    {accept}
    {multiple}
    bind:this={inputElement}
/>
{#if error}
    <div class="invalid-feedback d-block">
        {@html error}
    </div>
{/if}
<style>
    .dropzone-preview {
        max-width: 400px;
        border: 1px solid var(--bs-border-color);
        border-radius: var(--bs-border-radius);
        overflow: clip;
    }

    .progress {
        position: absolute;
        background-color: var(--bs-info);
        height: 5px;
        width: 30px;
        top: calc(100% - 5px);
    }

    .delete {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(var(--bs-black-rgb), .5);
        height: 50px;
        width: 50px;
        left: calc(100% - 50px);
        border-bottom-left-radius: var(--bs-border-radius);
        backdrop-filter: blur(4px);
    }
</style>