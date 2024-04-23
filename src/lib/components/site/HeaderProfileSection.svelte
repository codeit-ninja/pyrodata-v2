<script lang="ts">
    import Dialog from "../Dialog.svelte";
    import LoginForm from "../forms/LoginForm.svelte";
    import { useAuthStore } from "$lib/stores/auth.svelte";
    
    const authStore = useAuthStore;
    
    const onClickLogin = () => {
        dialogElement.showModal()
    }

    let dialogElement = $state<HTMLDialogElement>() as HTMLDialogElement;

    // TODO: implement profile itself
</script>
<div class="header--profile text-end">
    {#if authStore.session}
        Logged in as: {authStore.session.user.username}
    {:else}
        <div class="d-flex align-items-center justify-content-end gap-2">
            <button class="btn btn-link">Create account</button>
            <button class="btn btn-primary" onclick={onClickLogin}>Login</button>
        </div>
    {/if}
</div>
<Dialog bind:element={dialogElement}>
    {#snippet header()}
        <h3>Login</h3>
    {/snippet}
    {#snippet body()}
        <LoginForm onlogin={() => dialogElement.close()} />
    {/snippet}
    {#snippet footer()}
        <div class="mt-4 text-muted text-center">
            Not a member yet? <a href="/register">Sign Up</a>
        </div>
    {/snippet}
</Dialog>