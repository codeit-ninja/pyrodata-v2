<script lang="ts">
    import Image from '$lib/components/Image.svelte';
    import TipTap from '$lib/components/editor/TipTap.svelte';

    const { data } = $props();

    console.log(data);
</script>
<div class="page">
    <div class="page--title">
        <h1>{ data.chemical.name }</h1>
        <div class="page--meta">
            <div class="d-flex gap-4">
                <div class="d-flex gap-2">
                    <span class="material-symbols-outlined">
                        calendar_month
                    </span>
                    <span>Created at { new Date(data.chemical.page.createdAt).toDateString() }</span>
                </div>
                <div class="d-flex gap-2">
                    <span class="material-symbols-outlined">
                        person
                    </span>
                    <span>Red</span>
                </div>
            </div>
        </div>
    </div>
    <div class="page--content">
        <article>
            {@html data.chemical.page.content.html}
        </article>
        <aside>
            <div class="widget">
                <Image image={data.chemical.page.featuredImageId} />
            </div>
            <div class="widget">
                <table>
                    <tbody>
                        <tr>
                            <td>Formula</td>
                            <td>{ data.chemical.formula }</td>
                        </tr>
                        <tr>
                            <td>Molmassa</td>
                            <td>58,08 g/mol</td>
                        </tr>
                        <tr>
                            <td>CAS-nummer</td>
                            <td>67-64-1</td>
                        </tr>
                        <tr>
                            <td>Smeltpunt</td>
                            <td>-94,8[3] °C</td>
                        </tr>
                        <tr>
                            <td>Kookpunt</td>
                            <td>56 °C</td>
                        </tr>
                        <tr>
                            <td>Vlampunt</td>
                            <td>-20 °C</td>
                        </tr>
                        <tr>
                            <td>Dampdruk</td>
                            <td>2,28 × 104[2] Pa</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="widget">
                <h4>Demo</h4>
                <p>Just a demo paragraph, a WYSIWYG editor example</p>
            </div>
        </aside>
    </div>
</div>