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

        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        const [data, err] = await authStore.login(username, password);
        
        error = err ?? undefined;
        
        if (data) {
            useAuthStore.session = data;

            if(onlogin) {
                onlogin(data);
            }
        }
    }

    let error = $state<{ _errors: string[], username?: { _errors: string[] }, password?: { _errors: string[] } }>();
</script>
<form method="post" onsubmit={onSubmit}>
    <div class="mb-3">
        <input type="text" class="form-control" placeholder="Username or email" name="username" />
        {#if error?.username}
            <span class="d-block text-danger mt-1 fw-medium">{error.username._errors}</span>
        {/if}
    </div>
    <div class="mb-3">
        <input type="password" class="form-control" placeholder="********" name="password" />
        {#if error?.password}
            <span class="d-block text-danger mt-1 fw-medium">{error.password._errors}</span>
        {/if}
    </div>
    <div class="d-flex flex-column gap-2 align-items-center">
        <button class="btn btn-primary w-100">Submit</button>
        {#if error?._errors}
            <span class="text-danger mt-1 fw-medium">{error._errors}</span>
        {/if}
    </div>
</form>