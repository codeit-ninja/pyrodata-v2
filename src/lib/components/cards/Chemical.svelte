<script lang="ts">
    import { Prisma } from "@prisma/client";
    import Image from "../Image.svelte";

    type Props = {
        chemical: Prisma.ChemicalGetPayload<{ include: { hazards: true, page: { include: { featuredImage: true } } } }>;
    }

    let { chemical }: Props = $props();
</script>
<a class="card card--chemical" href={`/chemicals/${chemical.page.slug}`}>
    <div class="card-body">
        { chemical.name }
    </div>
</a>