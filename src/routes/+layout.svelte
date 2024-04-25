<script lang="ts">
    import 'material-symbols';
    import '/src/scss/bootstrap.scss';
    import '/src/scss/index.scss';

    import HeaderProfileBar from '$lib/components/site/HeaderProfileSection.svelte';
    import HeaderSearchSection from '$lib/components/site/HeaderSearchSection.svelte';
    import SiteNavBar from '$lib/components/site/SiteNavBar.svelte';
    import { useAuthStore } from '$lib/stores/auth.svelte.js';
    import { onMount } from 'svelte';

    const { children, data } = $props();

    useAuthStore.session = data.session;

    onMount( async () => {
        const { Tooltip, Dropdown } = await import('bootstrap');

        const dropdownElementList = document.querySelectorAll('.dropdown-toggle, .dropdown-open');
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        
        [...tooltipTriggerList].forEach(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
        [...dropdownElementList].forEach(dropdownToggleEl => new Dropdown(dropdownToggleEl));
    })
</script>
<div class="site min-vh-100 d-flex flex-column">
    <div class="site--header">
        <div class="container-xxl">
            <div class="row align-items-center">
                <div class="col-4">
                    <span class="site--logo fw-bold fs-1">DUNNO YET</span>
                </div>
                <div class="col-4">
                    <HeaderSearchSection />
                </div>
                <div class="col-4">
                    <HeaderProfileBar />
                </div>
            </div>
        </div>
    </div>
    <div class="site--body flex-grow-1 d-flex">
        <div class="container-xxl d-flex flex-grow-1">
            <div class="site--sidebar w-25">
                <SiteNavBar />
            </div>
            <main class="site--content flex-grow-1">
                {@render children()}
            </main>
        </div>
    </div>
</div>