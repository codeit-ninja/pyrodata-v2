<script lang="ts">
    import { useAuthStore } from "$lib/stores/auth.svelte";
    
    type Props = {
        onlogin?: (session: App.Locals['session']) => void;
    }

    let { onlogin }: Props = $props();
    const authStore = useAuthStore;

    const onSubmit = async (e: SubmitEvent & {
        currentTarget: EventTarget & HTMLFormElement;
    }) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const [data, err] = await authStore.login(formData);
        
        error = err ?? undefined;
        
        if (data) {
            useAuthStore.session = data;

            if(onlogin) {
                onlogin(data);
            }
        }
    }

    let error = $state<{ message?: string, username: { message: string }, password: { message: string } }>();
</script>
<form method="post" onsubmit={onSubmit}>
    <div class="mb-3">
        <input type="text" class="form-control" placeholder="Username or email" name="username" />
        {#if error?.username}
            <span class="d-block text-danger mt-1 fw-medium">{error.username.message}</span>
        {/if}
    </div>
    <div class="mb-3">
        <input type="password" class="form-control" placeholder="********" name="password" />
        {#if error?.password}
            <span class="d-block text-danger mt-1 fw-medium">{error.password.message}</span>
        {/if}
    </div>
    <div class="d-flex flex-column gap-2 align-items-center">
        <button class="btn btn-primary w-100">Submit</button>
        {#if error?.message}
            <span class="text-danger mt-1 fw-medium">{error.message}</span>
        {/if}
    </div>
</form>