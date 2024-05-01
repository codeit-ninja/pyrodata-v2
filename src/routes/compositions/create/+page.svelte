<script lang="ts">
    import CompositionForm from "$lib/components/forms/composition/CompositionForm.svelte";

    const { form } = $props();
</script>
<div class="page">
    <div class="page--title d-flex align-items-center">
        <h1>Composition</h1>
    </div>
    <div class="page--content">
        <section>
            <CompositionForm errors={form?.error} />
        </section>
    </div>
</div>