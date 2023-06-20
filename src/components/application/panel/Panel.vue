<template>
    <div>
        <div class="block-category-title">Panel</div>
        <BlockViewer header="Basic Card" :code="block1" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card p-4 shadow-2 border-round">
                <div class="border-2 border-dashed surface-border border-round" style="min-height: 20rem"></div>
            </div>
        </BlockViewer>

        <BlockViewer header="Card with Header" :code="block2" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card p-4 shadow-2 border-round">
                <div class="border-2 border-dashed surface-border border-round mb-3 p-4"></div>
                <div class="border-2 border-dashed surface-border border-round p-4" style="min-height: 20rem"></div>
            </div>
        </BlockViewer>

        <BlockViewer header="Card with Footer" :code="block3" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card p-4 shadow-2 border-round">
                <div class="border-2 border-dashed surface-border border-round p-4" style="min-height: 20rem"></div>
                <div class="border-2 border-dashed surface-border border-round mt-3 p-4"></div>
            </div>
        </BlockViewer>

        <BlockViewer header="Card with Header and Footer" :code="block4" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card p-4 shadow-2 border-round">
                <div class="border-2 border-dashed surface-border border-round mb-3 p-4"></div>
                <div class="border-2 border-dashed surface-border border-round p-4" style="min-height: 20rem"></div>
                <div class="border-2 border-dashed surface-border border-round mt-3 p-4"></div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'Panel',
    data() {
        return {
            block1: `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="border-2 border-dashed surface-border border-round" style="min-height: 20rem"></div>
</div>`,
            block2: `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="border-2 border-dashed surface-border border-round mb-3 p-4"></div>
    <div class="border-2 border-dashed surface-border border-round p-4" style="min-height: 20rem"></div>
</div>`,
            block3: `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="border-2 border-dashed surface-border border-round p-4" style="min-height: 20rem"></div>
    <div class="border-2 border-dashed surface-border border-round mt-3 p-4"></div>
</div>`,
        block4: `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="border-2 border-dashed surface-border border-round mb-3 p-4"></div>
    <div class="border-2 border-dashed surface-border border-round p-4" style="min-height: 20rem"></div>
    <div class="border-2 border-dashed surface-border border-round mt-3 p-4"></div>
</div>`
        }
    }
}
</script>