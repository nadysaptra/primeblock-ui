<template>
    <div>
        <div class="block-category-title">Product Quickview</div>
        <BlockViewer header="Single Picture with Selectors" :code="block1" :recent="true" :previewStyle="{height: '640px'}" containerClass="flex align-items-center justify-content-center">
            <div class="shadow-2 border-round surface-card p-4" @mouseenter="hovered = true" @mouseleave="hovered = false">
                <div class="relative">
                    <img src="images/blocks/ecommerce/productquickview/product-quickview-1-1.png" class="w-15rem"/>
                    <button v-if="hovered" class="fadein absolute p-component border-none bg-black-alpha-40 hover:bg-black-alpha-50 px-3 py-2 text-white font-medium text-base border-round cursor-pointer transition-colors transition-duration-300 w-13rem"
                        style="bottom: 1rem; left: 1rem" @click="visibleDialog = true">View Details</button>
                </div>
                <div class="flex align-items-center justify-content-between text-xl font-medium mt-3 text-900">
                    <span>Hover Image</span>
                    <span>$90.00</span>
                </div>
            </div>

            <Dialog v-model:visible="visibleDialog" appendTo="body" :modal="true" :breakpoints="{'960px': '75vw', '640px': '90vw'}" style="width: '700px'" :showHeader="false" :contentStyle="{'max-width': '700px', padding:'2rem 2rem 1rem 2rem'}">
                <div class="grid relative">
                    <div class="col-12 lg:col-6 text-center">
                        <img src="images/blocks/ecommerce/productquickview/product-quickview-1-1.png" class="w-8rem sm:w-15rem lg:w-20rem" />
                    </div>
                    <div class="col-12 lg:col-6 py-0 lg:pl-5">
                        <div class="flex justify-content-end">
                            <Button class="absolute lg:static p-button-text p-button-plain p-button-rounded" icon="pi pi-times pi-2xl" @click="visibleDialog = false" style="right:0rem;top:0rem"></Button>
                        </div>
                        <div class="flex align-items-center justify-content-between mb-3">
                            <span class="text-xl font-medium text-900">Product Title</span>
                        </div>
                        <div class="flex align-items-center justify-content-between mb-3">
                            <div class="text-xl text-900">$123</div>
                            <div class="flex align-items-center">
                                <span class="mr-3 flex">
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                </span>
                            </div>
                        </div>
                        <p class="p-0 mt-0 mb-3 line-height-3 text-700">
                            Dolor purus non enim praesent. 
                            At quis risus sed vulputate odio ut.
                        </p>
                        <div class="font-bold text-900 mb-3">Color</div>
                        <div class="flex align-items-center mb-5">
                            <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                :style="{ 'box-shadow': color1 === 'cyan' ? '0 0 0 0.2rem var(--cyan-500)' : null}" @click="color1 = 'cyan'"></div>
                            <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                :style="{ 'box-shadow': color1 === 'purple' ? '0 0 0 0.2rem var(--purple-500)' : null}" @click="color1 = 'purple'"></div>
                            <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                                :style="{ 'box-shadow': color1 === 'indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null}" @click="color1 = 'indigo'"></div>
                        </div>

                        <div class="mb-3 flex align-items-center justify-content-between">
                            <span class="font-bold text-900">Size</span>
                            <a tabindex="0" class="cursor-pointer text-600 text-sm flex align-items-center">Size Guide <i class="ml-1 pi pi-angle-right"></i></a>
                        </div>
                        <div class="flex align-items-center mb-3 text-base">
                            <div class="h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                                :class="{'border-blue-500 border-2 text-blue-500': size1 === 'S'}" @click="size1 = 'S'">S</div>
                            <div class="h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                                :class="{'border-blue-500 border-2 text-blue-500': size1 === 'M'}" @click="size1 = 'M'">M</div>
                            <div class="h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors"
                                :class="{'border-blue-500 border-2 text-blue-500': size1 === 'L'}"  @click="size1 = 'L'">L</div>
                            <div class="h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                                :class="{'border-blue-500 border-2 text-blue-500': size1 === 'XL'}" @click="size1 = 'XL'">XL</div>
                        </div>

                        <Button icon="pi pi-shopping-cart" class="w-full" label="Add to Cart"></Button>
                    </div>
                </div>
            </Dialog>
        </BlockViewer>

        <BlockViewer header="Galleria and Features" :code="block2" :recent="true" :previewStyle="{backgroundColor: 'var(--maskbg)'}" containerClass="flex align-items-center justify-content-center h-screen">
            <div class="surface-overlay border-round p-4 shadow-4 relative" style="max-width: 800px">
                <div class="grid">
                    <div class="col-12 md:col-6 flex justify-content-center align-items-center mt-6 sm:mt-0">
                        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="3" :containerStyle="{'max-width':'300px'}"> 
                            <template #item="slotProps">
                                <img :src="'images/blocks/ecommerce/productquickview/' + slotProps.item" style="width: 100%; display: block;" />
                            </template>
                            <template #thumbnail="slotProps">
                                <div class="grid grid-nogutter justify-content-center">
                                    <img :src="'images/blocks/ecommerce/productquickview/'+ slotProps.item" width="50"/>
                                </div>
                            </template>
                        </Galleria>
                    </div>
                    <div class="col-12 md:col-6 md:pl-5">
                        <div class="flex justify-content-end">
                            <Button class="p-button-text p-button-plain p-button-rounded absolute md:sticky" icon="pi pi-times pi-2xl" style="right:.5rem;top:.5rem"></Button>
                        </div>
                        <div class="text-900 text-2xl font-medium mb-3">Product Title</div>
                        <div class="text-900 text-3xl font-bold mb-3">$120.00</div>
                        <p class="text-700 line-height-3 my-4 p-0">Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Urna molestie at elementum eu facilisis.</p>
                        <div class="flex align-items-center mb-4">
                            <Button label="Add to Cart" class="mr-3 py-2"></Button>
                            <Button icon="pi pi-heart" class="p-button-text"></Button>
                        </div>
                        <div class="flex align-items-center mb-4">
                            <img src="images/blocks/avatars/circle/avatar-f-1.png" class="-mr-1 w-2rem h-2rem" />
                            <img src="images/blocks/avatars/circle/avatar-m-1.png" class="-mr-1 w-2rem h-2rem" />
                            <img src="images/blocks/avatars/circle/avatar-f-2.png" class="-mr-1 w-2rem h-2rem" />
                            <img src="images/blocks/avatars/circle/avatar-m-2.png" class="mr-3 w-2rem h-2rem" />
                            <span class="text-600 text-sm font-medium">11 other people liked it</span>
                        </div>
                        <ul class="list-none p-0 m-0">
                            <li class="flex align-items-center mb-2">
                                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                <span class="text-900 text-sm">Urna molestie at elementum eu facilisis.</span>
                            </li>
                            <li class="flex align-items-center mb-2">
                                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                <span class="text-900 text-sm">Ut tristique et egestas quis ipsum..</span>
                            </li>
                            <li class="flex align-items-center">
                                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                <span class="text-900 text-sm">Magna etiam tempor orci..</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hovered: false,
            visibleDialog: false,
            color1: 'cyan',
            size1: 'M',
            images: [
                'product-quickview-2-1.png',
                'product-quickview-2-2.png',
                'product-quickview-2-3.png',
                'product-quickview-2-4.png',
                'product-quickview-2-5.png',
                'product-quickview-2-6.png'
            ],
            responsiveOptions: [
                {
                    breakpoint: '768px',
                    numVisible: 3
                },
                {
                    breakpoint: '560px',
                    numVisible: 2
                }
            ],
            block1: `
<div class="shadow-2 border-round surface-card p-4" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <div class="relative">
        <img src="images/blocks/ecommerce/productquickview/product-quickview-1-1.png" class="w-15rem"/>
        <button v-if="hovered" class="fadein absolute p-component border-none bg-black-alpha-40 hover:bg-black-alpha-50 px-3 py-2 text-white font-medium text-base border-round cursor-pointer transition-colors transition-duration-300 w-13rem"
            style="bottom: 1rem; left: 1rem" @click="visibleDialog = true">View Details</button>
    </div>
    <div class="flex align-items-center justify-content-between text-xl font-medium mt-3 text-900">
        <span>Hover Image</span>
        <span>$90.00</span>
    </div>
</div>

<Dialog v-model:visible="visibleDialog" appendTo="body" :modal="true" :breakpoints="{'960px': '75vw', '640px': '90vw'}" style="width: '700px'" :showHeader="false" :contentStyle="{'max-width': '700px', padding:'2rem 2rem 1rem 2rem'}">
    <div class="grid relative">
        <div class="col-12 lg:col-6 text-center">
            <img src="images/blocks/ecommerce/productquickview/product-quickview-1-1.png" class="w-8rem sm:w-15rem lg:w-20rem" />
        </div>
        <div class="col-12 lg:col-6 py-0 lg:pl-5">
            <div class="flex justify-content-end">
                <Button class="absolute lg:static p-button-text p-button-plain p-button-rounded" icon="pi pi-times pi-2xl" @click="visibleDialog = false" style="right:0rem;top:0rem"></Button>
            </div>
            <div class="flex align-items-center justify-content-between mb-3">
                <span class="text-xl font-medium text-900">Product Title</span>
            </div>
            <div class="flex align-items-center justify-content-between mb-3">
                <div class="text-xl text-900">$123</div>
                <div class="flex align-items-center">
                    <span class="mr-3 flex">
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                    </span>
                </div>
            </div>
            <p class="p-0 mt-0 mb-3 line-height-3 text-700">
                Dolor purus non enim praesent. 
                At quis risus sed vulputate odio ut.
            </p>
            <div class="font-bold text-900 mb-3">Color</div>
            <div class="flex align-items-center mb-5">
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                    :style="{ 'box-shadow': color1 === 'cyan' ? '0 0 0 0.2rem var(--cyan-500)' : null}" @click="color1 = 'cyan'"></div>
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                    :style="{ 'box-shadow': color1 === 'purple' ? '0 0 0 0.2rem var(--purple-500)' : null}" @click="color1 = 'purple'"></div>
                <div class="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 cursor-pointer border-2 border-white transition-all transition-duration-300" 
                    :style="{ 'box-shadow': color1 === 'indigo' ? '0 0 0 0.2rem var(--indigo-500)' : null}" @click="color1 = 'indigo'"></div>
            </div>

            <div class="mb-3 flex align-items-center justify-content-between">
                <span class="font-bold text-900">Size</span>
                <a tabindex="0" class="cursor-pointer text-600 text-sm flex align-items-center">Size Guide <i class="ml-1 pi pi-angle-right"></i></a>
            </div>
            <div class="flex align-items-center mb-3 text-base">
                <div class="h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    :class="{'border-blue-500 border-2 text-blue-500': size1 === 'S'}" @click="size1 = 'S'">S</div>
                <div class="h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    :class="{'border-blue-500 border-2 text-blue-500': size1 === 'M'}" @click="size1 = 'M'">M</div>
                <div class="h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors"
                    :class="{'border-blue-500 border-2 text-blue-500': size1 === 'L'}"  @click="size1 = 'L'">L</div>
                <div class="h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors" 
                    :class="{'border-blue-500 border-2 text-blue-500': size1 === 'XL'}" @click="size1 = 'XL'">XL</div>
            </div>

            <Button icon="pi pi-shopping-cart" class="w-full" label="Add to Cart"></Button>
        </div>
    </div>
</Dialog>`,
            block2: `
<div class="surface-overlay border-round p-4 shadow-4 relative" style="max-width: 800px">
    <div class="grid">
        <div class="col-12 md:col-6 flex justify-content-center align-items-center mt-6 sm:mt-0">
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="3" :containerStyle="{'max-width':'300px'}"> 
                <template #item="slotProps">
                    <img :src="'images/blocks/ecommerce/productquickview/' + slotProps.item" style="width: 100%; display: block;" />
                </template>
                <template #thumbnail="slotProps">
                    <div class="grid grid-nogutter justify-content-center">
                        <img :src="'images/blocks/ecommerce/productquickview/'+ slotProps.item" width="50"/>
                    </div>
                </template>
            </Galleria>
        </div>
        <div class="col-12 md:col-6 md:pl-5">
            <div class="flex justify-content-end">
                <Button class="p-button-text p-button-plain p-button-rounded absolute md:sticky" icon="pi pi-times pi-2xl" style="right:.5rem;top:.5rem"></Button>
            </div>
            <div class="text-900 text-2xl font-medium mb-3">Product Title</div>
            <div class="text-900 text-3xl font-bold mb-3">$120.00</div>
            <p class="text-700 line-height-3 my-4 p-0">Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Urna molestie at elementum eu facilisis.</p>
            <div class="flex align-items-center mb-4">
                <Button label="Add to Cart" class="mr-3 py-2"></Button>
                <Button icon="pi pi-heart" class="p-button-text"></Button>
            </div>
            <div class="flex align-items-center mb-4">
                <img src="images/blocks/avatars/circle/avatar-f-1.png" class="-mr-1 w-2rem h-2rem" />
                <img src="images/blocks/avatars/circle/avatar-m-1.png" class="-mr-1 w-2rem h-2rem" />
                <img src="images/blocks/avatars/circle/avatar-f-2.png" class="-mr-1 w-2rem h-2rem" />
                <img src="images/blocks/avatars/circle/avatar-m-2.png" class="mr-3 w-2rem h-2rem" />
                <span class="text-600 text-sm font-medium">11 other people liked it</span>
            </div>
            <ul class="list-none p-0 m-0">
                <li class="flex align-items-center mb-2">
                    <i class="pi pi-check-circle text-green-500 mr-2"></i>
                    <span class="text-900 text-sm">Urna molestie at elementum eu facilisis.</span>
                </li>
                <li class="flex align-items-center mb-2">
                    <i class="pi pi-check-circle text-green-500 mr-2"></i>
                    <span class="text-900 text-sm">Ut tristique et egestas quis ipsum..</span>
                </li>
                <li class="flex align-items-center">
                    <i class="pi pi-check-circle text-green-500 mr-2"></i>
                    <span class="text-900 text-sm">Magna etiam tempor orci..</span>
                </li>
            </ul>
        </div>
    </div>
</div>`
        }
    }
}
</script>