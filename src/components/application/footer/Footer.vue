<template>
    <div>
        <div class="block-category-title">Footer</div>
        <BlockViewer header="Social Icons" :code="block1" containerClass="">
            <div class="surface-section px-4 md:px-6 lg:px-8">
                <div class="py-6 flex flex-column sm:flex-row sm:align-items-center justify-content-between">
                    <div>
                        <img src="images/blocks/logos/bastion-700.svg" alt="Image" height="40">
                        <div class="mt-2 line-height-3">&copy; 2021 Bastion, Inc. All rights reserved</div>
                    </div>
                    <div class="mt-3 sm:mt-0">
                        <a class="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700">
                            <i class="pi pi-twitter text-xl"></i>
                        </a>
                        <a class="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
                            <i class="pi pi-facebook text-xl"></i>
                        </a>
                        <a class="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
                            <i class="pi pi-github text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Links" :code="block2">
            <div class="surface-section px-4 md:px-6 lg:px-8">
                <div class="surface-section py-6 flex flex-column sm:flex-row align-items-center justify-content-between">
                    <div class="flex flex-nowap font-medium">
                        <a v-ripple class="cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900 p-ripple">HOME</a>
                        <a v-ripple class="cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900 p-ripple">ABOUT</a>
                        <a v-ripple class="cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900 p-ripple">CONTACT</a>
                    </div>
                    <div class="mt-3 sm:mt-0">
                        <img src="images/blocks/logos/bastion-700.svg" alt="Image" height="40">
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Centered" :code="block3">
            <div class="surface-section px-4 py-6 md:px-6 lg:px-8 text-center">
                <img src="images/blocks/logos/bastion-purple.svg" alt="Image" height="50">
                <div class="font-medium text-900 mt-4 mb-3">&copy; 2023 Bastion, Inc</div>
                <p class="text-600 line-height-3 mt-0 mb-4">Cursus metus aliquam eleifend mi. Malesuada pellentesque elit eget gravida. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Massa tincidunt dui ut ornare lectus sit amet est placerat.</p>
                <div class="flex align-items-center justify-content-center">
                    <a class="cursor-pointer text-700 mr-5">
                        <i class="pi pi-twitter"></i>
                    </a>
                    <a class="cursor-pointer text-700 mr-5">
                        <i class="pi pi-facebook"></i>
                    </a>
                    <a class="cursor-pointer text-700">
                        <i class="pi pi-github"></i>
                    </a>
                </div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'Application Footer',
    data() {
        return {
            block1: `
<div class="surface-section px-4 md:px-6 lg:px-8">
    <div class="py-6 flex flex-column sm:flex-row sm:align-items-center justify-content-between">
        <div>
            <img src="images/blocks/logos/bastion-700.svg" alt="Image" height="40">
            <div class="mt-2 line-height-3">&copy; 2021 Bastion, Inc. All rights reserved</div>
        </div>
        <div class="mt-3 sm:mt-0">
            <a class="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700">
                <i class="pi pi-twitter text-xl"></i>
            </a>
            <a class="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
                <i class="pi pi-facebook text-xl"></i>
            </a>
            <a class="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700">
                <i class="pi pi-github text-xl"></i>
            </a>
        </div>
    </div>
</div>`,
            block2: `
<div class="surface-section px-4 md:px-6 lg:px-8">
    <div class="surface-section py-6 flex flex-column sm:flex-row align-items-center justify-content-between">
        <div class="flex flex-nowap font-medium">
            <a v-ripple class="cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900 p-ripple">HOME</a>
            <a v-ripple class="cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900 p-ripple">ABOUT</a>
            <a v-ripple class="cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900 p-ripple">CONTACT</a>
        </div>
        <div class="mt-3 sm:mt-0">
            <img src="images/blocks/logos/bastion-700.svg" alt="Image" height="40">
        </div>
    </div>
</div>`,
            block3: `
<div class="surface-section px-4 py-6 md:px-6 lg:px-8 text-center">
    <img src="images/blocks/logos/bastion-purple.svg" alt="Image" height="50">
    <div class="font-medium text-900 mt-4 mb-3">&copy; 2023 Bastion, Inc</div>
    <p class="text-600 line-height-3 mt-0 mb-4">Cursus metus aliquam eleifend mi. Malesuada pellentesque elit eget gravida. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Massa tincidunt dui ut ornare lectus sit amet est placerat.</p>
    <div class="flex align-items-center justify-content-center">
        <a class="cursor-pointer text-700 mr-5">
            <i class="pi pi-twitter"></i>
        </a>
        <a class="cursor-pointer text-700 mr-5">
            <i class="pi pi-facebook"></i>
        </a>
        <a class="cursor-pointer text-700">
            <i class="pi pi-github"></i>
        </a>
    </div>
</div>`
        }
    }
}
</script>