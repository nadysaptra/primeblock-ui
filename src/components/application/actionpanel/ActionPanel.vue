<template>
    <div>
        <div class="block-category-title">Action Panel</div>
        <BlockViewer header="Simple" :code="block1" containerClass="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center">
            <div class="surface-card border-round shadow-2 p-4">
                <div class="text-900 font-medium mb-3 text-xl">Title Placeholder</div>
                <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                <Button label="Save Changes"></Button>
            </div>
        </BlockViewer>

        <BlockViewer header="Simple" :code="block1" containerClass="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center">
            <div class="surface-card border-round shadow-2 p-4">
                <div class="text-900 font-medium mb-3 text-xl">Title Placeholder</div>
                <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                <Button label="Save Changes"></Button>
            </div>
        </BlockViewer>

        <BlockViewer header="With Button at Top Right" :code="block2" containerClass="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center">
            <div class="surface-card border-round shadow-2 p-4 flex flex-column lg:flex-row align-items-start">
                <div>
                    <div class="text-900 font-medium mb-3 text-xl">Title Placeholder</div>
                    <p class="mt-0 mb-4 lg:mb-0 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                </div>
                <Button label="Save" icon="pi pi-check" class="ml-0 lg:ml-5"></Button>
            </div>
        </BlockViewer>

        <BlockViewer header="Info and Button" :code="block3" containerClass="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center">
            <div class="surface-card border-round shadow-2 p-4">
                <div class="text-900 font-medium mb-3 text-xl">Title Placeholder</div>
                <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                <div class="flex mb-4 flex-column lg:flex-row">
                    <div class="surface-50 p-3 flex-auto">
                        <div class="text-600 mb-3">Guests</div>
                        <span class="text-blue-600 font-medium text-xl">4</span>
                    </div>
                    <div class="surface-50 p-3 flex-auto mx-0 my-3 lg:my-0 lg:mx-3">
                        <div class="text-600 mb-3">Date</div>
                        <span class="text-blue-600 font-medium text-xl">24/05/2021</span>
                    </div>
                    <div class="surface-50 p-3 flex-auto">
                        <div class="text-600 mb-3">Time</div>
                        <span class="text-blue-600 font-medium text-xl">14:30</span>
                    </div>
                </div>
                <Button label="Save Changes"></Button>
            </div>
        </BlockViewer>

        <BlockViewer header="With Input" :code="block4" containerClass="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center">
            <div class="surface-card border-round shadow-2 p-4">
                <div class="text-900 font-medium mb-3 text-xl">Change Phone</div>
                <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec.</p>
                <div class="flex">
                    <InputText class="flex-auto mr-3" />
                    <Button label="Update"></Button>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="With Illustration" :code="block5" containerClass="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center">
            <div class="surface-card border-round shadow-2 p-4 text-center">
                <img src="images/blocks/illustration/subscribe.svg" alt="Image" class="mx-auto block mb-4">
                <div class="text-900 font-medium mb-3 text-xl">Title Placeholder</div>
                <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                <Button label="Learn More" icon="pi pi-arrow-right" class="p-button-rounded" iconPos="right"></Button>
            </div>
        </BlockViewer>

        <BlockViewer header="Inline Illustration" :code="block6" containerClass="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center">
            <div class="surface-card border-round flex shadow-2">
                <div class="bg-blue-50 flex align-items-center justify-content-center py-3 px-5">
                    <img src="images/blocks/illustration/live-collaboration.svg" alt="Image" class="mx-auto block mb-4 w-full">
                </div>
                <div class="py-3 px-5 flex flex-column align-items-start">
                    <div class="text-900 font-medium mb-3 text-xl">Title Placeholder</div>
                    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec.</p>
                    <Button label="Proceed" class="mt-auto"></Button>
                </div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'ActionPanel',
    data() {
        return {
            block1: `
<div class="surface-card border-round shadow-2 p-4">
    <div class="text-900 font-medium mb-3 text-xl">Title Placeholder</div>
    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
    <Button label="Save Changes"></Button>
</div>`,
            block2: `
<div class="surface-card border-round shadow-2 p-4">
    <div class="text-900 font-medium mb-3 text-xl">Title Placeholder</div>
    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
    <Button label="Save Changes"></Button>
</div>`,
            block3: `
<div class="surface-card border-round shadow-2 p-4">
    <div class="text-900 font-medium mb-3 text-xl">Title Placeholder</div>
    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
    <div class="flex mb-4 flex-column lg:flex-row">
        <div class="surface-50 p-3 flex-auto">
            <div class="text-600 mb-3">Guests</div>
            <span class="text-blue-600 font-medium text-xl">4</span>
        </div>
        <div class="surface-50 p-3 flex-auto mx-0 my-3 lg:my-0 lg:mx-3">
            <div class="text-600 mb-3">Date</div>
            <span class="text-blue-600 font-medium text-xl">24/05/2021</span>
        </div>
        <div class="surface-50 p-3 flex-auto">
            <div class="text-600 mb-3">Time</div>
            <span class="text-blue-600 font-medium text-xl">14:30</span>
        </div>
    </div>
    <Button label="Save Changes"></Button>
</div>`,
            block4: `
<div class="surface-card border-round shadow-2 p-4">
    <div class="text-900 font-medium mb-3 text-xl">Change Phone</div>
    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec.</p>
    <div class="flex">
        <InputText class="flex-auto mr-3" />
        <Button label="Update"></Button>
    </div>
</div>`,
            block5: `
<div class="surface-card border-round shadow-2 p-4 text-center">
    <img src="images/blocks/illustration/subscribe.svg" alt="Image" class="mx-auto block mb-4">
    <div class="text-900 font-medium mb-3 text-xl">Title Placeholder</div>
    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
    <Button label="Learn More" icon="pi pi-arrow-right" class="p-button-rounded" iconPos="right"></Button>
</div>`,
            block6: `
<div class="surface-card border-round flex shadow-2">
    <div class="bg-blue-50 flex align-items-center justify-content-center py-3 px-5">
        <img src="images/blocks/illustration/live-collaboration.svg" alt="Image" class="mx-auto block mb-4 w-full">
    </div>
    <div class="py-3 px-5 flex flex-column align-items-start">
        <div class="text-900 font-medium mb-3 text-xl">Title Placeholder</div>
        <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec.</p>
        <Button label="Proceed" class="mt-auto"></Button>
    </div>
</div>`
        }
    }
}
</script>