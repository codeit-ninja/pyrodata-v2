<script lang="ts">
    import { superForm } from "sveltekit-superforms";
    import type { CompositionOptionalDefaultsWithRelations } from '$prisma/zod';
    import SuperDebug from 'sveltekit-superforms';
    import InputText from "../inputs/InputText.svelte";
    import InputRichText from "../inputs/richtext/InputRichText.svelte";
    
    type Props = {
        data: CompositionOptionalDefaultsWithRelations;
    }

    const { data }: Props = $props();
    const { form, errors, constraints, message, enhance } = superForm(data, { dataType: 'json' });
</script>
<form method="POST" use:enhance>
    <h3>New composition</h3>
    <div class="mb-3">
        <InputText
            label="Name"
            name="name"
            bind:value={$form.name} 
            error={$errors.name}
            {...$constraints.name}
        /> 
    </div>
    <div class="mb-3">
        <InputRichText 
            label="Description"
            name="description"
            bind:value={$form.description}
            error={$errors.description}
            {...$constraints.description}
        />
    </div>
    <SuperDebug data={$form} />
</form>