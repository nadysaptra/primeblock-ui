<template>
    <div>
        <div class="block-category-title">Banner</div>
        <BlockViewer header="Dark and Full Width" :code="block1" containerClass="surface-section py-8" :free="true">
            <div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
                <div class="font-bold mr-8">🔥 Hot Deals!</div>
                <div class="align-items-center hidden lg:flex">
                    <span class="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
                </div>
                <a class="flex align-items-center ml-2 mr-8">
                    <a class="text-white" href="#"><span class="underline font-bold">Learn More</span></a>
                </a>
                <a v-ripple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple" style="width:2rem; height: 2rem">
                    <i class="pi pi-times"></i>
                </a>
            </div>
        </BlockViewer>

        <BlockViewer header="Condensed and Colored" :code="block2" containerClass="surface-section py-8 px-4 md:px-8">
            <div class="bg-cyan-600 text-white p-3 flex justify-content-between align-items-center flex-wrap shadow-2" style="border-radius: 8px">
                <div class="font-bold">🔥 Hot Deals!</div>
                <div class="align-items-center flex">
                    <span class="line-height-3 hidden lg:block">Libero voluptatum atque exercitationem praesentium provident odit.</span>
                    <a class="flex align-items-center ml-2">
                        <a class="text-white" href="#"><span class="underline font-bold">Learn More</span></a>
                    </a>
                </div>
                <a v-ripple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-cyan-400 cursor-pointer transition-colors transition-duration-150 p-ripple" style="width:2rem; height: 2rem">
                    <i class="pi pi-times"></i>
                </a>
            </div>
        </BlockViewer>

        <BlockViewer header="Condensed and Gradient" :code="block3" containerClass="surface-section py-8 px-4 md:px-8">
            <div class="shadow-2 flex flex-wrap justify-content-between align-content-center px-4 md:px-8" style="background: linear-gradient(90deg, #263238 0%, #526A76 100%); border-radius: 8px">
                <div class="flex align-items-start py-3">
                    <div>
                        <span class="inline-flex border-circle justify-content-center align-items-center text-white bg-green-500 mr-4" style="width: 38px; height: 38px">
                            <i class="pi pi-check-circle text-xl"></i>
                        </span>
                    </div>
                    <div>
                        <div class="text-white font-bold mb-1">Account Verification</div>
                        <span class="text-bluegray-200">Libero voluptatum atque exercitationem praesentium provident odit aperiam.</span>
                    </div>
                </div>
                <a v-ripple class="cursor-pointer bg-bluegray-500 text-white px-3 py-2 line-height-3 my-3 hover:bg-bluegray-400 transition-colors transition-duration-150 p-ripple" style="border-radius: 35px">
                    <span>Confirm Email</span>
                    <i class="ml-2 pi pi-arrow-right"></i>
                </a>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {
            block1: `
<div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div class="font-bold mr-8">🔥 Hot Deals!</div>
    <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
    </div>
    <a class="flex align-items-center ml-2 mr-8">
        <a class="text-white" href="#"><span class="underline font-bold">Learn More</span></a>
    </a>
    <a v-ripple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple" style="width:2rem; height: 2rem">
        <i class="pi pi-times"></i>
    </a>
</div>`,
            block2: `
<div class="bg-cyan-600 text-white p-3 flex justify-content-between align-items-center flex-wrap shadow-2" style="border-radius: 8px">
    <div class="font-bold">🔥 Hot Deals!</div>
    <div class="align-items-center flex">
        <span class="line-height-3 hidden lg:block">Libero voluptatum atque exercitationem praesentium provident odit.</span>
        <a class="flex align-items-center ml-2">
            <a class="text-white" href="#"><span class="underline font-bold">Learn More</span></a>
        </a>
    </div>
    <a v-ripple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-cyan-400 cursor-pointer transition-colors transition-duration-150 p-ripple" style="width:2rem; height: 2rem">
        <i class="pi pi-times"></i>
    </a>
</div>`,
            block3: `
<div class="shadow-2 flex flex-wrap justify-content-between align-content-center px-4 md:px-8" style="background: linear-gradient(90deg, #263238 0%, #526A76 100%); border-radius: 8px">
    <div class="flex align-items-start py-3">
        <div>
            <span class="inline-flex border-circle justify-content-center align-items-center text-white bg-green-500 mr-4" style="width: 38px; height: 38px">
                <i class="pi pi-check-circle text-xl"></i>
            </span>
        </div>
        <div>
            <div class="text-white font-bold mb-1">Account Verification</div>
            <span class="text-bluegray-200">Libero voluptatum atque exercitationem praesentium provident odit aperiam.</span>
        </div>
    </div>
    <a v-ripple class="cursor-pointer bg-bluegray-500 text-white px-3 py-2 line-height-3 my-3 hover:bg-bluegray-400 transition-colors transition-duration-150 p-ripple" style="border-radius: 35px">
        <span>Confirm Email</span>
        <i class="ml-2 pi pi-arrow-right"></i>
    </a>
</div>`
        }
    }
}
</script>