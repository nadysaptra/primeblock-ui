<template>
    <div>
        <div class="block-category-title">Containers</div>
        <BlockViewer header="Uniform Padding" :code="block1">
            <div class="p-4">
                <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
            </div>
        </BlockViewer>

        <BlockViewer header="Responsive X Axis" :code="block2">
            <div class="px-4 py-8 md:px-6 lg:px-8">
                <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
            </div>
        </BlockViewer>

        <BlockViewer header="Responsive Both Axes" :code="block3">
            <div class="p-4 md:p-6 lg:p-8">
                <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
            </div>
        </BlockViewer>

        <BlockViewer header="No Padding" :code="block4">
            <div class="p-0">
                <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
            </div>
        </BlockViewer>

        <BlockViewer header="Uniform Padding - Full Width on Mobile" :code="block5">
            <div class="px-0 py-4 md:px-4">
                <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'Container',
    data() {
        return {
            block1: `
<div class="p-4">
    <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
</div>`,
            block2: `
<div class="px-4 py-8 md:px-6 lg:px-8">
    <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
</div>`,
            block3: `
<div class="p-4 md:p-6 lg:p-8">
    <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
</div>`,
            block4: `
<div class="p-0">
    <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
</div>`,
            block5: `
<div class="px-0 py-4 md:px-4">
    <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem"></div>
</div>`
        }
    }
}
</script>