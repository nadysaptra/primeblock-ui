<template>
    <div class="block-category-title">Category Pages</div>
    <BlockViewer header="With Dropdown Filter and Hover CTA" :code="block1" :recent="true">
        <div class="bg-cyan-700 px-4 lg:px-8 py-2 text-center">
            <span class="text-white">Free shipping on orders over $100</span>
        </div>

        <div class="surface-overlay px-3 lg:px-6 flex align-items-stretch relative border-bottom-1 surface-border" style="min-height: 80px">
            <div class="flex align-items-center justify-content-center">
                <img src="images/blocks/logos/peak-700.svg" alt="Image" height="40" class="hidden lg:inline mr-3 lg:mr-6">
                <img src="images/blocks/logos/peak-700.svg" alt="Image" height="40" class="inline lg:hidden mr-3 lg:mr-6">
            </div>
            <div class="flex align-items-center flex-auto">
                <div class="p-input-icon-left w-full p-input-filled">
                    <i class="pi pi-search"></i>
                    <InputText type="text" class="w-full" placeholder="Product search" />
                </div>
            </div>
            <div class="flex ml-3 lg:ml-6">
                <ul class="list-none p-0 m-0 flex">
                    <li class="inline-flex relative">
                        <a v-ripple class="text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 mr-2 lg:mr-0 border-bottom-2 border-transparent hover:border-primary select-none p-ripple"
                            v-styleclass="{selector:'@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}">
                            <i class="pi pi-user text-xl"></i>
                            <span class="hidden">My Account</span>
                        </a>
                        <div class="hidden border-round surface-overlay p-3 shadow-2 absolute right-0 top-100 z-1 w-15rem origin-top">
                            <ul class="list-none p-0 m-0">
                                <li>
                                    <a class="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                        <i class="pi pi-fw pi-box text-lg mr-2"></i>
                                        <span>Orders</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                        <i class="pi pi-fw pi-heart text-lg mr-2"></i>
                                        <span>Favorites</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                        <i class="pi pi-fw pi-star text-lg mr-2"></i>
                                        <span>Reviews</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                        <i class="pi pi-fw pi-sign-out text-lg mr-2"></i>
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="inline-flex relative">
                        <a v-ripple class="text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 border-bottom-2 border-transparent hover:border-primary select-none p-ripple"
                            v-styleclass="{selector:'@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}">
                            <i class="pi pi-shopping-cart text-xl" v-badge></i>
                            <span class="hidden">My Cart</span>
                        </a>
                        <div class="hidden border-round surface-overlay p-4 shadow-2 absolute right-0 top-100 z-1 w-20rem origin-top">
                            <span class="text-900 font-medium mb-3 block">My Cart (1 Item)</span>
                            <div class="flex align-items-center border-bottom-1 surface-border pb-3">
                                <img src="images/blocks/ecommerce/shoppingcart/shopping-cart-2-2.png" class="w-4rem flex-shrink-0 shadow-1" />
                                <div class="flex flex-column pl-3">
                                    <span class="text-900 font-medium mb-2">Prime Watch</span>
                                    <span class="text-600 mb-2">Standard Size</span>
                                    <span class="text-primary font-bold">$50.00</span>
                                </div>
                            </div>
                            <div class="flex pt-3">
                                <Button class="p-button-outlined mr-2">View Cart</button>
                                <Button class="ml-2">Purchase</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="surface-overlay px-2 lg:px-5 flex align-items-stretch relative border-bottom-1 surface-border" style="min-height: 80px">
            <div class="flex">
                <ul class="list-none p-0 m-0 flex">
                    <li class="flex">
                        <a v-ripple class="font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none p-ripple"
                            v-styleclass="{selector:'@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true}">
                            <span>Women</span>
                        </a>
                        <div class="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 z-1">
                            <div class="flex flex-wrap justify-content-between p-4 lg:p-6">
                                <ul class="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                                    <li class="font-bold mb-5 text-xl text-900">Clothing</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Dresses</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Jeans</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Pants</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Skirts</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Sweaters</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Blouses</li>
                                </ul>
                                <ul class="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                                    <li class="font-bold mb-5 text-xl text-900">Shoes</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Athletic</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Boots</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Sneakers</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Flats</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Outdoor</li>
                                </ul>
                                <ul class="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                                    <li class="font-bold mb-5 text-xl text-900">Accessories</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Handbags</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Gloves</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Belts</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Hats</li>
                                    <li class="mb-3 cursor-pointer hover:text-900">Earmuffs</li>
                                </ul>
                                <ul class="list-none flex p-0 m-0">
                                    <li class="flex flex-column align-items-center mb-5 lg:mr-5 pr-3 lg:pr-0">
                                        <img src="images/blocks/ecommerce/storenavigation/storenavigation-3-1.png" alt="Image" style="border-radius:12px" class="mb-5 w-full lg:w-20rem">
                                        <span class="inline-flex surface-0 text-900 border-round font-semibold mb-3">New Arrivals</span>
                                        <a class="cursor-pointer text-700 font-medium hover:text-900">View All</a>
                                    </li>
                                    <li class="flex flex-column align-items-center pl-3 lg:pl-0">
                                        <img src="images/blocks/ecommerce/storenavigation/storenavigation-3-2.png" alt="Image" style="border-radius:12px" class="mb-5 w-full lg:w-20rem">
                                        <span class="inline-flex surface-0 text-900 border-round font-semibold mb-3">Seasonal</span>
                                        <a class="cursor-pointer text-700 font-medium hover:text-900">View All</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="flex">
                        <a v-ripple class="font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none p-ripple"
                            v-styleclass="{selector:'@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true}">
                            <span>Men</span>
                        </a>
                        <div class="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                            <div class="border-2 border-dashed surface-border border-round h-full"></div>
                        </div>
                    </li>
                    <li class="flex">
                        <a v-ripple class="font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none p-ripple"
                            v-styleclass="{selector:'@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true}">
                            <span>Kids</span>
                        </a>
                        <div class="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                            <div class="border-2 border-dashed surface-border border-round h-full"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
            <div class="flex justify-content-between flex-wrap">
                <div class="flex align-items-center mb-4 md:mb-0">
                    <div class="text-900 font-bold text-3xl">Category Title </div>
                    <Badge value="76" class="ml-3 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                </div>
                <div>
                    <Button icon="pi pi-sort-alt" class="p-button-outlined p-button-secondary w-7rem p-2" iconPos="right" label="Sort By" @click="$refs.menu.toggle($event)"></Button>
                    <Menu ref="menu" :popup="true" :model="items"></Menu>
                </div>
            </div>
            <p class="text-600 text-xl">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
            <Divider styleClass="w-full border-gray-200"></Divider>
            <div class="grid grid-nogutter align-items-center">
                <MultiSelect :options="brands" v-model="selectedBrands" placeholder="Brand" optionLabel="name" :filter="true" class="flex-auto lg:flex-1 mb-3 lg:mt-0 mr-0 lg:mr-4 text-900 w-16rem"></MultiSelect>
                <MultiSelect :options="colors" v-model="selectedColors" placeholder="Color" optionLabel="name" :filter="true" class="flex-auto lg:flex-1 mb-3 lg:mt-0 mr-0 lg:mr-4 text-900 w-16rem">
                    <template #value="slotProps">
                        <div v-for="color of slotProps.selectedColors" :key="color">
                            <div class="w-3rem h-3rem border-circle cursor-pointer border-none"></div>
                            <div>{{color.name}}</div>
                        </div>
                    </template>
                    <template let-color pTemplate="item">
                        <div class="flex align-items-center">
                            <div class="w-2rem h-2rem border-circle {{color.class}} cursor-pointer border-none"></div>
                            <div class="text-900 ml-2">{{color.name}}</div>
                        </div>
                    </template>
                </MultiSelect>         
                <MultiSelect :options="prices" v-model="selectedPrice" placeholder="Price" optionLabel="range" :filter="true" class="flex-auto lg:flex-1 mb-3 lg:mt-0 lg:col mr-0 lg:mr-4 text-900 w-16rem"></MultiSelect>
                <ToggleButton v-model="checked1" onLabel="Sustainable" offLabel="Unsustainable" onIcon="pi pi-check" offIcon="pi pi-times" class="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-12rem" ></ToggleButton>
                <ToggleButton v-model="checked2" onLabel="Sale" offLabel="Not Sale" onIcon="pi pi-check" offIcon="pi pi-times" class="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-9rem" ></ToggleButton>
                <a v-ripple tabindex="0" class="cursor-pointer flex align-items-center mb-3 lg:mt-0 text-900 p-ripple">Clear All</a>

                <div class="col-12">
                    <div class="grid mt-4">
                        <div class="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                            <div class="mb-3 relative">
                                <img src="images/blocks/ecommerce/productlist/product-list-2-1.png" class="w-full" />
                                <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                                    style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                                    <i class="pi pi-shopping-cart mr-3 text-base"></i>
                                    <span class="text-base">Add to Cart</span>
                                </button>
                            </div>
                            <div class="flex flex-column align-items-center">
                                <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                                <span class="text-xl text-900 mb-3">$150.00</span>
                                <div class="flex align-items-center mb-3">
                                    <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                                </div>
                                <span class="text-500">Black</span>
                            </div>
                        </div>
                        <div class="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                            <div class="mb-3 relative">
                                <img src="images/blocks/ecommerce/productlist/product-list-2-2.png" class="w-full" />
                                <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                                    style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                                    <i class="pi pi-shopping-cart mr-3 text-base"></i>
                                    <span class="text-base">Add to Cart</span>
                                </button>
                            </div>
                            <div class="flex flex-column align-items-center">
                                <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                                <span class="text-xl text-900 mb-3">$150.00</span>
                                <div class="flex align-items-center mb-3">
                                    <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                                </div>
                                <span class="text-500">Indigo</span>
                            </div>
                        </div>
                        <div class="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                            <div class="mb-3 relative">
                                <img src="images/blocks/ecommerce/productlist/product-list-2-3.png" class="w-full" />
                                <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                                    style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                                    <i class="pi pi-shopping-cart mr-3 text-base"></i>
                                    <span class="text-base">Add to Cart</span>
                                </button>
                            </div>
                            <div class="flex flex-column align-items-center">
                                <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                                <span class="text-xl text-900 mb-3">$150.00</span>
                                <div class="flex align-items-center mb-3">
                                    <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                                </div>
                                <span class="text-500">Purple</span>
                            </div>
                        </div>
                        <div class="col-12 md:col-6 lg:col-3">
                            <div class="mb-3 relative">
                                <img src="images/blocks/ecommerce/productlist/product-list-2-4.png" class="w-full" />
                                <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                                    style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                                    <i class="pi pi-shopping-cart mr-3 text-base"></i>
                                    <span class="text-base">Add to Cart</span>
                                </button>
                            </div>
                            <div class="flex flex-column align-items-center">
                                <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                                <span class="text-xl text-900 mb-3">$150.00</span>
                                <div class="flex align-items-center mb-3">
                                    <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                                </div>
                                <span class="text-500">Cyan</span>
                            </div>
                        </div>
                        <div class="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                            <div class="mb-3 relative">
                                <img src="images/blocks/ecommerce/categorypreview/category-preview-1-28.png" class="w-full" />
                                <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                                    style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                                    <i class="pi pi-shopping-cart mr-3 text-base"></i>
                                    <span class="text-base">Add to Cart</span>
                                </button>
                            </div>
                            <div class="flex flex-column align-items-center">
                                <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                                <span class="text-xl text-900 mb-3">$150.00</span>
                                <div class="flex align-items-center mb-3">
                                    <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                                </div>
                                <span class="text-500">Black</span>
                            </div>
                        </div>
                        <div class="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                            <div class="mb-3 relative">
                                <img src="images/blocks/ecommerce/categorypreview/category-preview-1-29.png" class="w-full" />
                                <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                                    style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                                    <i class="pi pi-shopping-cart mr-3 text-base"></i>
                                    <span class="text-base">Add to Cart</span>
                                </button>
                            </div>
                            <div class="flex flex-column align-items-center">
                                <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                                <span class="text-xl text-900 mb-3">$150.00</span>
                                <div class="flex align-items-center mb-3">
                                    <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                                </div>
                                <span class="text-500">Indigo</span>
                            </div>
                        </div>
                        <div class="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                            <div class="mb-3 relative">
                                <img src="images/blocks/ecommerce/categorypreview/category-preview-1-30.png" class="w-full" />
                                <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                                    style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                                    <i class="pi pi-shopping-cart mr-3 text-base"></i>
                                    <span class="text-base">Add to Cart</span>
                                </button>
                            </div>
                            <div class="flex flex-column align-items-center">
                                <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                                <span class="text-xl text-900 mb-3">$150.00</span>
                                <div class="flex align-items-center mb-3">
                                    <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                                </div>
                                <span class="text-500">Purple</span>
                            </div>
                        </div>
                        <div class="col-12 md:col-6 lg:col-3 mt-5">
                            <div class="mb-3 relative">
                                <img src="images/blocks/ecommerce/categorypreview/category-preview-1-31.png" class="w-full" />
                                <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                                    style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                                    <i class="pi pi-shopping-cart mr-3 text-base"></i>
                                    <span class="text-base">Add to Cart</span>
                                </button>
                            </div>
                            <div class="flex flex-column align-items-center">
                                <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                                <span class="text-xl text-900 mb-3">$150.00</span>
                                <div class="flex align-items-center mb-3">
                                    <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                                    <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                        :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                                </div>
                                <span class="text-500">Cyan</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <Divider class="w-full border-gray-200 m-0"></Divider>
        <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
            <div class="grid grid-nogutter flex-wrap p-2 lg:p-4 bg-cyan-50 border-round mb-4 text-center lg:text-left">
                <div class="col-12 lg:col-6 p-4 flex flex-column justify-content-center">
                    <span class="text-3xl block text-cyan-900 font-bold">Get Deals and Updates from Peak</span>
                    <span class="block text-cyan-600 mt-3">We promise for not sending spam emails. It’ll only good emails.</span>
                    <div class="p-inputgroup relative mt-4" style="border-radius:30px; max-width: 90%;">
                        <InputText placeholder="Email" style="border-radius:30px; height:3.5rem;" class="bg-white-alpha-90 text-black-alpha-90 px-4 border-cyan-100" />         
                        <Button v-ripple label="Subscribe" class="bg-cyan-500 border-none absolute text-white" style="border-radius: 30px; right: 8px; top: 8px; height: 2.5rem; z-index: 1;"></button>
                    </div>
                </div>
                <div class="col-12 lg:col-6 p-4">
                    <div class="w-full h-full bg-no-repeat bg-center bg-cover p-5" style="background: url(images/blocks/ecommerce/categorypage/categorypage-1-1.png); border-radius:30px;">
                        <span class="text-cyan-500 font-bold block">Exclusive Peak Club</span>
                        <span class="text-white text-xl font-bold block mt-3 line-height-3">Join Exlusive Peak Club for free shipping, premium service and deals.</span>
                        <Button v-ripple label="Get Your Card Today" class="bg-cyan-500 border-none w-full mt-3 text-white" style="border-radius: 30px;"></button>
                    </div>
                </div>
            </div>
            <div class="grid grid-nogutter text-center sm:text-left flex-wrap mt-8">
                <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
                    <span class="text-900 text-xl block">Company</span>
                    <ul class="list-none p-0">
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About Peak</a></li>
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Factories</a></li>
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
                    </ul>
                </div>
            
                <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
                    <span class="text-900 text-xl block">Account</span>
                    <ul class="list-none p-0">
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Manage Account</a></li>
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Saved Items</a></li>
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">My Cart</a></li>
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Wishlist</a></li>
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Orders & Returns</a></li>
                    </ul>
                </div>
            
                <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
                    <span class="text-900 text-xl block">Legal</span>
                    <ul class="list-none p-0">
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
                    </ul>
                </div>
            
                <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
                    <span class="text-900 text-xl block">Connect</span>
                    <ul class="list-none p-0">
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Instagram</a></li>
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Twitter</a></li>
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Facebook</a></li>
                        <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Pinterest</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="surface-200 px-4 py-2 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
            <div class="col-fixed flex flex-wrap flex-order-1 lg:flex-order-0 text-center lg:text-left">
            <span class="text-500">© 2022, Peak. Powered by PrimeBlocks.</span>
            </div>
            <div class="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
                <i class="pi pi-twitter p-1 text-sm text-900 cursor-pointer mr-3"></i>
                <i class="pi pi-facebook p-1 text-sm text-900 cursor-pointer mr-3"></i>
                <i class="pi pi-youtube p-1 text-sm text-900 cursor-pointer mr-3"></i>
                <i class="pi pi-google p-1 text-sm text-900 cursor-pointer mr-3"></i>
            </div>
        </div>
    </BlockViewer>
</template>

<script>
export default {
    data() {
        return {
            color: '',
            brands: [
                {name: 'Alfred'},
                {name: 'Hyper'},
                {name: 'Peak'},
                {name: 'Bastion'},
            ],
            colors: [
                {name: 'Black', class:'bg-gray-500'},
                {name: 'Orange', class:'bg-orange-500'},
                {name: 'Indigo', class:'bg-indigo-500'},
                {name: 'Pink', class:'bg-pink-500'},
            ],
            prices: [
                {range: '$10 - $100'},
                {range: '$101 - $200'},
                {range: '$201 - $300'},
                {range: '$301 - $400'},
            ],
            selectedBrands: [
                {name: 'Alfred'},
                {name: 'Hyper'}
            ],
            selectedPrice: null,
            selectedColors: [
                {name: 'Black', class:'bg-gray-500'}
            ],
            rangeValues: [20,80],
            checked1: true,
            checked2: false,
            items: [
                {label: 'Color'},
                {label: 'Size'},
                {label: 'Price'}
            ],
            block1: `
<div class="bg-cyan-700 px-4 lg:px-8 py-2 text-center">
    <span class="text-white">Free shipping on orders over $100</span>
</div>

<div class="surface-overlay px-3 lg:px-6 flex align-items-stretch relative border-bottom-1 surface-border" style="min-height: 80px">
    <div class="flex align-items-center justify-content-center">
        <img src="images/blocks/logos/peak-700.svg" alt="Image" height="40" class="hidden lg:inline mr-3 lg:mr-6">
        <img src="images/blocks/logos/peak-700.svg" alt="Image" height="40" class="inline lg:hidden mr-3 lg:mr-6">
    </div>
    <div class="flex align-items-center flex-auto">
        <div class="p-input-icon-left w-full p-input-filled">
            <i class="pi pi-search"></i>
            <InputText type="text" class="w-full" placeholder="Product search" />
        </div>
    </div>
    <div class="flex ml-3 lg:ml-6">
        <ul class="list-none p-0 m-0 flex">
            <li class="inline-flex relative">
                <a v-ripple class="text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 mr-2 lg:mr-0 border-bottom-2 border-transparent hover:border-primary select-none p-ripple"
                    v-styleclass="{selector:'@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}">
                    <i class="pi pi-user text-xl"></i>
                    <span class="hidden">My Account</span>
                </a>
                <div class="hidden border-round surface-overlay p-3 shadow-2 absolute right-0 top-100 z-1 w-15rem origin-top">
                    <ul class="list-none p-0 m-0">
                        <li>
                            <a class="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i class="pi pi-fw pi-box text-lg mr-2"></i>
                                <span>Orders</span>
                            </a>
                        </li>
                        <li>
                            <a class="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i class="pi pi-fw pi-heart text-lg mr-2"></i>
                                <span>Favorites</span>
                            </a>
                        </li>
                        <li>
                            <a class="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i class="pi pi-fw pi-star text-lg mr-2"></i>
                                <span>Reviews</span>
                            </a>
                        </li>
                        <li>
                            <a class="cursor-pointer text-700 hover:text-900 hover:surface-100 border-round flex align-items-center px-3 py-2">
                                <i class="pi pi-fw pi-sign-out text-lg mr-2"></i>
                                <span>Sign Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="inline-flex relative">
                <a v-ripple class="text-900 font-medium inline-flex align-items-center cursor-pointer px-1 lg:px-3 border-bottom-2 border-transparent hover:border-primary select-none p-ripple"
                    v-styleclass="{selector:'@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}">
                    <i class="pi pi-shopping-cart text-xl" v-badge></i>
                    <span class="hidden">My Cart</span>
                </a>
                <div class="hidden border-round surface-overlay p-4 shadow-2 absolute right-0 top-100 z-1 w-20rem origin-top">
                    <span class="text-900 font-medium mb-3 block">My Cart (1 Item)</span>
                    <div class="flex align-items-center border-bottom-1 surface-border pb-3">
                        <img src="images/blocks/ecommerce/shoppingcart/shopping-cart-2-2.png" class="w-4rem flex-shrink-0 shadow-1" />
                        <div class="flex flex-column pl-3">
                            <span class="text-900 font-medium mb-2">Prime Watch</span>
                            <span class="text-600 mb-2">Standard Size</span>
                            <span class="text-primary font-bold">$50.00</span>
                        </div>
                    </div>
                    <div class="flex pt-3">
                        <Button class="p-button-outlined mr-2">View Cart</button>
                        <Button class="ml-2">Purchase</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
<div class="surface-overlay px-2 lg:px-5 flex align-items-stretch relative border-bottom-1 surface-border" style="min-height: 80px">
    <div class="flex">
        <ul class="list-none p-0 m-0 flex">
            <li class="flex">
                <a v-ripple class="font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none p-ripple"
                    v-styleclass="{selector:'@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true}">
                    <span>Women</span>
                </a>
                <div class="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 z-1">
                    <div class="flex flex-wrap justify-content-between p-4 lg:p-6">
                        <ul class="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                            <li class="font-bold mb-5 text-xl text-900">Clothing</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Dresses</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Jeans</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Pants</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Skirts</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Sweaters</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Blouses</li>
                        </ul>
                        <ul class="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                            <li class="font-bold mb-5 text-xl text-900">Shoes</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Athletic</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Boots</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Sneakers</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Flats</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Outdoor</li>
                        </ul>
                        <ul class="list-none px-3 lg:px-0 py-0 m-0 text-700 mb-5">
                            <li class="font-bold mb-5 text-xl text-900">Accessories</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Handbags</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Gloves</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Belts</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Hats</li>
                            <li class="mb-3 cursor-pointer hover:text-900">Earmuffs</li>
                        </ul>
                        <ul class="list-none flex p-0 m-0">
                            <li class="flex flex-column align-items-center mb-5 lg:mr-5 pr-3 lg:pr-0">
                                <img src="images/blocks/ecommerce/storenavigation/storenavigation-3-1.png" alt="Image" style="border-radius:12px" class="mb-5 w-full lg:w-20rem">
                                <span class="inline-flex surface-0 text-900 border-round font-semibold mb-3">New Arrivals</span>
                                <a class="cursor-pointer text-700 font-medium hover:text-900">View All</a>
                            </li>
                            <li class="flex flex-column align-items-center pl-3 lg:pl-0">
                                <img src="images/blocks/ecommerce/storenavigation/storenavigation-3-2.png" alt="Image" style="border-radius:12px" class="mb-5 w-full lg:w-20rem">
                                <span class="inline-flex surface-0 text-900 border-round font-semibold mb-3">Seasonal</span>
                                <a class="cursor-pointer text-700 font-medium hover:text-900">View All</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="flex">
                <a v-ripple class="font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none p-ripple"
                    v-styleclass="{selector:'@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true}">
                    <span>Men</span>
                </a>
                <div class="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                    <div class="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
            <li class="flex">
                <a v-ripple class="font-medium inline-flex align-items-center cursor-pointer border-bottom-2 border-transparent hover:border-primary px-3 text-700 select-none p-ripple"
                    v-styleclass="{selector:'@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true}">
                    <span>Kids</span>
                </a>
                <div class="surface-overlay shadow-2 hidden absolute w-full left-0 top-100 h-30rem p-6 z-1">
                    <div class="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
        </ul>
    </div>
</div>

<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex justify-content-between flex-wrap">
        <div class="flex align-items-center mb-4 md:mb-0">
            <div class="text-900 font-bold text-3xl">Category Title </div>
            <Badge value="76" class="ml-3 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
        </div>
        <div>
            <Button icon="pi pi-sort-alt" class="p-button-outlined p-button-secondary w-7rem p-2" iconPos="right" label="Sort By" @click="$refs.menu.toggle($event)"></Button>
            <Menu ref="menu" :popup="true" :model="items"></Menu>
        </div>
    </div>
    <p class="text-600 text-xl">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
    <Divider class="w-full border-gray-200"></Divider>
    <div class="grid grid-nogutter align-items-center">
        <MultiSelect :options="brands" v-model="selectedBrands" placeholder="Brand" optionLabel="name" :filter="true" class="flex-auto lg:flex-1 mb-3 lg:mt-0 mr-0 lg:mr-4 text-900 w-16rem"></MultiSelect>
        <MultiSelect :options="colors" v-model="selectedColors" placeholder="Color" optionLabel="name" :filter="true" class="flex-auto lg:flex-1 mb-3 lg:mt-0 mr-0 lg:mr-4 text-900 w-16rem">
            <template #value="slotProps">
                <div v-for="color of slotProps.selectedColors" :key="color">
                    <div class="w-3rem h-3rem border-circle cursor-pointer border-none"></div>
                    <div>{{color.name}}</div>
                </div>
            </template>
            <template let-color pTemplate="item">
                <div class="flex align-items-center">
                    <div class="w-2rem h-2rem border-circle {{color.class}} cursor-pointer border-none"></div>
                    <div class="text-900 ml-2">{{color.name}}</div>
                </div>
            </template>
        </MultiSelect>         
        <MultiSelect :options="prices" v-model="selectedPrice" placeholder="Price" optionLabel="range" :filter="true" class="flex-auto lg:flex-1 mb-3 lg:mt-0 lg:col mr-0 lg:mr-4 text-900 w-16rem"></MultiSelect>
        <ToggleButton v-model="checked1" onLabel="Sustainable" offLabel="Unsustainable" onIcon="pi pi-check" offIcon="pi pi-times" class="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-12rem" ></ToggleButton>
        <ToggleButton v-model="checked2" onLabel="Sale" offLabel="Not Sale" onIcon="pi pi-check" offIcon="pi pi-times" class="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-9rem" ></ToggleButton>
        <a v-ripple tabindex="0" class="cursor-pointer flex align-items-center mb-3 lg:mt-0 text-900 p-ripple">Clear All</a>

        <div class="col-12">
            <div class="grid mt-4">
                <div class="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                    <div class="mb-3 relative">
                        <img src="images/blocks/ecommerce/productlist/product-list-2-1.png" class="w-full" />
                        <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Black</span>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                    <div class="mb-3 relative">
                        <img src="images/blocks/ecommerce/productlist/product-list-2-2.png" class="w-full" />
                        <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Indigo</span>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0">
                    <div class="mb-3 relative">
                        <img src="images/blocks/ecommerce/productlist/product-list-2-3.png" class="w-full" />
                        <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Purple</span>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3">
                    <div class="mb-3 relative">
                        <img src="images/blocks/ecommerce/productlist/product-list-2-4.png" class="w-full" />
                        <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Cyan</span>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                    <div class="mb-3 relative">
                        <img src="images/blocks/ecommerce/categorypreview/category-preview-1-28.png" class="w-full" />
                        <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Black</span>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                    <div class="mb-3 relative">
                        <img src="images/blocks/ecommerce/categorypreview/category-preview-1-29.png" class="w-full" />
                        <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Indigo</span>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mt-5 mb-5 lg:mb-0">
                    <div class="mb-3 relative">
                        <img src="images/blocks/ecommerce/categorypreview/category-preview-1-30.png" class="w-full" />
                        <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Purple</span>
                    </div>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mt-5">
                    <div class="mb-3 relative">
                        <img src="images/blocks/ecommerce/categorypreview/category-preview-1-31.png" class="w-full" />
                        <button type="button" v-ripple class="border-1 border-white border-round py-2 px-3 absolute bg-black-alpha-30 text-white inline-flex align-items-center justify-content-center hover:bg-black-alpha-40 transition-colors transition-duration-300 cursor-pointer p-ripple" 
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)">
                            <i class="pi pi-shopping-cart mr-3 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-column align-items-center">
                        <span class="text-xl text-900 font-medium mb-3">Product Name</span>
                        <span class="text-xl text-900 mb-3">$150.00</span>
                        <div class="flex align-items-center mb-3">
                            <div class="flex-shrink-0 border-circle bg-black-alpha-90 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'black' ? '0 0 0 0.2rem var(--bluegray-900)' : null}" @click="color = 'black'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-bluegray-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'bluegray' ? '0 0 0 0.2rem var(--bluegray-500)' : null}" @click="color = 'bluegray'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-green-500 mr-1 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'green' ? '0 0 0 0.2rem var(--green-500)' : null}" @click="color = 'green'" style="width:1.2rem; height:1.2rem;"></div>
                            <div class="flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300" 
                                :style="{'box-shadow': color === 'blue' ? '0 0 0 0.2rem var(--blue-500)' : null}" @click="color = 'blue'" style="width:1.2rem; height:1.2rem;"></div>
                        </div>
                        <span class="text-500">Cyan</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<Divider styleClass="w-full border-gray-200 m-0"></Divider>
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid grid-nogutter flex-wrap p-2 lg:p-4 bg-cyan-50 border-round mb-4 text-center lg:text-left">
        <div class="col-12 lg:col-6 p-4 flex flex-column justify-content-center">
            <span class="text-3xl block text-cyan-900 font-bold">Get Deals and Updates from Peak</span>
            <span class="block text-cyan-600 mt-3">We promise for not sending spam emails. It’ll only good emails.</span>
            <div class="p-inputgroup relative mt-4" style="border-radius:30px; max-width: 90%;">
                <InputText placeholder="Email" style="border-radius:30px; height:3.5rem;" class="bg-white-alpha-90 text-black-alpha-90 px-4 border-cyan-100" />         
                <Button v-ripple label="Subscribe" class="bg-cyan-500 border-none absolute text-white" style="border-radius: 30px; right: 8px; top: 8px; height: 2.5rem; z-index: 1;"></button>
            </div>
        </div>
        <div class="col-12 lg:col-6 p-4">
            <div class="w-full h-full bg-no-repeat bg-center bg-cover p-5" style="background: url(images/blocks/ecommerce/categorypage/categorypage-1-1.png); border-radius:30px;">
                <span class="text-cyan-500 font-bold block">Exclusive Peak Club</span>
                <span class="text-white text-xl font-bold block mt-3 line-height-3">Join Exlusive Peak Club for free shipping, premium service and deals.</span>
                <Button v-ripple label="Get Your Card Today" class="bg-cyan-500 border-none w-full mt-3 text-white" style="border-radius: 30px;"></button>
            </div>
        </div>
    </div>
    <div class="grid grid-nogutter text-center sm:text-left flex-wrap mt-8">
        <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span class="text-900 text-xl block">Company</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About Peak</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Factories</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
            </ul>
        </div>
    
        <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span class="text-900 text-xl block">Account</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Manage Account</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Saved Items</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">My Cart</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Wishlist</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Orders & Returns</a></li>
            </ul>
        </div>
    
        <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span class="text-900 text-xl block">Legal</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Investor Relations</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Data Privacy</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Terms of Service</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Legal Information</a></li>
            </ul>
        </div>
    
        <div class="col-12 sm:col-6 md:col-4 lg:col-3 flex-column mt-4">
            <span class="text-900 text-xl block">Connect</span>
            <ul class="list-none p-0">
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Instagram</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Twitter</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Facebook</a></li>
                <li><a tabindex="0" class="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Pinterest</a></li>
            </ul>
        </div>
    </div>
</div>

<div class="surface-200 px-4 py-2 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
    <div class="col-fixed flex flex-wrap flex-order-1 lg:flex-order-0 text-center lg:text-left">
    <span class="text-500">© 2022, Peak. Powered by PrimeBlocks.</span>
    </div>
    <div class="col-fixed flex align-items-center flex-order-0 lg:flex-order-1">
        <i class="pi pi-twitter p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i class="pi pi-facebook p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i class="pi pi-youtube p-1 text-sm text-900 cursor-pointer mr-3"></i>
        <i class="pi pi-google p-1 text-sm text-900 cursor-pointer mr-3"></i>
    </div>
</div>
`
        }
    }
}
</script>