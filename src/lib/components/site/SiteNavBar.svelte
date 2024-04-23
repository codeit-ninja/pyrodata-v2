<script lang="ts">
    import { page } from '$app/stores';
</script>
<section>
    <h6>General</h6>
    <nav class="nav flex-column gap-2">
        <a 
            class="nav-link"
            class:active={$page.route.id === '/chemicals'}
            aria-current="page"
            href="/chemicals">Chemicals</a>
        <a 
            class="nav-link"
            class:active={$page.route.id === '/test'}
            aria-current="page"
            href="/test">Questions</a>
    </nav>
</section>
<section class="mt-7">
    <h6>Pyrotechnics</h6>
    <nav class="nav flex-column gap-2">
        <a 
            class="nav-link"
            class:active={$page.route.id === '/compositions'}
            aria-current="page"
            href="/compositions">Compositions</a>
        <a 
            class="nav-link"
            class:active={$page.route.id === '/test'}
            aria-current="page"
            href="/test">Definitions</a>
    </nav>
</section>