<template>
    <div>
        <div class="block-category-title">Page Heading</div>
        <BlockViewer header="Icon And Actions" :code="block1">
            <div class="surface-section px-4 py-5 md:px-6 lg:px-8">
                <div class="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
                    <div class="flex align-items-center">
                        <i class="pi pi-inbox text-2xl mr-3 text-500"></i>
                        <span class="text-3xl font-medium text-900">Messages</span>
                    </div>
                    <div class="mt-3 md:mt-0">
                        <Button label="Settings" class="p-button-outlined mr-3" icon="pi pi-cog"></Button>
                        <Button label="Compose" icon="pi pi-plus"></Button>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Subtitle and Search" :code="block2">
            <div class="surface-section px-4 py-5 md:px-6 lg:px-8">
                <div class="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
                    <div class="mb-3 lg:mb-0">
                        <div class="text-3xl font-medium text-900 mb-3">Messages</div>
                        <div class="text-500 mr-0 md:mr-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
                    </div>
                    <span class="p-input-icon-left w-full md:w-auto">
                        <i class="pi pi-search"></i>
                        <InputText type="text" placeholder="Search" class="w-full md:w-auto"/>
                    </span>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="With Tabs" :code="block3">
            <div class="surface-section px-4 py-5 md:px-6 lg:px-8">
                <div class="text-3xl font-medium text-900 mb-4">Application</div>
                <TabMenu :model="items"></TabMenu>
            </div>
        </BlockViewer>

        <BlockViewer header="Inline Tabs" :code="block4">
            <div class="surface-section px-4 py-5 md:px-6 lg:px-8">
                <div class="flex lg:align-items-center flex-column lg:flex-row">
                    <div class="text-3xl font-medium text-900 mr-0 lg:mr-4 mb-4 lg:mb-0">Application</div>
                    <TabMenu :model="items" class="flex-grow-1"></TabMenu>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Simple" :code="block5">
            <div class="surface-section px-4 py-5 md:px-6 lg:px-8">
                <div class="border-bottom-1 surface-border">
                    <span class="block text-3xl font-medium text-900 mb-4">Messages</span>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="With Label" :code="block6">
            <div class="surface-section px-4 py-5 md:px-6 lg:px-8">
                <div class="border-bottom-1 surface-border">
                    <div class="text-3xl font-medium text-900 mb-4 flex align-items-center">Messages <span class="text-base font-normal ml-3 text-600">79 Unread</span></div>
                </div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'SectionHeading',
    data() {
        return {
            block1: `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
        <div class="flex align-items-center">
            <i class="pi pi-inbox text-2xl mr-3 text-500"></i>
            <span class="text-3xl font-medium text-900">Messages</span>
        </div>
        <div class="mt-3 md:mt-0">
            <Button label="Settings" class="p-button-outlined mr-3" icon="pi pi-cog"></Button>
            <Button label="Compose" icon="pi pi-plus"></Button>
        </div>
    </div>
</div>`,
            block2: `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
        <div class="mb-3 lg:mb-0">
            <div class="text-3xl font-medium text-900 mb-3">Messages</div>
            <div class="text-500 mr-0 md:mr-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
        </div>
        <span class="p-input-icon-left w-full md:w-auto">
            <i class="pi pi-search"></i>
            <InputText type="text" placeholder="Search" class="w-full md:w-auto"/>
        </span>
    </div>
</div>`,
            block3: `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="text-3xl font-medium text-900 mb-4">Application</div>
    <TabMenu :model="items"></TabMenu>
</div>`,
            block4: `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="flex lg:align-items-center flex-column lg:flex-row">
        <div class="text-3xl font-medium text-900 mr-0 lg:mr-4 mb-4 lg:mb-0">Application</div>
        <TabMenu :model="items" class="flex-grow-1"></TabMenu>
    </div>
</div>`,
            block5: `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="border-bottom-1 surface-border">
        <span class="block text-3xl font-medium text-900 mb-4">Messages</span>
    </div>
</div>`,
            block6: `
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div class="border-bottom-1 surface-border">
        <div class="text-3xl font-medium text-900 mb-4 flex align-items-center">Messages <span class="text-base font-normal ml-3 text-600">79 Unread</span></div>
    </div>
</div>`,
            items: [
                {label: 'Overview', icon: 'pi pi-home'},
                {label: 'Members', icon: 'pi pi-users'},
                {label: 'Sales', icon: 'pi pi-shopping-cart'},
                {label: 'Profile', icon: 'pi pi-user'},
                {label: 'Settings', icon: 'pi pi-cog'}
            ]
        }
    }
}
</script>