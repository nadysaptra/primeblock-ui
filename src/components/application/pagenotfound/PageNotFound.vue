<template>
    <div>
        <div class="block-category-title">404 Pages</div>
        <BlockViewer header="Centered" :code="block1">
            <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
                <div style="background: radial-gradient(50% 109137.91% at 50% 50%, rgba(233, 30, 99, 0.1) 0%, rgba(254, 244, 247, 0) 100%)" class="text-center">
                    <span class="bg-white text-pink-500 font-bold text-2xl inline-block px-3">404</span>
                </div>
                <div class="mt-6 mb-5 font-bold text-6xl text-900 text-center">Page Not Found</div>
                <p class="text-700 text-3xl mt-0 mb-6 text-center">Sorry, we couldn't find the page.</p>
                <div class="text-center">
                    <Button class="p-button-text mr-2" label="Go Back" icon="pi pi-arrow-left"></Button>
                    <Button label="Go to Dashboard" icon="pi pi-home"></Button>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Split with Image" :code="block2">
            <div class="flex surface-section">
                <div class="w-12 sm:w-6 px-4 py-8 md:px-6 lg:px-8">
                    <div class="border-left-2 border-pink-500">
                        <span class="bg-white text-pink-500 font-bold text-2xl inline-block px-3">404</span>
                    </div>
                    <div class="mt-6 mb-5 font-bold text-6xl text-900">Page Not Found</div>
                    <p class="text-700 text-3xl mt-0 mb-6">Sorry, we couldn't find the page.</p>
                    <div>
                        <Button class="p-button-text mr-2" label="Go Back" icon="pi pi-arrow-left"></Button>
                        <Button label="Go to Dashboard" icon="pi pi-home"></Button>
                    </div>
                </div>
                <div class="w-6 hidden sm:block" style="background: url('images/blocks/feedback/404.png') no-repeat; background-size: cover"></div>
            </div>
        </BlockViewer>

        <BlockViewer header="Card" :code="block3">
            <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
                <div class="shadow-2 border-round surface-card px-4 md:px-6 py-6">
                    <div class="border-left-2 border-pink-500">
                        <span class="bg-white text-pink-500 font-bold text-2xl inline-block px-3">404</span>
                    </div>
                    <div class="mt-6 mb-5 font-bold text-6xl text-900">Page Not Found</div>
                    <p class="text-700 text-3xl mt-0 mb-6">Sorry, we couldn't find the page.</p>

                    <ul class="list-none px-0 pb-0 pt-4 m-0 border-top-1 surface-border">
                        <li class="py-2">
                            <a class="cursor-pointer flex align-items-center border-round border-1 border-transparent hover:border-300 p-3 transition-colors transition-duration-150">
                                <span class="inline-flex align-items-center justify-content-center bg-indigo-500 border-round flex-shrink-0" style="height: 52px; width: 52px">
                                    <i class="pi pi-envelope text-white text-3xl"></i>
                                </span>
                                <div class="ml-3">
                                    <span class="text-900 font-medium text-2xl mb-3">Messages</span>
                                    <p class="text-600 m-0 line-height-3">Sed egestas egestas fringilla</p>
                                </div>
                                <i class="text-600 pi pi-chevron-right ml-auto"></i>
                            </a>
                        </li>
                        <li class="py-2">
                            <a class="cursor-pointer flex align-items-center border-round border-1 border-transparent hover:border-300 p-3 transition-colors transition-duration-150">
                                <span class="inline-flex align-items-center justify-content-center bg-orange-500 border-round flex-shrink-0" style="height: 52px; width: 52px">
                                    <i class="pi pi-chart-bar text-white text-3xl"></i>
                                </span>
                                <div class="ml-3">
                                    <span class="text-900 font-medium text-2xl mb-3">Dashboard</span>
                                    <p class="text-600 m-0 line-height-3">Eu Ornare quam viverra orci sagittis odio</p>
                                </div>
                                <i class="text-600 pi pi-chevron-right ml-auto"></i>
                            </a>
                        </li>
                        <li class="pt-2">
                            <a class="cursor-pointer flex align-items-center border-round border-1 border-transparent hover:border-300 p-3 transition-colors transition-duration-150">
                                <span class="inline-flex align-items-center justify-content-center bg-cyan-500 border-round flex-shrink-0" style="height: 52px; width: 52px">
                                    <i class="pi pi-cog text-white text-3xl"></i>
                                </span>
                                <div class="ml-3">
                                    <span class="text-900 font-medium text-2xl mb-3">Settings</span>
                                    <p class="text-600 m-0 line-height-3">Tincidunt nunc pulvinar sapien et</p>
                                </div>
                                <i class="text-600 pi pi-chevron-right ml-auto"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Illustration" :code="block4" recent>
            <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
                <div class="flex flex-column lg:flex-row justify-content-center align-items-center gap-7">
                    <div class="text-center lg:text-right">
                        <div class="mt-6 mb-3 font-bold text-6xl text-900">Are you lost?</div>
                        <p class="text-700 text-3xl mt-0 mb-6">Sorry, we couldn't find the page.</p>
                        <Button type="button" label="Go back to home page" class="p-button-outlined"></Button>
                    </div>
                    <div>
                        <img src="images/blocks/feedback/404-rocket.png" alt="Image" class="w-full md:w-28rem" />
                    </div>
                </div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'PageNotFound',
    data() {
        return {
            block1: `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div style="background: radial-gradient(50% 109137.91% at 50% 50%, rgba(233, 30, 99, 0.1) 0%, rgba(254, 244, 247, 0) 100%);" class="text-center">
        <span class="bg-white text-pink-500 font-bold text-2xl inline-block px-3">404</span>
    </div>
    <div class="mt-6 mb-5 font-bold text-6xl text-900 text-center">Page Not Found</div>
    <p class="text-700 text-3xl mt-0 mb-6 text-center">Sorry, we couldn't find the page.</p>
    <div class="text-center">
        <Button class="p-button-text mr-2" label="Go Back" icon="pi pi-arrow-left"></Button>
        <Button label="Go to Dashboard" icon="pi pi-home"></Button>
    </div>
</div>`,
            block2: `
<div class="flex surface-section">
    <div class="w-12 sm:w-6 px-4 py-8 md:px-6 lg:px-8">
        <div class="border-left-2 border-pink-500">
            <span class="bg-white text-pink-500 font-bold text-2xl inline-block px-3">404</span>
        </div>
        <div class="mt-6 mb-5 font-bold text-6xl text-900">Page Not Found</div>
        <p class="text-700 text-3xl mt-0 mb-6">Sorry, we couldn't find the page.</p>
        <div>
            <Button class="p-button-text mr-2" label="Go Back" icon="pi pi-arrow-left"></Button>
            <Button label="Go to Dashboard" icon="pi pi-home"></Button>
        </div>
    </div>
    <div class="w-6 hidden sm:block" style="background: url('images/blocks/feedback/404.png') no-repeat; background-size: cover">
    </div>
</div>`,
            block3: `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="shadow-2 border-round surface-card px-4 md:px-6 py-6">
        <div class="border-left-2 border-pink-500">
            <span class="bg-white text-pink-500 font-bold text-2xl inline-block px-3">404</span>
        </div>
        <div class="mt-6 mb-5 font-bold text-6xl text-900">Page Not Found</div>
        <p class="text-700 text-3xl mt-0 mb-6">Sorry, we couldn't find the page.</p>

        <ul class="list-none px-0 pb-0 pt-4 m-0 border-top-1 surface-border">
            <li class="py-2">
                <a class="cursor-pointer flex align-items-center border-round border-1 border-transparent hover:border-300 p-3 transition-colors transition-duration-150">
                    <span class="inline-flex align-items-center justify-content-center bg-indigo-500 border-round flex-shrink-0" style="height:52px;width:52px;">
                        <i class="pi pi-envelope text-white text-3xl"></i>
                    </span>
                    <div class="ml-3">
                        <span class="text-900 font-medium text-2xl mb-3">Messages</span>
                        <p class="text-600 m-0 line-height-3">Sed egestas egestas fringilla</p>
                    </div>
                    <i class="text-600 pi pi-chevron-right ml-auto"></i>
                </a>
            </li>
            <li class="py-2">
                <a class="cursor-pointer flex align-items-center border-round border-1 border-transparent hover:border-300 p-3 transition-colors transition-duration-150">
                    <span class="inline-flex align-items-center justify-content-center bg-orange-500 border-round flex-shrink-0" style="height:52px;width:52px;">
                        <i class="pi pi-chart-bar text-white text-3xl"></i>
                    </span>
                    <div class="ml-3">
                        <span class="text-900 font-medium text-2xl mb-3">Dashboard</span>
                        <p class="text-600 m-0 line-height-3">Eu Ornare quam viverra orci sagittis odio</p>
                    </div>
                    <i class="text-600 pi pi-chevron-right ml-auto"></i>
                </a>
            </li>
            <li class="pt-2">
                <a class="cursor-pointer flex align-items-center border-round border-1 border-transparent hover:border-300 p-3 transition-colors transition-duration-150">
                    <span class="inline-flex align-items-center justify-content-center bg-cyan-500 border-round flex-shrink-0" style="height:52px;width:52px;">
                        <i class="pi pi-cog text-white text-3xl"></i>
                    </span>
                    <div class="ml-3">
                        <span class="text-900 font-medium text-2xl mb-3">Settings</span>
                        <p class="text-600 m-0 line-height-3">Tincidunt nunc pulvinar sapien et</p>
                    </div>
                    <i class="text-600 pi pi-chevron-right ml-auto"></i>
                </a>
            </li>
        </ul>
    </div>
</div>`,
            block4: `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-column lg:flex-row justify-content-center align-items-center gap-7">
        <div class="text-center lg:text-right">
            <div class="mt-6 mb-3 font-bold text-6xl text-900">Are you lost?</div>
            <p class="text-700 text-3xl mt-0 mb-6">Sorry, we couldn't find the page.</p>
            <Button type="button" label="Go back to home page" class="p-button-outlined"></Button>
        </div>
        <div>
            <img src="images/blocks/feedback/404-rocket.png" alt="Image" class="w-full md:w-28rem" />
        </div>
    </div>
</div>`
        };
    }
};
</script>
