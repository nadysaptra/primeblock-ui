<template>
    <div>
        <div class="block-category-title">Navigation Bar</div>
        <BlockViewer header="Centered Menu" :code="block1" :previewStyle="{height:'600px'}">
            <div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
                <img src="images/blocks/logos/hyper.svg" alt="Image" height="50">
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mt-1 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-5 shadow-2 lg:shadow-none">
                    <section></section>
                    <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
                        <li class="relative">
                            <a v-ripple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple"
                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                                <span>Products</span>
                                <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                            </a>
                            <ul class="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                                <li>
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                        <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                                        <span>Features</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                        <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                                        <span>Solutions</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                        <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                                        <span>Customers</span>
                                    </a>
                                </li>
                                <li class="relative">
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                                        <i class="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                        <span>Support</span>
                                        <i class="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                    </a>
                                    <ul class="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                        <li>
                                            <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                                <i class="pi pi-cloud mr-2"></i>
                                                <span class="font-medium">Help Center</span>
                                            </a>
                                        </li>
                                        <li class="relative">
                                            <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                                <i class="pi pi-question-circle mr-2"></i>
                                                <span class="font-medium">Faq</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                                <span>Corporate</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                                <span>Resources</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                                <span>Pricing</span>
                            </a>
                        </li>
                    </ul>
                    <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                        <Button label="Login" class="p-button-text font-bold"></Button>
                        <Button label="Register" class="ml-3 p-button-outlined font-bold"></Button>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Left Aligned MegaMenu" :code="block2" :previewStyle="{height:'600px'}">
            <div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
                <img src="images/blocks/logos/hyper.svg" alt="Image" height="50" class="mr-0 lg:mr-5">
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mt-1 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-4 shadow-2 lg:shadow-none">
                    <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
                        <li class="relative">
                            <a v-ripple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple"
                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                                <span>Products</span>
                                <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                            </a>
                            <div class="border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden my-2 lg:my-0 w-full lg:w-30rem">
                                <div class="grid">
                                    <div class="col-12 lg:col-6">
                                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                                            <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                                <i class="pi pi-list text-2xl"></i>
                                            </div>
                                            <div>
                                                <span>Features</span>
                                                <div class="text-600 text-sm mt-1">Subtext of item</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-12 lg:col-6">
                                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                                            <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                                <i class="pi pi-shield text-2xl"></i>
                                            </div>
                                            <div>
                                                <span>Solutions</span>
                                                <div class="text-600 text-sm mt-1">Subtext of item</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-12 lg:col-6">
                                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                                            <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                                <i class="pi pi-users text-2xl"></i>
                                            </div>
                                            <div>
                                                <span>Customers</span>
                                                <div class="text-600 text-sm mt-1">Subtext of item</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-12 lg:col-6">
                                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                                            <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                                <i class="pi pi-question-circle text-2xl"></i>
                                            </div>
                                            <div>
            
                                                <span>Faq</span>
                                                <div class="text-600 text-sm mt-1">Subtext of item</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-12 lg:col-6">
                                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                                            <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                                <i class="pi pi-file text-2xl"></i>
                                            </div>
                                            <div>
                                                <span>Case Studies</span>
                                                <div class="text-600 text-sm mt-1">Subtext of item</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-12 lg:col-6">
                                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                                            <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                                <i class="pi pi-search text-2xl"></i>
                                            </div>
                                            <div>
                                                <span>Library</span>
                                                <div class="text-600 text-sm mt-1">Subtext of item</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                                <span>Corporate</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                                <span>Resources</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                                <span>Pricing</span>
                            </a>
                        </li>
                    </ul>
                    <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                        <Button label="Login" class="p-button-text font-bold"></Button>
                        <Button label="Register" class="ml-3 font-bold"></Button>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Colored Left Aligned Menu" :code="block3" :previewStyle="{height:'600px'}">
            <div class="bg-indigo-500 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
                <img src="images/blocks/logos/hyper-light.svg" alt="Image" height="50">
                <a v-ripple class="cursor-pointer block lg:hidden text-white mt-1 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <div class="align-items-center flex-grow-1 lg:justify-content-end hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 px-6 lg:px-0 z-3 shadow-2 lg:shadow-none">
                    <ul class="list-none p-0 m-0 flex lg:align-items-center text-white select-none flex-column lg:flex-row cursor-pointer">
                        <li class="relative">
                            <a v-ripple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-indigo-100 font-medium transition-colors transition-duration-150 p-ripple"
                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                                <span>Products</span>
                                <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                            </a>
                            <ul class="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem text-900">
                                <li>
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                        <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                                        <span>Features</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                        <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                                        <span>Solutions</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                        <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                                        <span>Customers</span>
                                    </a>
                                </li>
                                <li class="relative">
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                                        <i class="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                        <span>Support</span>
                                        <i class="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                    </a>
                                    <ul class="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                        <li>
                                            <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                                <i class="pi pi-cloud mr-2"></i>
                                                <span class="font-medium">Help Center</span>
                                            </a>
                                        </li>
                                        <li class="relative">
                                            <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                                <i class="pi pi-question-circle mr-2"></i>
                                                <span class="font-medium">Faq</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150 p-ripple">
                                <span>Corporate</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150 p-ripple">
                                <span>Resources</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150 p-ripple">
                                <span>Pricing</span>
                            </a>
                        </li>
                    </ul>
                    <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0 lg:ml-5">
                        <Button label="Login" icon="pi pi-user" class="p-button font-bold"></Button>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Centered Logo" :code="block4" :previewStyle="{height:'600px'}">
            <div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
                <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="50" class="block lg:hidden">
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mt-1 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <div class="align-items-center flex-grow-1 hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
                    <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer lg:w-4">
                        <li class="relative">
                            <a v-ripple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple"
                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                                <span>Products</span>
                                <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                            </a>
                            <ul class="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                                <li>
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                        <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                                        <span>Features</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                        <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                                        <span>Solutions</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                        <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                                        <span>Customers</span>
                                    </a>
                                </li>
                                <li class="relative">
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                                        <i class="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                        <span>Support</span>
                                        <i class="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                    </a>
                                    <ul class="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                        <li>
                                            <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                                <i class="pi pi-cloud mr-2"></i>
                                                <span class="font-medium">Help Center</span>
                                            </a>
                                        </li>
                                        <li class="relative">
                                            <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                                <i class="pi pi-question-circle mr-2"></i>
                                                <span class="font-medium">Faq</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                                <span>Corporate</span>
                            </a>
                        </li>
                    </ul>
                    <div class="w-4 text-center hidden lg:block">
                        <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="50">
                    </div>
                    <div class="flex justify-content-end lg:text-right lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0 lg:w-4">
                        <Button label="Login" class="font-bold p-button-outlined p-button-rounded"></Button>
                        <Button label="Register" class="ml-3 font-bold p-button-rounded"></Button>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Full Height Menu" :code="block5" :previewStyle="{height:'600px'}">
            <div class="surface-overlay shadow-2 flex relative lg:static align-items-center lg:align-items-stretch" style="min-height: 5rem">
                <div class="bg-indigo-500 inline-flex justify-content-center align-items-center" style="width:5rem; height: 5rem">
                    <img src="images/blocks/logos/hyper-light.svg" alt="Image" height="50">
                </div>
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-6 mt-1 ml-auto p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <div class="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-0 pt-3 lg:pt-0 z-1 shadow-2 lg:shadow-none">
                    <ul class="list-none p-0 m-0 flex text-900 select-none flex-column lg:flex-row cursor-pointer">
                        <li class="relative">
                            <a v-ripple class="flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150 p-ripple"
                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                                <span>Products</span>
                                <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                            </a>
                            <ul class="list-none m-0 px-5 lg:p-0 py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                                <li>
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                        <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                                        <span>Features</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                        <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                                        <span>Solutions</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                        <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                                        <span>Customers</span>
                                    </a>
                                </li>
                                <li class="relative">
                                    <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                                        <i class="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                        <span>Support</span>
                                        <i class="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                    </a>
                                    <ul class="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                        <li>
                                            <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                                <i class="pi pi-cloud mr-2"></i>
                                                <span class="font-medium">Help Center</span>
                                            </a>
                                        </li>
                                        <li class="relative">
                                            <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                                <i class="pi pi-question-circle mr-2"></i>
                                                <span class="font-medium">Faq</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a v-ripple class="flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150 p-ripple">
                                <span>Corporate</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple class="flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150 p-ripple">
                                <span>Resources</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple class="flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150 p-ripple">
                                <span>Pricing</span>
                            </a>
                        </li>
                    </ul>
                    <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 px-6 lg:px-0 mt-3 lg:mt-0">
                        <Button label="Login" class="p-button-text font-bold h-full" style="border-radius:0"></Button>
                        <Button label="Register" class="ml-3 font-bold h-full" style="border-radius:0"></Button>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Dark Mega Menu" :code="block6" :previewStyle="{height:'600px'}">
            <div class="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative">
                <img src="images/blocks/logos/hyper-light.svg" alt="Image" height="50">
                <a v-ripple class="cursor-pointer block lg:hidden text-gray-400 mt-1 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 px-6 lg:px-0 shadow-2 lg:shadow-none">
                    <section></section>
                    <ul class="list-none p-0 m-0 flex lg:align-items-center text-gray-400 select-none flex-column lg:flex-row">
                        <li>
                            <a v-ripple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer p-ripple"
                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                                <span>Products</span>
                                <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                            </a>
                            <div class="lg:absolute bg-gray-800 hidden origin-top left-0 top-100 w-full">
                                <div class="flex flex-wrap p-6">
                                    <div class="w-full lg:w-6 mb-4 lg:mb-0">
                                        <span class="block font-normal text-2xl mb-4 text-white">Products</span>
                                        <p class="line-height-3 m-0 text-gray-400">Nisl rhoncus mattis rhoncus urna. Sed enim ut sem viverra aliquet eget sit amet tellus.</p>
                                    </div>
                                    <div class="w-full lg:w-6">
                                        <div class="flex flex-wrap border-bottom-1 border-gray-700 pb-3 mb-3">
                                            <div class="px-0 lg:px-3 py-3">
                                                <span class="text-white">Shodan</span>
                                                <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Porta lorem mollis aliquam ut porttitor leo a diam.</p>
                                            </div>
                                            <div class="px-0 lg:px-3 py-3">
                                                <span class="text-white">Bastion</span>
                                                <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Amet purus gravida quis blandit.</p>
                                            </div>
                                            <div class="px-0 lg:px-3 py-3">
                                                <span class="text-white">Hodly</span>
                                                <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Aenean vel elit scelerisque mauris.</p>
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap">
                                            <div class="px-0 lg:px-3 py-3">
                                                <span class="text-white">Peak</span>
                                                <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Feugiat pretium nibh ipsum consequat.</p>
                                            </div>
                                            <div class="px-0 lg:px-3 py-3">
                                                <span class="text-white">Franki</span>
                                                <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Tristique nulla aliquet enim tortor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer p-ripple">
                                <span>Corporate</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer p-ripple">
                                <span>Resources</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer p-ripple">
                                <span>Pricing</span>
                            </a>
                        </li>
                    </ul>
                    <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none border-gray-800 py-3 lg:py-0 mt-3 lg:mt-0">
                        <Button label="Login" class="p-button-text font-bold"></Button>
                        <Button label="Register" class="ml-3 font-bold"></Button>
                    </div>
                </div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'Marketing NavBar',
    data() {
        return {
            block1: `
<div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="images/blocks/logos/hyper.svg" alt="Image" height="50">
    <a v-ripple class="cursor-pointer block lg:hidden text-700 mt-1 p-ripple"
        v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-5 shadow-2 lg:shadow-none">
        <section></section>
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li class="relative">
                <a v-ripple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Features</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Solutions</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                            <i class="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                            <span>Support</span>
                            <i class="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                    <i class="pi pi-cloud mr-2"></i>
                                    <span class="font-medium">Help Center</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                    <i class="pi pi-question-circle mr-2"></i>
                                    <span class="font-medium">Faq</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Corporate</span>
                </a>
            </li>
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Resources</span>
                </a>
            </li>
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Pricing</span>
                </a>
            </li>
        </ul>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
            <Button label="Login" class="p-button-text font-bold"></Button>
            <Button label="Register" class="ml-3 p-button-outlined font-bold"></Button>
        </div>
    </div>
</div>`,
            block2: `
<div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="images/blocks/logos/hyper.svg" alt="Image" height="50" class="mr-0 lg:mr-5">
    <a v-ripple class="cursor-pointer block lg:hidden text-700 mt-1 p-ripple"
        v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-4 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li class="relative">
                <a v-ripple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <div class="border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden my-2 lg:my-0 w-full lg:w-30rem">
                    <div class="grid">
                        <div class="col-12 lg:col-6">
                            <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                                <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i class="pi pi-list text-2xl"></i>
                                </div>
                                <div>
                                    <span>Features</span>
                                    <div class="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 lg:col-6">
                            <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                                <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i class="pi pi-shield text-2xl"></i>
                                </div>
                                <div>
                                    <span>Solutions</span>
                                    <div class="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 lg:col-6">
                            <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                                <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i class="pi pi-users text-2xl"></i>
                                </div>
                                <div>
                                    <span>Customers</span>
                                    <div class="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 lg:col-6">
                            <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                                <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i class="pi pi-question-circle text-2xl"></i>
                                </div>
                                <div>

                                    <span>Faq</span>
                                    <div class="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 lg:col-6">
                            <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                                <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i class="pi pi-file text-2xl"></i>
                                </div>
                                <div>
                                    <span>Case Studies</span>
                                    <div class="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 lg:col-6">
                            <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                                <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i class="pi pi-search text-2xl"></i>
                                </div>
                                <div>
                                    <span>Library</span>
                                    <div class="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Corporate</span>
                </a>
            </li>
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Resources</span>
                </a>
            </li>
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Pricing</span>
                </a>
            </li>
        </ul>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
            <Button label="Login" class="p-button-text font-bold"></Button>
            <Button label="Register" class="ml-3 font-bold"></Button>
        </div>
    </div>
</div>`,
            block3: `
<div class="bg-indigo-500 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="images/blocks/logos/hyper-light.svg" alt="Image" height="50">
    <a v-ripple class="cursor-pointer block lg:hidden text-white mt-1 p-ripple"
        v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 lg:justify-content-end hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 px-6 lg:px-0 z-3 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-white select-none flex-column lg:flex-row cursor-pointer">
            <li class="relative">
                <a v-ripple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-indigo-100 font-medium transition-colors transition-duration-150 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem text-900">
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Features</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Solutions</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                            <i class="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                            <span>Support</span>
                            <i class="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                    <i class="pi pi-cloud mr-2"></i>
                                    <span class="font-medium">Help Center</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                    <i class="pi pi-question-circle mr-2"></i>
                                    <span class="font-medium">Faq</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Corporate</span>
                </a>
            </li>
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Resources</span>
                </a>
            </li>
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Pricing</span>
                </a>
            </li>
        </ul>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0 lg:ml-5">
            <Button label="Login" icon="pi pi-user" class="p-button font-bold"></Button>
        </div>
    </div>
</div>`,
            block4: `
<div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="50" class="block lg:hidden">
    <a v-ripple class="cursor-pointer block lg:hidden text-700 mt-1 p-ripple"
        v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer lg:w-4">
            <li class="relative">
                <a v-ripple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Features</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Solutions</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                            <i class="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                            <span>Support</span>
                            <i class="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                    <i class="pi pi-cloud mr-2"></i>
                                    <span class="font-medium">Help Center</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                    <i class="pi pi-question-circle mr-2"></i>
                                    <span class="font-medium">Faq</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Corporate</span>
                </a>
            </li>
        </ul>
        <div class="w-4 text-center hidden lg:block">
            <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="50">
        </div>
        <div class="flex justify-content-end lg:text-right lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0 lg:w-4">
            <Button label="Login" class="font-bold p-button-outlined p-button-rounded"></Button>
            <Button label="Register" class="ml-3 font-bold p-button-rounded"></Button>
        </div>
    </div>
</div>`,
            block5: `
<div class="surface-overlay shadow-2 flex relative lg:static align-items-center lg:align-items-stretch" style="min-height: 5rem">
    <div class="bg-indigo-500 inline-flex justify-content-center align-items-center" style="width:5rem; height: 5rem">
        <img src="images/blocks/logos/hyper-light.svg" alt="Image" height="50">
    </div>
    <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-6 mt-1 ml-auto p-ripple"
        v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-0 pt-3 lg:pt-0 z-1 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li class="relative">
                <a v-ripple class="flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none m-0 px-5 lg:p-0 py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Features</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Solutions</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                            <i class="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                            <span>Support</span>
                            <i class="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                    <i class="pi pi-cloud mr-2"></i>
                                    <span class="font-medium">Help Center</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                    <i class="pi pi-question-circle mr-2"></i>
                                    <span class="font-medium">Faq</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a v-ripple class="flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Corporate</span>
                </a>
            </li>
            <li>
                <a v-ripple class="flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Resources</span>
                </a>
            </li>
            <li>
                <a v-ripple class="flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Pricing</span>
                </a>
            </li>
        </ul>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 px-6 lg:px-0 mt-3 lg:mt-0">
            <Button label="Login" class="p-button-text font-bold h-full" style="border-radius:0"></Button>
            <Button label="Register" class="ml-3 font-bold h-full" style="border-radius:0"></Button>
        </div>
    </div>
</div>`,
            block6: `
<div class="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative">
    <img src="images/blocks/logos/hyper-light.svg" alt="Image" height="50">
    <a v-ripple class="cursor-pointer block lg:hidden text-gray-400 mt-1 p-ripple"
        v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 px-6 lg:px-0 shadow-2 lg:shadow-none">
        <section></section>
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-gray-400 select-none flex-column lg:flex-row">
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <div class="lg:absolute bg-gray-800 hidden origin-top left-0 top-100 w-full">
                    <div class="flex flex-wrap p-6">
                        <div class="w-full lg:w-6 mb-4 lg:mb-0">
                            <span class="block font-normal text-2xl mb-4 text-white">Products</span>
                            <p class="line-height-3 m-0 text-gray-400">Nisl rhoncus mattis rhoncus urna. Sed enim ut sem viverra aliquet eget sit amet tellus.</p>
                        </div>
                        <div class="w-full lg:w-6">
                            <div class="flex flex-wrap border-bottom-1 border-gray-700 pb-3 mb-3">
                                <div class="px-0 lg:px-3 py-3">
                                    <span class="text-white">Shodan</span>
                                    <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Porta lorem mollis aliquam ut porttitor leo a diam.</p>
                                </div>
                                <div class="px-0 lg:px-3 py-3">
                                    <span class="text-white">Bastion</span>
                                    <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Amet purus gravida quis blandit.</p>
                                </div>
                                <div class="px-0 lg:px-3 py-3">
                                    <span class="text-white">Hodly</span>
                                    <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div class="flex flex-wrap">
                                <div class="px-0 lg:px-3 py-3">
                                    <span class="text-white">Peak</span>
                                    <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Feugiat pretium nibh ipsum consequat.</p>
                                </div>
                                <div class="px-0 lg:px-3 py-3">
                                    <span class="text-white">Franki</span>
                                    <p class="text-sm text-gray-400 mt-2 mb-0 line-height-3">Tristique nulla aliquet enim tortor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer p-ripple">
                    <span>Corporate</span>
                </a>
            </li>
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer p-ripple">
                    <span>Resources</span>
                </a>
            </li>
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer p-ripple">
                    <span>Pricing</span>
                </a>
            </li>
        </ul>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none border-gray-800 py-3 lg:py-0 mt-3 lg:mt-0">
            <Button label="Login" class="p-button-text font-bold"></Button>
            <Button label="Register" class="ml-3 font-bold"></Button>
        </div>
    </div>
</div>`
        }
    }
}
</script>