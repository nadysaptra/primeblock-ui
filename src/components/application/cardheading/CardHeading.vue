<template>
    <div>
        <div class="block-category-title">Card Heading</div>
        <BlockViewer header="Title with Subtitle" :code="block1" containerClass="px-4 py-8 md:px-6 lg:px-8" :free="true">
            <div class="surface-card p-4 shadow-2 border-round">
                <div class="text-3xl font-medium text-900 mb-3">Card Title</div>
                <div class="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
                <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
            </div>
        </BlockViewer>

        <BlockViewer header="With Dropdown" :code="block2" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card p-4 shadow-2 border-round">
                <div class="mb-3 flex align-items-center justify-content-between">
                    <div class="flex align-items-center">
                        <span class="text-xl font-medium text-900">Card Title</span>
                    </div>
                    <div>
                        <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu.toggle($event)"></Button>
                        <Menu ref="menu" :popup="true" :model="items"></Menu>
                    </div>
                </div>
                <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
            </div>
        </BlockViewer>

        <BlockViewer header="Dropdown, Icon and Subtitle" :code="block3" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card p-4 shadow-2 border-round">
                <div class="mb-2 flex align-items-center justify-content-between">
                    <div class="flex align-items-center">
                        <i class="pi pi-map-marker text-500 mr-2 text-xl"></i>
                        <span class="text-xl font-medium text-900">Card Title</span>
                    </div>
                    <div>
                        <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu.toggle($event)"></Button>
                        <Menu ref="menu" :popup="true" :model="items"></Menu>
                    </div>
                </div>
                <div class="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
                <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
            </div>
        </BlockViewer>

        <BlockViewer header="Image and Buttons" :code="block4" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card p-4 shadow-2 border-round">
                <div class="mb-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
                    <div class="flex align-items-start">
                        <img src="images/blocks/logos/hyper.svg" alt="Image" height="40" class="mr-3">
                        <div>
                            <div class="text-xl font-medium text-900 mb-2">Card Title</div>
                            <div class="font-medium text-500 mb-3 text-sm">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
                        </div>
                    </div>
                    <div class="flex">
                        <Button icon="pi pi-heart" class="p-button-rounded mr-2 p-button-outlined"></Button>
                        <Button icon="pi pi-share-alt" class="p-button-rounded p-button-outlined"></Button>
                    </div>
                </div>
                
                <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
            </div>
        </BlockViewer>

        <BlockViewer header="With Action" :code="block5" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card p-4 shadow-2 border-round">
                <div class="mb-3 flex align-items-center justify-content-between">
                    <span class="text-xl font-medium text-900">Title</span>
                    <Button label="New" icon="pi pi-plus"></Button>
                </div>
                <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
            </div>
        </BlockViewer>

        <BlockViewer header="With Avatars" :code="block6" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card p-4 shadow-2 border-round">
                <div class="mb-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
                    <span class="text-xl font-medium text-900">Title</span>
                    <div class="flex align-items-center justify-content-between mt-3 md:mt-0">
                        <div class="mr-3 flex align-items-center">
                            <AvatarGroup class="mr-1">
                                <Avatar image="images/blocks/avatars/circle/avatar-f-1.png" shape="circle"></Avatar>
                                <Avatar image="images/blocks/avatars/circle/avatar-f-2.png" shape="circle"></Avatar>
                                <Avatar image="images/blocks/avatars/circle/avatar-m-1.png" shape="circle"></Avatar>
                                <Avatar image="images/blocks/avatars/circle/avatar-m-2.png" shape="circle"></Avatar>
                                <Avatar image="images/blocks/avatars/circle/avatar-f-3.png" shape="circle"></Avatar>
                            </AvatarGroup>
                            <span class="text-600">+2</span>
                        </div>
                        <Button label="View All" icon="pi pi-search" class="p-button-outlined"></Button>
                    </div>
                </div>
                <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
            </div>
        </BlockViewer>

        <BlockViewer header="With Subtitle and Action" :code="block7" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card p-4 shadow-2 border-round">
                <div class="mb-3 flex flex-column align-items-start md:flex-row md:align-items-center md:justify-content-between">
                    <div class="mb-3 md:mb-0">
                        <div class="text-3xl font-medium text-900 mb-3">Card Title</div>
                        <div class="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
                    </div>
                    <Button label="New" icon="pi pi-plus"></Button>
                </div>
                <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'CardHeading',
    data() {
        return {
            block1: `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="text-3xl font-medium text-900 mb-3">Card Title</div>
    <div class="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`,
            block2: `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="mb-3 flex align-items-center justify-content-between">
        <div class="flex align-items-center">
            <span class="text-xl font-medium text-900">Card Title</span>
        </div>
        <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu.toggle($event)"></Button>
            <Menu ref="menu" :popup="true" :model="items"></Menu>
        </div>
    </div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`,
            block3: `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="mb-2 flex align-items-center justify-content-between">
        <div class="flex align-items-center">
            <i class="pi pi-map-marker text-500 mr-2 text-xl"></i>
            <span class="text-xl font-medium text-900">Card Title</span>
        </div>
        <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu.toggle($event)"></Button>
            <Menu ref="menu" :popup="true" :model="items"></Menu>
        </div>
    </div>
    <div class="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`,
            block4: `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="mb-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
        <div class="flex align-items-start">
            <img src="images/blocks/logos/hyper.svg" alt="Image" height="40" class="mr-3">
            <div>
                <div class="text-xl font-medium text-900 mb-2">Card Title</div>
                <div class="font-medium text-500 mb-3 text-sm">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
            </div>
        </div>
        <div class="flex">
            <Button icon="pi pi-heart" class="p-button-rounded mr-2 p-button-outlined"></Button>
            <Button icon="pi pi-share-alt" class="p-button-rounded p-button-outlined"></Button>
        </div>
    </div>
    
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`,
            block5: `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="mb-3 flex align-items-center justify-content-between">
        <span class="text-xl font-medium text-900">Title</span>
        <Button label="New" icon="pi pi-plus"></Button>
    </div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`,
            block6: `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="mb-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
        <span class="text-xl font-medium text-900">Title</span>
        <div class="flex align-items-center justify-content-between mt-3 md:mt-0">
            <div class="mr-3 flex align-items-center">
                <AvatarGroup class="mr-1">
                    <Avatar image="images/blocks/avatars/circle/avatar-f-1.png" shape="circle"></Avatar>
                    <Avatar image="images/blocks/avatars/circle/avatar-f-2.png" shape="circle"></Avatar>
                    <Avatar image="images/blocks/avatars/circle/avatar-m-1.png" shape="circle"></Avatar>
                    <Avatar image="images/blocks/avatars/circle/avatar-m-2.png" shape="circle"></Avatar>
                    <Avatar image="images/blocks/avatars/circle/avatar-f-3.png" shape="circle"></Avatar>
                </AvatarGroup>
                <span class="text-600">+2</span>
            </div>
            <Button label="View All" icon="pi pi-search" class="p-button-outlined"></Button>
        </div>
    </div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`,
            block7: `
<div class="surface-card p-4 shadow-2 border-round">
    <div class="mb-3 flex flex-column align-items-start md:flex-row md:align-items-center md:justify-content-between">
        <div class="mb-3 md:mb-0">
            <div class="text-3xl font-medium text-900 mb-3">Card Title</div>
            <div class="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
        </div>
        <Button label="New" icon="pi pi-plus"></Button>
    </div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`,
            items: [
                {
                    label: 'Options',
                    items: [
                        {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
                        {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
                    ]
                }
            ]
        }
    }
}
</script>