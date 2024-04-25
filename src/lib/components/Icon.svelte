<script lang="ts">
    import type { MaterialSymbol } from 'material-symbols';

    const { icon, size = 'md' }: { 
        icon: MaterialSymbol;
        size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    } = $props();
</script>
<span 
    class="material-symbols-outlined"
    class:fs-1={size === 'xxl'}
    class:fs-2={size === 'xl'}
    class:fs-3={size === 'lg'}
    class:fs-4={size === 'md'}
    class:fs-5={size === 'sm'}
    class:fs-6={size === 'xs'}
>
    {icon}
</span>