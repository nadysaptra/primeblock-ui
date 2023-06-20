<template>
    <div>
        <div class="block-category-title">Dividers</div>
        <BlockViewer header="Left Aligned" :code="block1" containerClass="surface-0 px-4 py-5 md:px-6 lg:px-8">
            <div class="flex w-full relative align-items-center justify-content-start my-3 px-4">
                <div class="border-top-1 border-300 top-50 left-0 absolute w-full"></div>
                <div class="px-2 z-1 surface-0 flex align-items-center">
                    <i class="pi pi-search text-900 mr-2"></i>
                    <span class="text-900 font-medium">Title Placeholder</span>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Centered" :code="block2" containerClass="surface-0 px-4 py-5 md:px-6 lg:px-8">
            <div class="flex w-full relative align-items-center justify-content-center my-3 px-4">
                <div class="border-top-1 border-300 top-50 left-0 absolute w-full"></div>
                <div class="px-2 z-1 surface-0 flex align-items-center">
                    <i class="pi pi-search text-900 mr-2"></i>
                    <span class="text-900 font-medium">Title Placeholder</span>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Right Aligned" :code="block3" containerClass="surface-0 px-4 py-5 md:px-6 lg:px-8">
            <div class="flex w-full relative align-items-center justify-content-end my-3 px-4">
                <div class="border-top-1 border-300 top-50 left-0 absolute w-full"></div>
                <div class="px-2 z-1 surface-0 flex align-items-center">
                    <i class="pi pi-search text-900 mr-2"></i>
                    <span class="text-900 font-medium">Title Placeholder</span>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="With Button" :code="block4" containerClass="surface-0 px-4 py-5 md:px-6 lg:px-8">
            <div class="flex w-full relative align-items-center justify-content-between my-3 px-4">
                <div class="border-top-1 border-300 top-50 left-0 absolute w-full"></div>
                <div class="px-2 z-1 surface-0 flex align-items-center">
                    <i class="pi pi-list text-900 mr-2"></i>
                    <span class="text-900 font-medium">Results</span>
                </div>
                <Button label="Search" icon="pi pi-search" class="p-button-rounded"></Button>
            </div>
        </BlockViewer>

        <BlockViewer header="Vertical Button" :code="block5" containerClass="surface-0 px-4 py-5 md:px-6 lg:px-8">
            <div class="flex">
                <div class="w-5 py-8 text-center flex align-items-center justify-content-center">
                    <Button label="Login" icon="pi pi-user" class="p-button-rounded p-button-outlined"></Button>
                </div>
                <div class="w-2">
                    <div class="flex relative align-items-center justify-content-center mx-3 py-3 min-h-full">
                        <div class="border-left-1 border-300 top-0 left-50 absolute h-full"></div>
                        <div class="py-2 z-1 surface-0">
                            <span class="text-900 font-medium">OR</span>
                        </div>
                    </div>
                </div>
                <div class="w-5 py-8 flex align-items-center justify-content-center">
                    <Button label="Sign Up" icon="pi pi-user-add" class="p-button-rounded p-button-success"></Button>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Toolbar" :code="block6" containerClass="surface-section px-4 py-5 md:px-6 lg:px-8">
            <div class="flex my-3 px-4 justify-content-center relative">
                <div class="border-top-1 surface-border absolute top-50 w-full"></div>
                <span class="p-buttonset z-1">
                    <Button class="appearance-none border-1 border-round-left surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
                        <i class="pi pi-star text-600"></i>
                    </Button>
                    <Button class="appearance-none border-1 border-left-none surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
                        <i class="pi pi-lock text-600"></i>
                    </Button>
                    <Button class="appearance-none border-1 border-left-none surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
                        <i class="pi pi-pencil text-600"></i>
                    </Button>
                    <Button class="appearance-none border-1 border-left-none border-round-right surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
                        <i class="pi pi-trash text-600"></i>
                    </Button>
                </span>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'Divider',
    data() {
        return {
            block1: `
<div class="flex w-full relative align-items-center justify-content-start my-3 px-4">
    <div class="border-top-1 border-300 top-50 left-0 absolute w-full"></div>
    <div class="px-2 z-1 surface-0 flex align-items-center">
        <i class="pi pi-search text-900 mr-2"></i>
        <span class="text-900 font-medium">Title Placeholder</span>
    </div>
</div>`,
            block2: `
<div class="flex w-full relative align-items-center justify-content-center my-3 px-4">
    <div class="border-top-1 border-300 top-50 left-0 absolute w-full"></div>
    <div class="px-2 z-1 surface-0 flex align-items-center">
        <i class="pi pi-search text-900 mr-2"></i>
        <span class="text-900 font-medium">Title Placeholder</span>
    </div>
</div>`,
            block3: `
<div class="flex w-full relative align-items-center justify-content-end my-3 px-4">
    <div class="border-top-1 border-300 top-50 left-0 absolute w-full"></div>
    <div class="px-2 z-1 surface-0 flex align-items-center">
        <i class="pi pi-search text-900 mr-2"></i>
        <span class="text-900 font-medium">Title Placeholder</span>
    </div>
</div>`,
            block4: `
<div class="flex w-full relative align-items-center justify-content-between my-3 px-4">
    <div class="border-top-1 border-300 top-50 left-0 absolute w-full"></div>
    <div class="px-2 z-1 surface-0 flex align-items-center">
        <i class="pi pi-list text-900 mr-2"></i>
        <span class="text-900 font-medium">Results</span>
    </div>
    <Button label="Search" icon="pi pi-search" class="p-button-rounded"></Button>
</div>`,
            block5: `
<div class="flex">
    <div class="w-5 py-8 text-center flex align-items-center justify-content-center">
        <Button label="Login" icon="pi pi-user" class="p-button-rounded p-button-outlined"></Button>
    </div>
    <div class="w-2">
        <div class="flex relative align-items-center justify-content-center mx-3 py-3 min-h-full">
            <div class="border-left-1 border-300 top-0 left-50 absolute h-full"></div>
            <div class="py-2 z-1 surface-0">
                <span class="text-900 font-medium">OR</span>
            </div>
        </div>
    </div>
    <div class="w-5 py-8 flex align-items-center justify-content-center">
        <Button label="Sign Up" icon="pi pi-user-add" class="p-button-rounded p-button-success"></Button>
    </div>
</div>`,
            block6: `
<div class="flex my-3 px-4 justify-content-center relative">
    <div class="border-top-1 surface-border absolute top-50 w-full"></div>
    <span class="p-buttonset z-1">
        <Button class="appearance-none border-1 border-round-left surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
            <i class="pi pi-star text-600"></i>
        </Button>
        <Button class="appearance-none border-1 border-left-none surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
            <i class="pi pi-lock text-600"></i>
        </Button>
        <Button class="appearance-none border-1 border-left-none surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
            <i class="pi pi-pencil text-600"></i>
        </Button>
        <Button class="appearance-none border-1 border-left-none border-round-right surface-border p-2 surface-0 hover:surface-200 active:surface-300 cursor-pointer">
            <i class="pi pi-trash text-600"></i>
        </Button>
    </span>
</div>`
        }
    }
}
</script>