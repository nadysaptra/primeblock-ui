<template>
    <div>
        <div class="block-category-title">Sidebar Layouts</div>
        <BlockViewer header="Grouped Menu" :code="block1" :previewStyle="{ height: '100vh', overflow: 'hidden' }">
            <div class="min-h-screen flex relative lg:static surface-ground">
                <div id="app-sidebar-1" class="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style="width: 280px">
                    <div class="flex flex-column h-full">
                        <div class="flex align-items-center px-5 flex-shrink-0" style="height: 60px">
                            <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="30" />
                        </div>
                        <div class="overflow-y-auto">
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <div
                                        v-ripple
                                        class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                    >
                                        <span class="font-medium">FAVORITES</span>
                                        <i class="pi pi-chevron-down"></i>
                                    </div>
                                    <ul class="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-home mr-2"></i>
                                                <span class="font-medium">Dashboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-bookmark mr-2"></i>
                                                <span class="font-medium">Bookmarks</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                            >
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Reports</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a
                                                        v-ripple
                                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                                    >
                                                        <i class="pi pi-chart-line mr-2"></i>
                                                        <span class="font-medium">Revenue</span>
                                                        <i class="pi pi-chevron-down ml-auto"></i>
                                                    </a>
                                                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                                <i class="pi pi-table mr-2"></i>
                                                                <span class="font-medium">View</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                                <i class="pi pi-search mr-2"></i>
                                                                <span class="font-medium">Search</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-chart-line mr-2"></i>
                                                        <span class="font-medium">Expenses</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-users mr-2"></i>
                                                <span class="font-medium">Team</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-comments mr-2"></i>
                                                <span class="font-medium">Messages</span>
                                                <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-calendar mr-2"></i>
                                                <span class="font-medium">Calendar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-cog mr-2"></i>
                                                <span class="font-medium">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <div
                                        v-ripple
                                        class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                    >
                                        <span class="font-medium">APPLICATION</span>
                                        <i class="pi pi-chevron-down"></i>
                                    </div>
                                    <ul class="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-folder mr-2"></i>
                                                <span class="font-medium">Projects</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-chart-bar mr-2"></i>
                                                <span class="font-medium">Performance</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-cog mr-2"></i>
                                                <span class="font-medium">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-auto">
                            <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                            <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px" />
                                <span class="font-medium">Amy Elsner</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <div class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style="height: 60px">
                        <div class="flex">
                            <a
                                v-ripple
                                class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                                v-styleclass="{ selector: '#app-sidebar-1', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }"
                            >
                                <i class="pi pi-bars text-4xl"></i>
                            </a>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                            </span>
                        </div>
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-700 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                        >
                            <i class="pi pi-ellipsis-v text-2xl"></i>
                        </a>
                        <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li class="border-top-1 surface-border lg:border-top-none">
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px" />
                                    <div class="block lg:hidden">
                                        <div class="text-900 font-medium">Josephine Lillard</div>
                                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-5 flex flex-column flex-auto">
                        <div class="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Dim Sidebar with Topbar" :code="block2" :previewStyle="{ height: '100vh', overflow: 'hidden' }">
            <div class="min-h-screen flex relative lg:static surface-ground">
                <div id="app-sidebar-2" class="bg-bluegray-800 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none" style="width: 280px">
                    <div class="flex flex-column h-full">
                        <div class="flex align-items-center px-5 bg-bluegray-900 flex-shrink-0" style="height: 60px">
                            <img src="images/blocks/logos/hyper-300.svg" alt="Image" height="30" />
                        </div>
                        <div class="overflow-y-auto mt-3">
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-home mr-2"></i>
                                        <span class="font-medium">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-bookmark mr-2"></i>
                                        <span class="font-medium">Bookmarks</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                    >
                                        <i class="pi pi-chart-line mr-2"></i>
                                        <span class="font-medium">Reports</span>
                                        <i class="pi pi-chevron-down ml-auto"></i>
                                    </a>
                                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple"
                                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                            >
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Revenue</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-table mr-2"></i>
                                                        <span class="font-medium">View</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-search mr-2"></i>
                                                        <span class="font-medium">Search</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Expenses</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-users mr-2"></i>
                                        <span class="font-medium">Team</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-comments mr-2"></i>
                                        <span class="font-medium">Messages</span>
                                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-yellow-500 text-bluegray-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-calendar mr-2"></i>
                                        <span class="font-medium">Calendar</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-cog mr-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-auto">
                            <hr class="mb-3 mx-3 border-top-1 border-none border-bluegray-600" />
                            <ul class="list-none p-2 m-0 hidden origin-bottom animation-duration-150 overflow-hidden animation-ease-in-out">
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-user mr-2"></i>
                                        <span class="font-medium">Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-cog mr-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-sign-out mr-2"></i>
                                        <span class="font-medium">Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                            <a
                                v-ripple
                                class="m-3 px-3 py-2 flex align-items-center hover:bg-bluegray-900 border-round cursor-pointer text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors p-ripple"
                                v-styleclass="{ selector: '@prev', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                            >
                                <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px" />
                                <span class="font-medium">Amy Elsner</span>
                                <i class="pi pi-chevron-up ml-auto"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <div class="flex justify-content-between align-items-center px-5 surface-section shadow-2 relative lg:static border-bottom-1 surface-border" style="height: 60px">
                        <div class="flex">
                            <a
                                v-ripple
                                class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                                v-styleclass="{ selector: '#app-sidebar-2', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }"
                            >
                                <i class="pi pi-bars text-4xl"></i>
                            </a>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                            </span>
                        </div>
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-700 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                        >
                            <i class="pi pi-ellipsis-v text-2xl"></i>
                        </a>
                        <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li class="border-top-1 surface-border lg:border-top-none">
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px" />
                                    <div class="block lg:hidden">
                                        <div class="text-900 font-medium">Josephine Lillard</div>
                                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-5 flex flex-column flex-auto">
                        <div class="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Dark Sidebar with Grouped Menu" :code="block3" :previewStyle="{ height: '100vh', overflow: 'hidden' }">
            <div class="min-h-screen flex relative lg:static surface-ground">
                <div id="app-sidebar-3" class="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 select-none" style="width: 280px">
                    <div class="flex flex-column h-full">
                        <div class="flex align-items-center px-5 flex-shrink-0" style="height: 60px">
                            <img src="images/blocks/logos/hyper-300.svg" alt="Image" height="30" />
                        </div>
                        <div class="overflow-y-auto">
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <span class="block p-3 text-gray-600">FAVORITES</span>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-home mr-2"></i>
                                        <span class="font-medium">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-bookmark mr-2"></i>
                                        <span class="font-medium">Bookmarks</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                    >
                                        <i class="pi pi-chart-line mr-2"></i>
                                        <span class="font-medium">Reports</span>
                                        <i class="pi pi-chevron-down ml-auto"></i>
                                    </a>
                                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                            >
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Revenue</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-table mr-2"></i>
                                                        <span class="font-medium">View</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-search mr-2"></i>
                                                        <span class="font-medium">Search</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Expenses</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-users mr-2"></i>
                                        <span class="font-medium">Team</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-comments mr-2"></i>
                                        <span class="font-medium">Messages</span>
                                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-calendar mr-2"></i>
                                        <span class="font-medium">Calendar</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-cog mr-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                            </ul>
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <span class="block p-3 text-600">APPLICATION</span>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-folder mr-2"></i>
                                        <span class="font-medium">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-chart-bar mr-2"></i>
                                        <span class="font-medium">Reports</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-cog mr-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-auto">
                            <hr class="mb-3 mx-3 border-top-1 border-none border-gray-800" />
                            <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px" />
                                <span class="font-medium">Amy Elsner</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <div class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style="height: 60px">
                        <div class="flex">
                            <a
                                v-ripple
                                class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                                v-styleclass="{ selector: '#app-sidebar-3', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }"
                            >
                                <i class="pi pi-bars text-4xl"></i>
                            </a>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                            </span>
                        </div>
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-700 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                        >
                            <i class="pi pi-ellipsis-v text-2xl"></i>
                        </a>
                        <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li class="border-top-1 surface-border lg:border-top-none">
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px" />
                                    <div class="block lg:hidden">
                                        <div class="text-900 font-medium">Josephine Lillard</div>
                                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-5 flex flex-column flex-auto">
                        <div class="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Narrow Sidebar" :code="block4" :previewStyle="{ height: '100vh', overflow: 'hidden' }">
            <div class="min-h-screen flex relative lg:static surface-ground">
                <div id="app-sidebar-4" class="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 w-18rem lg:w-5rem select-none">
                    <div class="flex flex-column h-full">
                        <div class="flex align-items-center justify-content-center flex-shrink-0 bg-indigo-500" style="height: 60px">
                            <img src="images/blocks/logos/hyper-light.svg" alt="Image" height="30" />
                        </div>
                        <div class="mt-3 select-none">
                            <ul class="list-none p-3 lg:py-3 lg:px-2 m-0">
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-home mr-2 lg:mr-0 text-base lg:text-xl"></i>
                                        <span class="font-medium inline lg:hidden">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-bookmark mr-2 lg:mr-0 text-base lg:text-xl"></i>
                                        <span class="font-medium inline lg:hidden">Bookmarks</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-users mr-2 lg:mr-0 text-base lg:text-xl"></i>
                                        <span class="font-medium inline lg:hidden">Team</span>
                                    </a>
                                </li>
                                <li class="lg:relative">
                                    <a
                                        v-ripple
                                        class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }"
                                    >
                                        <i class="pi pi-chart-line mr-2 lg:mr-0 text-base lg:text-xl" v-badge></i>
                                        <span class="font-medium inline lg:hidden">Reports</span>
                                        <i class="pi pi-chevron-down ml-auto lg:hidden"></i>
                                    </a>
                                    <ul
                                        class="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static lg:absolute left-100 top-0 z-1 bg-gray-900 border-round-right shadow-none lg:shadow-2 w-full lg:w-15rem"
                                    >
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                                                v-styleclass="{ selector: '@next', toggleClass: 'hidden' }"
                                            >
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Revenue</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-table mr-2"></i>
                                                        <span class="font-medium">View</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-search mr-2"></i>
                                                        <span class="font-medium">Search</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Expenses</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-calendar mr-2 lg:mr-0 text-base lg:text-xl"></i>
                                        <span class="font-medium inline lg:hidden">Calendar</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-cog mr-2 lg:mr-0 text-base lg:text-xl"></i>
                                        <span class="font-medium inline lg:hidden">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-auto">
                            <hr class="mb-3 mx-2 border-top-1 border-none border-gray-800" />
                            <a v-ripple class="my-3 mx-2 flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-300 hover:text-0 transition-duration-150 transition-colors p-ripple">
                                <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2 lg:mr-0" style="width: 32px; height: 32" />
                                <span class="font-medium inline lg:hidden">Amy Elsner</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <div class="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style="height: 60px">
                        <div class="flex">
                            <a
                                v-ripple
                                class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                                v-styleclass="{ selector: '#app-sidebar-4', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }"
                            >
                                <i class="pi pi-bars text-4xl"></i>
                            </a>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                            </span>
                        </div>
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-700 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                        >
                            <i class="pi pi-ellipsis-v text-2xl"></i>
                        </a>
                        <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li class="border-top-1 surface-border lg:border-top-none">
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px" />
                                    <div class="block lg:hidden">
                                        <div class="text-900 font-medium">Josephine Lillard</div>
                                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-5 flex flex-column flex-auto">
                        <div class="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Narrow Sidebar with Titles" :code="block5" :previewStyle="{ height: '100vh', overflow: 'hidden' }">
            <div class="min-h-screen flex relative lg:static surface-ground">
                <div id="app-sidebar-5" class="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 w-18rem lg:w-7rem select-none">
                    <div class="flex flex-column h-full">
                        <div class="flex align-items-center justify-content-center flex-shrink-0 bg-orange-500" style="height: 60px">
                            <img src="images/blocks/logos/hyper-light.svg" alt="Image" height="30" />
                        </div>
                        <div class="mt-3">
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-search mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Search</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Team</span>
                                    </a>
                                </li>
                                <li class="relative">
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }"
                                    >
                                        <i class="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg" v-badge.danger></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Reports</span>
                                        <i class="pi pi-chevron-down ml-auto lg:hidden"></i>
                                    </a>
                                    <ul
                                        class="list-none pl-3 pr-0 py-0 lg:p-3 m-0 lg:ml-3 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static border-round-right lg:absolute left-100 top-0 z-1 bg-gray-900 shadow-none lg:shadow-2 w-full lg:w-15rem"
                                    >
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                                                v-styleclass="{ selector: '@next', toggleClass: 'hidden' }"
                                            >
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Revenue</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-table mr-2"></i>
                                                        <span class="font-medium">View</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-search mr-2"></i>
                                                        <span class="font-medium">Search</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Expenses</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-calendar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Events</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Options</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-auto">
                            <hr class="mb-3 mx-3 border-top-1 border-none border-gray-800" />
                            <a
                                v-ripple
                                class="m-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                            >
                                <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2 lg:mr-0" style="width: 32px; height: 32px" />
                                <span class="font-medium inline lg:hidden">Amy Elsner</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <div class="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style="height: 60px">
                        <div class="flex">
                            <a
                                v-ripple
                                class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                                v-styleclass="{ selector: '#app-sidebar-5', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }"
                            >
                                <i class="pi pi-bars text-4xl"></i>
                            </a>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                            </span>
                        </div>
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-700 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                        >
                            <i class="pi pi-ellipsis-v text-2xl"></i>
                        </a>
                        <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li class="border-top-1 surface-border lg:border-top-none">
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px" />
                                    <div class="block lg:hidden">
                                        <div class="text-900 font-medium">Josephine Lillard</div>
                                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-5 flex flex-column flex-auto">
                        <div class="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="2 Column with Titles" :code="block6" :previewStyle="{ height: '100vh', overflow: 'hidden' }">
            <div class="min-h-screen flex relative lg:static surface-ground">
                <div id="app-sidebar-6" class="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none w-12rem bg-indigo-800 animation-duration-300 animation-ease-in-out">
                    <div class="flex flex-column h-full">
                        <div class="flex align-items-center justify-content-center flex-shrink-0" style="height: 60px">
                            <img src="images/blocks/logos/bastion.svg" alt="Image" height="30" />
                        </div>
                        <div class="my-3 p-3">
                            <span class="p-input-icon-left">
                                <i class="pi pi-search text-indigo-50"></i>
                                <InputText type="text" class="appearance-none border-none bg-indigo-700 text-indigo-50 w-full" />
                            </span>
                        </div>
                        <div class="overflow-y-auto">
                            <ul class="list-none p-3 m-0 flex flex-wrap">
                                <li class="w-6 text-center">
                                    <a
                                        v-ripple
                                        class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple"
                                        style="width: 60px; height: 60px; border-radius: 10px"
                                    >
                                        <i class="pi pi-home text-2xl"></i>
                                    </a>
                                    <div class="mt-2 text-indigo-200 font-medium text-sm">Home</div>
                                </li>
                                <li class="w-6 text-center">
                                    <a
                                        v-ripple
                                        class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple"
                                        style="width: 60px; height: 60px; border-radius: 10px"
                                    >
                                        <i class="pi pi-star-fill text-2xl"></i>
                                    </a>
                                    <div class="mt-2 text-indigo-200 font-medium text-sm">Favorites</div>
                                </li>
                                <li class="w-6 text-center mt-3">
                                    <a
                                        v-ripple
                                        class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple"
                                        style="width: 60px; height: 60px; border-radius: 10px"
                                    >
                                        <i class="pi pi-users text-2xl"></i>
                                    </a>
                                    <div class="mt-2 text-indigo-200 font-medium text-sm">Users</div>
                                </li>
                                <li class="w-6 text-center mt-3">
                                    <a
                                        v-ripple
                                        class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple"
                                        style="width: 60px; height: 60px; border-radius: 10px"
                                    >
                                        <i class="pi pi-comments text-2xl"></i>
                                    </a>
                                    <div class="mt-2 text-indigo-200 font-medium text-sm">Chart</div>
                                </li>
                                <li class="w-6 text-center mt-3">
                                    <a
                                        v-ripple
                                        class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple"
                                        style="width: 60px; height: 60px; border-radius: 10px"
                                    >
                                        <i class="pi pi-calendar text-2xl"></i>
                                    </a>
                                    <div class="mt-2 text-indigo-200 font-medium text-sm">Calendar</div>
                                </li>
                                <li class="w-6 text-center mt-3">
                                    <a
                                        v-ripple
                                        class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple"
                                        style="width: 60px; height: 60px; border-radius: 10px"
                                    >
                                        <i class="pi pi-cog text-2xl"></i>
                                    </a>
                                    <div class="mt-2 text-indigo-200 font-medium text-sm">Settings</div>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-auto border-top-1 border-indigo-700 p-3 flex justify-content-between">
                            <a
                                v-ripple
                                class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple"
                                style="width: 40px; height: 40px; border-radius: 10px"
                            >
                                <img src="images/blocks/avatars/circle/avatar-f-6.png" style="width: 24px; height: 24px" />
                            </a>
                            <a
                                v-ripple
                                class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple"
                                style="width: 40px; height: 40px; border-radius: 10px"
                            >
                                <i class="pi pi-slack text-xl"></i>
                            </a>
                            <a
                                v-ripple
                                class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple"
                                style="width: 40px; height: 40px; border-radius: 10px"
                            >
                                <i class="pi pi-github text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <div class="flex justify-content-between align-items-center px-5 surface-section shadow-2 relative lg:static border-bottom-1 surface-border" style="height: 60px">
                        <div class="flex">
                            <a
                                v-ripple
                                class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                                v-styleclass="{ selector: '#app-sidebar-6', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }"
                            >
                                <i class="pi pi-bars text-4xl"></i>
                            </a>
                        </div>
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-700 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                        >
                            <i class="pi pi-ellipsis-v text-2xl"></i>
                        </a>
                        <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li class="border-top-1 surface-border lg:border-top-none">
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <img src="images/blocks/avatars/circle/avatar-f-6.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px" />
                                    <div class="block lg:hidden">
                                        <div class="text-900 font-medium">Josephine Lillard</div>
                                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-5 flex flex-column flex-auto">
                        <div class="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Glassmorphic Light" :code="block7" :previewStyle="{ height: '100vh', overflow: 'hidden' }">
            <div class="min-h-screen flex relative lg:static" style="background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)">
                <div
                    id="app-sidebar-7"
                    class="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none animation-duration-300 animation-ease-in-out bg-white-alpha-50 border-white-alpha-30"
                    style="width: 280px; backdrop-filter: blur(10px)"
                >
                    <div class="flex flex-column h-full">
                        <div class="flex align-items-center px-5 flex-shrink-0" style="height: 60px">
                            <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="30" />
                        </div>
                        <div class="overflow-y-auto">
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <div
                                        v-ripple
                                        class="p-3 flex align-items-center justify-content-between text-gray-600 cursor-pointer p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                    >
                                        <span class="font-medium">FAVORITES</span>
                                        <i class="pi pi-chevron-down"></i>
                                    </div>
                                    <ul class="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-home mr-2"></i>
                                                <span class="font-medium">Dashboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-bookmark mr-2"></i>
                                                <span class="font-medium">Bookmarks</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple"
                                                style="border-radius: 30px"
                                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                            >
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Reports</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a
                                                        v-ripple
                                                        class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple"
                                                        style="border-radius: 30px"
                                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                                    >
                                                        <i class="pi pi-chart-line mr-2"></i>
                                                        <span class="font-medium">Revenue</span>
                                                        <i class="pi pi-chevron-down ml-auto"></i>
                                                    </a>
                                                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                                <i class="pi pi-table mr-2"></i>
                                                                <span class="font-medium">View</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                                <i class="pi pi-search mr-2"></i>
                                                                <span class="font-medium">Search</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                        <i class="pi pi-chart-line mr-2"></i>
                                                        <span class="font-medium">Expenses</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-users mr-2"></i>
                                                <span class="font-medium">Team</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-comments mr-2"></i>
                                                <span class="font-medium">Messages</span>
                                                <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-calendar mr-2"></i>
                                                <span class="font-medium">Calendar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-cog mr-2"></i>
                                                <span class="font-medium">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <div
                                        v-ripple
                                        class="p-3 flex align-items-center justify-content-between text-gray-700 cursor-pointer p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                    >
                                        <span class="font-medium">APPLICATION</span>
                                        <i class="pi pi-chevron-down"></i>
                                    </div>
                                    <ul class="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-folder mr-2"></i>
                                                <span class="font-medium">Projects</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-chart-bar mr-2"></i>
                                                <span class="font-medium">Performance</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-cog mr-2"></i>
                                                <span class="font-medium">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-auto border-top-1 border-white-alpha-40">
                            <ul class="list-none p-2 m-0 hidden origin-bottom animation-duration-150 overflow-hidden animation-ease-in-out">
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                        <i class="pi pi-user mr-2"></i>
                                        <span class="font-medium">Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                        <i class="pi pi-cog mr-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                        <i class="pi pi-sign-out mr-2"></i>
                                        <span class="font-medium">Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                            <a
                                v-ripple
                                class="m-3 px-3 py-2 flex align-items-center hover:bg-purple-50 text-gray-800 cursor-pointer text-gray-800 transition-duration-150 transition-colors p-ripple"
                                style="border-radius: 30px"
                                v-styleclass="{ selector: '@prev', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                            >
                                <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px" />
                                <span class="font-medium">Amy Elsner</span>
                                <i class="pi pi-chevron-up ml-auto"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <div class="flex justify-content-between align-items-center px-5 border-bottom-1 relative lg:static bg-white-alpha-50 border-white-alpha-40" style="height: 60px">
                        <div class="flex">
                            <a
                                v-ripple
                                class="cursor-pointer block lg:hidden text-gray-800 mr-3 mt-1 p-ripple"
                                v-styleclass="{ selector: '#app-sidebar-7', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }"
                            >
                                <i class="pi pi-bars text-4xl"></i>
                            </a>
                        </div>
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-gray-800 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                        >
                            <i class="pi pi-ellipsis-v text-2xl"></i>
                        </a>
                        <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static px-3 py-3 lg:py-0 mr-3 lg:mr-0" style="backdrop-filter: blur(10px)">
                            <li class="mr-0 lg:mr-3">
                                <a v-ripple class="flex p-3 lg:p-2 align-items-center text-gray-800 hover:bg-purple-50 font-medium cursor-pointer transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li class="mr-0 lg:mr-3">
                                <a v-ripple class="flex p-3 lg:p-2 align-items-center text-gray-800 hover:bg-purple-50 font-medium cursor-pointer transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li class="border-top-1 lg:border-top-none lg:mt-0 mt-2 lg:pt-0 pt-2 border-white-alpha-40">
                                <a v-ripple class="flex p-3 lg:p-2 align-items-center hover:bg-purple-50 font-medium cursor-pointer transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px" />
                                    <div class="block lg:hidden">
                                        <div class="text-gray-900 font-medium">Josephine Lillard</div>
                                        <span class="text-gray-700 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-5 flex flex-column flex-auto">
                        <div class="border-2 border-dashed border-round flex-auto bg-white-alpha-50 border-white-alpha-40"></div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Dark Gradient" :code="block8" :previewStyle="{ height: '100vh', overflow: 'hidden' }">
            <div class="min-h-screen flex relative lg:static" style="background-image: linear-gradient(60deg, #29323c 0%, #485563 100%)">
                <div
                    id="app-sidebar-8"
                    class="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none animation-duration-300 animation-ease-in-out border-white-alpha-10"
                    style="width: 280px; background-image: linear-gradient(60deg, #29323c 0%, #2f3844 100%)"
                >
                    <div class="flex flex-column h-full">
                        <div class="flex align-items-center px-5 flex-shrink-0" style="height: 60px">
                            <img src="images/blocks/logos/hyper-300.svg" alt="Image" height="30" />
                        </div>
                        <div class="overflow-y-auto">
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <div
                                        v-ripple
                                        class="p-3 flex align-items-center justify-content-between text-gray-500 cursor-pointer p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                    >
                                        <span class="font-medium">FAVORITES</span>
                                        <i class="pi pi-chevron-down"></i>
                                    </div>
                                    <ul class="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-home mr-2"></i>
                                                <span class="font-medium">Dashboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-bookmark mr-2"></i>
                                                <span class="font-medium">Bookmarks</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple"
                                                style="border-radius: 30px"
                                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                            >
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Reports</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a
                                                        v-ripple
                                                        class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple"
                                                        style="border-radius: 30px"
                                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                                    >
                                                        <i class="pi pi-chart-line mr-2"></i>
                                                        <span class="font-medium">Revenue</span>
                                                        <i class="pi pi-chevron-down ml-auto"></i>
                                                    </a>
                                                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                                <i class="pi pi-table mr-2"></i>
                                                                <span class="font-medium">View</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                                <i class="pi pi-search mr-2"></i>
                                                                <span class="font-medium">Search</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                        <i class="pi pi-chart-line mr-2"></i>
                                                        <span class="font-medium">Expenses</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-users mr-2"></i>
                                                <span class="font-medium">Team</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-comments mr-2"></i>
                                                <span class="font-medium">Messages</span>
                                                <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-calendar mr-2"></i>
                                                <span class="font-medium">Calendar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-cog mr-2"></i>
                                                <span class="font-medium">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <div
                                        v-ripple
                                        class="p-3 flex align-items-center justify-content-between text-gray-500 cursor-pointer p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                    >
                                        <span class="font-medium">APPLICATION</span>
                                        <i class="pi pi-chevron-down"></i>
                                    </div>
                                    <ul class="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-folder mr-2"></i>
                                                <span class="font-medium">Projects</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-chart-bar mr-2"></i>
                                                <span class="font-medium">Performance</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                <i class="pi pi-cog mr-2"></i>
                                                <span class="font-medium">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-auto border-top-1 border-white-alpha-10">
                            <ul class="list-none p-2 m-0 hidden origin-bottom animation-duration-150 overflow-hidden animation-ease-in-out">
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-700 text-gray-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                        <i class="pi pi-user mr-2"></i>
                                        <span class="font-medium">Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-700 text-gray-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                        <i class="pi pi-cog mr-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-700 text-gray-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                        <i class="pi pi-sign-out mr-2"></i>
                                        <span class="font-medium">Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                            <a
                                v-ripple
                                class="m-3 px-3 py-2 flex align-items-center hover:bg-bluegray-700 text-gray-300 cursor-pointer text-gray-300 transition-duration-150 transition-colors p-ripple"
                                style="border-radius: 30px"
                                v-styleclass="{ selector: '@prev', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                            >
                                <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px" />
                                <span class="font-medium">Amy Elsner</span>
                                <i class="pi pi-chevron-up ml-auto"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <div class="flex justify-content-between align-items-center px-5 border-bottom-1 relative lg:static border-white-alpha-10" style="height: 60px">
                        <div class="flex">
                            <a
                                v-ripple
                                class="cursor-pointer block lg:hidden text-gray-300 mr-3 mt-1 p-ripple"
                                v-styleclass="{ selector: '#app-sidebar-8', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }"
                            >
                                <i class="pi pi-bars text-4xl"></i>
                            </a>
                        </div>
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-gray-300 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                        >
                            <i class="pi pi-ellipsis-v text-2xl"></i>
                        </a>
                        <ul
                            class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static px-3 py-3 lg:py-0 mr-3 lg:mr-0"
                            style="background-image: linear-gradient(60deg, #29323c 0%, #485563 100%); border-radius: 30px"
                        >
                            <li class="mr-0 lg:mr-3">
                                <a v-ripple class="flex p-3 lg:p-2 align-items-center text-gray-300 hover:bg-bluegray-700 font-medium cursor-pointer transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li class="mr-0 lg:mr-3">
                                <a v-ripple class="flex p-3 lg:p-2 align-items-center text-gray-300 hover:bg-bluegray-700 font-medium cursor-pointer transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li class="border-top-1 lg:border-top-none lg:mt-0 mt-2 lg:pt-0 pt-2 border-white-alpha-10">
                                <a v-ripple class="flex p-3 lg:p-2 align-items-center hover:bg-bluegray-700 font-medium cursor-pointer transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px" />
                                    <div class="block lg:hidden">
                                        <div class="text-gray-300 font-medium">Josephine Lillard</div>
                                        <span class="text-gray-500 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-5 flex flex-column flex-auto">
                        <div class="border-2 border-dashed border-round flex-auto border-white-alpha-10"></div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Narrow Sidebar with Borders" :code="block9" :previewStyle="{ height: '100vh', overflow: 'hidden' }">
            <div class="min-h-screen flex relative lg:static surface-ground">
                <div id="app-sidebar-9" class="h-screen surface-section hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none">
                    <div class="flex flex-column h-full">
                        <div class="flex align-items-center justify-content-center flex-shrink-0" style="height: 60px">
                            <img src="images/blocks/logos/hyper-cyan.svg" alt="Image" height="30" />
                        </div>
                        <div class="mt-3">
                            <ul class="list-none p-0 m-0">
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300 transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-search mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Search</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Team</span>
                                    </a>
                                </li>
                                <li class="relative">
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }"
                                    >
                                        <i class="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl" v-badge.danger></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Reports</span>
                                        <i class="pi pi-chevron-down ml-auto lg:hidden"></i>
                                    </a>
                                    <ul
                                        class="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static border-round-right lg:absolute left-100 top-0 z-1 surface-overlay shadow-none lg:shadow-2 w-full lg:w-15rem"
                                    >
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple"
                                                v-styleclass="{ selector: '@next', toggleClass: 'hidden' }"
                                            >
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Revenue</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-table mr-2"></i>
                                                        <span class="font-medium">View</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-search mr-2"></i>
                                                        <span class="font-medium">Search</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Expenses</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-calendar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Events</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Options</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-auto">
                            <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                            <a v-ripple class="m-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:surface-200 border-round text-600 transition-duration-150 transition-colors p-ripple">
                                <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2 lg:mr-0" style="width: 32px; height: 32px" />
                                <span class="font-medium inline lg:hidden">Amy Elsner</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <div class="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style="height: 60px">
                        <div class="flex">
                            <a
                                v-ripple
                                class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                                v-styleclass="{ selector: '#app-sidebar-9', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }"
                            >
                                <i class="pi pi-bars text-4xl"></i>
                            </a>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                            </span>
                        </div>
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-700 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                        >
                            <i class="pi pi-ellipsis-v text-2xl"></i>
                        </a>
                        <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li class="border-top-1 surface-border lg:border-top-none">
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px" />
                                    <div class="block lg:hidden">
                                        <div class="text-900 font-medium">Amy Elsner</div>
                                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-5 flex flex-column flex-auto">
                        <div class="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Ghost Menu" :code="block10" :previewStyle="{ height: '100vh', overflow: 'hidden' }">
            <div class="min-h-screen flex relative lg:static surface-ground">
                <div id="app-sidebar-10" class="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none surface-ground border-right-1 lg:border-right-none surface-border" style="width: 280px">
                    <div class="flex flex-column h-full">
                        <div class="flex align-items-center px-5 flex-shrink-0" style="height: 60px">
                            <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="30" />
                        </div>
                        <div class="overflow-y-auto">
                            <div class="p-3">
                                <div class="p-input-icon-left w-full">
                                    <i class="pi pi-search"></i>
                                    <InputText type="text" class="border-1 surface-border w-full" placeholder="Search" style="border-radius: 30px" />
                                </div>
                            </div>
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <div class="p-3 flex align-items-center justify-content-between text-600r">
                                        <span class="font-bold text-800">FAVORITES</span>
                                    </div>
                                    <ul class="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-blue-500 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-home mr-2"></i>
                                                <span class="font-medium">Dashboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-bookmark mr-2"></i>
                                                <span class="font-medium">Bookmarks</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple"
                                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                            >
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Reports</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a
                                                        v-ripple
                                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple"
                                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                                    >
                                                        <i class="pi pi-chart-line mr-2"></i>
                                                        <span class="font-medium">Revenue</span>
                                                        <i class="pi pi-chevron-down ml-auto"></i>
                                                    </a>
                                                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                                                <i class="pi pi-table mr-2"></i>
                                                                <span class="font-medium">View</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                                                <i class="pi pi-search mr-2"></i>
                                                                <span class="font-medium">Search</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-chart-line mr-2"></i>
                                                        <span class="font-medium">Expenses</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-users mr-2"></i>
                                                <span class="font-medium">Team</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-comments mr-2"></i>
                                                <span class="font-medium">Messages</span>
                                                <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-calendar mr-2"></i>
                                                <span class="font-medium">Calendar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-cog mr-2"></i>
                                                <span class="font-medium">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <div class="p-3 flex align-items-center justify-content-between text-600">
                                        <span class="font-bold text-800">APPLICATION</span>
                                    </div>
                                    <ul class="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-folder mr-2"></i>
                                                <span class="font-medium">Projects</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-chart-bar mr-2"></i>
                                                <span class="font-medium">Performance</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-cog mr-2"></i>
                                                <span class="font-medium">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-auto">
                            <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px" />
                                <span class="font-medium">Amy Elsner</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <div class="flex align-items-center justify-content-between lg:justify-content-start px-5 relative lg:static" style="height: 60px">
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                            v-styleclass="{ selector: '#app-sidebar-10', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }"
                        >
                            <i class="pi pi-bars text-4xl"></i>
                        </a>
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-700 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                        >
                            <i class="pi pi-ellipsis-v text-2xl"></i>
                        </a>
                        <ul
                            class="list-none p-0 mt-0 mb-0 ml-0 mr-3 lg:mr-0 hidden lg:flex lg:align-items-center select-none lg:flex-row border-round border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static surface-ground lg:w-full"
                        >
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Settings</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-user text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Profile</span>
                                </a>
                            </li>
                            <li class="border-top-1 surface-border lg:border-top-none ml-auto">
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-200 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px" />
                                    <div class="block lg:hidden">
                                        <div class="text-900 font-medium">Amy Elsner</div>
                                        <span class="text-600 font-medium text-sm">Developer</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-5 flex flex-column flex-auto">
                        <div class="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Colored Icons with Outline" :code="block11" :previewStyle="{ height: '100vh', overflow: 'hidden' }">
            <div class="min-h-screen flex relative lg:static surface-ground">
                <div id="app-sidebar-11" class="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style="width: 280px">
                    <div class="flex flex-column h-full">
                        <div class="flex align-items-center px-5 flex-shrink-0" style="height: 60px">
                            <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="30" />
                        </div>
                        <div class="overflow-y-auto">
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <div
                                        v-ripple
                                        class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer border-2 border-transparent border-rounded p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                    >
                                        <span class="font-medium">FAVORITES</span>
                                        <i class="pi pi-chevron-down"></i>
                                    </div>
                                    <ul class="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors text-indigo-500 p-ripple"
                                                style="border-radius: 12px"
                                            >
                                                <i class="pi pi-home mr-2"></i>
                                                <span class="font-medium">Dashboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                                <i class="pi pi-bookmark mr-2 text-blue-500"></i>
                                                <span class="font-medium">Bookmarks</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                                                style="border-radius: 12px"
                                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                            >
                                                <i class="pi pi-chart-line mr-2 text-purple-500"></i>
                                                <span class="font-medium">Reports</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a
                                                        v-ripple
                                                        class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                                                        style="border-radius: 12px"
                                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                                    >
                                                        <i class="pi pi-chart-line mr-2 text-purple-500"></i>
                                                        <span class="font-medium">Revenue</span>
                                                        <i class="pi pi-chevron-down ml-auto"></i>
                                                    </a>
                                                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <a
                                                                v-ripple
                                                                class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                                                                style="border-radius: 12px"
                                                            >
                                                                <i class="pi pi-table text-purple-500 mr-2"></i>
                                                                <span class="font-medium">View</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                v-ripple
                                                                class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                                                                style="border-radius: 12px"
                                                            >
                                                                <i class="pi pi-search mr-2 text-purple-500"></i>
                                                                <span class="font-medium">Search</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                                        <i class="pi pi-chart-line mr-2 text-purple-500"></i>
                                                        <span class="font-medium">Expenses</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                                <i class="pi pi-users mr-2 text-green-500"></i>
                                                <span class="font-medium">Team</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                                <i class="pi pi-comments mr-2 text-cyan-500"></i>
                                                <span class="font-medium">Messages</span>
                                                <span class="inline-flex align-items-center justify-content-center ml-auto bg-indigo-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                                <i class="pi pi-calendar mr-2 text-teal-500"></i>
                                                <span class="font-medium">Calendar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                                <i class="pi pi-cog mr-2 text-pink-500"></i>
                                                <span class="font-medium">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <div
                                        v-ripple
                                        class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                    >
                                        <span class="font-medium">APPLICATIONS</span>
                                        <i class="pi pi-chevron-down"></i>
                                    </div>
                                    <ul class="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                                <i class="pi pi-discord mr-2 text-cyan-500"></i>
                                                <span class="font-medium">Discord</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                                <i class="pi pi-slack mr-2 text-purple-500"></i>
                                                <span class="font-medium">Slack</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                                <i class="pi pi-github mr-2 text-blue-500"></i>
                                                <span class="font-medium">GitHub</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-auto">
                            <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                            <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px" />
                                <span class="font-medium">Amy Elsner</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <div class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style="height: 60px">
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                            v-styleclass="{ selector: '#app-sidebar-11', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }"
                        >
                            <i class="pi pi-bars text-4xl"></i>
                        </a>
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-700 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                        >
                            <i class="pi pi-ellipsis-v text-2xl"></i>
                        </a>
                        <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row w-auto lg:w-full surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Settings</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-user text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Profile</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-star text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Favorites</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-pencil text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Edit</span>
                                </a>
                            </li>
                            <li class="border-top-1 surface-border lg:border-top-none ml-auto">
                                <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple">
                                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px" />
                                    <div class="block lg:hidden">
                                        <div class="text-900 font-medium">Josephine Lillard</div>
                                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-5 flex flex-column flex-auto">
                        <div class="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Floating Menu" :code="block12" :previewStyle="{ height: '100vh', overflow: 'auto' }">
            <div class="min-h-screen flex flex-column surface-ground">
                <div class="surface-overlay py-3 px-6 flex align-items-center justify-content-between relative lg:static">
                    <a
                        v-ripple
                        class="cursor-pointer block lg:hidden text-700 p-ripple"
                        v-styleclass="{ selector: '#app-sidebar-12', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }"
                    >
                        <i class="pi pi-bars text-4xl"></i>
                    </a>
                    <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="40" class="mr-0 lg:mr-6" />
                    <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple" v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                        <i class="pi pi-ellipsis-v text-2xl"></i>
                    </a>
                    <ul class="list-none p-3 lg:p-0 m-0 lg:align-items-center select-none flex-column lg:flex-row absolute hidden lg:flex lg:static surface-overlay right-0 top-100 z-1 shadow-2 lg:shadow-none">
                        <li class="lg:mr-1">
                            <a v-ripple class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 lg:border-circle p-ripple">
                                <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                <span class="block lg:hidden font-medium">Inbox</span>
                            </a>
                        </li>
                        <li class="lg:mr-1">
                            <a v-ripple class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 lg:border-circle p-ripple">
                                <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                <span class="block lg:hidden font-medium">Notifications</span>
                            </a>
                        </li>
                        <li class="border-top-1 surface-border lg:border-top-none lg:mt-0 mt-2 lg:pt-0 pt-2">
                            <a v-ripple class="flex p-3 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 lg:border-circle p-ripple">
                                <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 25px; height: 25px" />
                                <div class="block lg:hidden">
                                    <div class="text-900 font-medium">Josephine Lillard</div>
                                    <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <ul class="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border">
                    <li class="pr-3">
                        <a class="cursor-pointer">
                            <i class="pi pi-home text-600"></i>
                        </a>
                    </li>
                    <li class="px-2">
                        <i class="pi pi-angle-right text-600"></i>
                    </li>
                    <li class="px-2">
                        <a class="cursor-pointer text-600 white-space-nowrap">Favorites</a>
                    </li>
                    <li class="px-2">
                        <i class="pi pi-angle-right text-600"></i>
                    </li>
                    <li class="px-2">
                        <a class="cursor-pointer text-purple-500 white-space-nowrap">Dashboard</a>
                    </li>
                </ul>
                <div class="flex relative lg:static p-5 flex-auto">
                    <div id="app-sidebar-12" class="surface-card hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none shadow-2" style="width: 280px; border-radius: 12px">
                        <div class="flex flex-column h-full">
                            <div class="overflow-y-auto">
                                <div class="p-3">
                                    <div class="p-input-icon-left w-full">
                                        <i class="pi pi-search"></i>
                                        <InputText type="text" class="border-1 surface-border w-full" placeholder="Search" style="border-radius: 30px" />
                                    </div>
                                </div>
                                <ul class="list-none px-3 pb-3 pt-0 m-0">
                                    <li>
                                        <div class="p-3 flex align-items-center justify-content-between text-600">
                                            <span class="font-medium text-sm text-900">FAVORITES</span>
                                        </div>
                                        <ul class="list-none p-0 m-0 overflow-hidden">
                                            <li>
                                                <a
                                                    v-ripple
                                                    class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 bg-purple-50 transition-duration-150 transition-colors text-purple-500 border-purple-500 border-right-2 p-ripple"
                                                >
                                                    <i class="pi pi-home mr-2"></i>
                                                    <span class="font-medium">Dashboard</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                                    <i class="pi pi-bookmark mr-2"></i>
                                                    <span class="font-medium">Bookmarks</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    v-ripple
                                                    class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple"
                                                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                                >
                                                    <i class="pi pi-chart-line mr-2"></i>
                                                    <span class="font-medium">Reports</span>
                                                    <i class="pi pi-chevron-down ml-auto"></i>
                                                </a>
                                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <a
                                                            v-ripple
                                                            class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple"
                                                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }"
                                                        >
                                                            <i class="pi pi-chart-line mr-2"></i>
                                                            <span class="font-medium">Revenue</span>
                                                            <i class="pi pi-chevron-down ml-auto"></i>
                                                        </a>
                                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                            <li>
                                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                                                    <i class="pi pi-table mr-2"></i>
                                                                    <span class="font-medium">View</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                                                    <i class="pi pi-search mr-2"></i>
                                                                    <span class="font-medium">Search</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                                            <i class="pi pi-chart-line mr-2"></i>
                                                            <span class="font-medium">Expenses</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                                    <i class="pi pi-users mr-2"></i>
                                                    <span class="font-medium">Team</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                                    <i class="pi pi-comments mr-2"></i>
                                                    <span class="font-medium">Messages</span>
                                                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-purple-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul class="list-none p-3 m-0">
                                    <li>
                                        <div class="p-3 flex align-items-center justify-content-between text-600">
                                            <span class="font-medium text-sm text-900">APPLICATION</span>
                                        </div>
                                        <ul class="list-none p-0 m-0 overflow-hidden">
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                                    <i class="pi pi-folder mr-2"></i>
                                                    <span class="font-medium">Projects</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                                    <i class="pi pi-chart-bar mr-2"></i>
                                                    <span class="font-medium">Performance</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                                    <i class="pi pi-cog mr-2"></i>
                                                    <span class="font-medium">Settings</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-auto border-top-1 surface-border p-3 flex justify-content-between">
                                <a
                                    v-ripple
                                    class="cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle p-ripple"
                                    style="width: 40px; height: 40px"
                                >
                                    <i class="pi pi-file text-xl"></i>
                                </a>
                                <a
                                    v-ripple
                                    class="cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle p-ripple"
                                    style="width: 40px; height: 40px"
                                >
                                    <i class="pi pi-star text-xl"></i>
                                </a>
                                <a
                                    v-ripple
                                    class="cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle p-ripple"
                                    style="width: 40px; height: 40px"
                                >
                                    <i class="pi pi-cog text-xl"></i>
                                </a>
                                <a
                                    v-ripple
                                    class="cursor-pointer inline-flex align-items-center justify-content-center bg-pink-500 text-white border-2 border-pink-600 hover:bg-pink-600 text-600 transition-colors transition-duration-150 border-circle p-ripple"
                                    style="width: 40px; height: 40px"
                                >
                                    <i class="pi pi-sign-out text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-column flex-auto">
                        <div class="border-2 border-dashed surface-border border-round surface-section flex-auto lg:ml-5"></div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="SelectButton Menu" :code="block13" :previewStyle="{ height: '100vh', overflow: 'hidden' }" recent>
            <div class="min-h-screen flex relative lg:static surface-ground">
                <div id="app-sidebar-13" class="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style="width: 280px">
                    <div class="flex flex-column h-full">
                        <div class="flex align-items-center justify-content-center px-3 py-5 border-bottom-1 surface-border" style="height: 60px">
                            <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="30" />
                        </div>
                        <div class="flex justify-content-center py-5">
                            <SelectButton  :options="menuOptions" v-model="menuOption" optionLabel="name" optionValue="value" :unselectable="false"></SelectButton>
                        </div>
                        <div class="overflow-y-auto px-5 flex-1">
                            <ul class="list-none p-0 m-0" v-if="menuOption === 0">
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors text-primary p-ripple" style="border-radius: 12px">
                                        <i class="pi pi-home mr-2"></i>
                                        <span class="font-medium">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                        <i class="pi pi-bookmark mr-2"></i>
                                        <span class="font-medium">Bookmarks</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                        <i class="pi pi-users mr-2"></i>
                                        <span class="font-medium">Team</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                        <i class="pi pi-comments mr-2"></i>
                                        <span class="font-medium">Messages</span>
                                        <Badge value="5" class="ml-auto"></Badge>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                        <i class="pi pi-calendar mr-2"></i>
                                        <span class="font-medium">Calendar</span>
                                    </a>
                                </li>
                            </ul>
                            <ul class="list-none p-0 m-0" v-if="menuOption == 1">
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                        <i class="pi pi-discord mr-2"></i>
                                        <span class="font-medium">Discord</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                        <i class="pi pi-slack mr-2"></i>
                                        <span class="font-medium">Slack</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hover transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                        <i class="pi pi-github mr-2"></i>
                                        <span class="font-medium">GitHub</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="border-top-1 surface-border p-3 flex justify-content-center column-gap-5">
                            <a v-ripple class="cursor-pointer text-purple-500 inline-flex align-items-center justify-content-center hover:surface-100 transition-colors transition-duration-150 w-3rem h-3rem border-circle p-ripple">
                                <i class="pi pi-chart-pie text-3xl"></i>
                            </a>
                            <a v-ripple class="cursor-pointer text-orange-500 inline-flex align-items-center justify-content-center hover:surface-100 transition-colors transition-duration-150 w-3rem h-3rem border-circle p-ripple">
                                <i class="pi pi-bolt text-3xl"></i>
                            </a>
                            <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center hover:surface-100 transition-colors transition-duration-150 w-3rem h-3rem border-circle p-ripple">
                                <img src="images/blocks/avatars/circle/avatar-f-1.png" style="width: 42px; height: 42px" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen flex flex-column flex-auto surface-ground p-5">
                    <div class="surface-card flex flex-column flex-auto border-round-xl p-5">
                        <div class="flex justify-content-between align-items-center relative lg:static mb-5 column-gap-5">
                            <div class="flex align-items-center">
                                <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 p-ripple" v-styleclass="{ selector: '#app-sidebar-13', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                                    <i class="pi pi-bars text-4xl"></i>
                                </a>

                                <div class="font-medium">Welcome back, <span class="font-bold">Christina!</span> 👋</div>
                            </div>
                            <div>
                                <a
                                    v-ripple
                                    class="cursor-pointer block lg:hidden text-700 p-ripple"
                                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }"
                                >
                                    <i class="pi pi-ellipsis-v text-2xl"></i>
                                </a>
                                <ul
                                    class="list-none p-3 lg:p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row lg:border-round-none border-round-xl surface-overlay border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
                                >
                                    <li>
                                        <span class="p-input-icon-left lg:mr-3 mb-3 lg:mb-0">
                                            <i class="pi pi-search"></i>
                                            <InputText type="text" class="border-round-3xl w-8rem sm:w-full" placeholder="Search" />
                                        </span>
                                    </li>
                                    <li>
                                        <Button class="border-round-3xl white-space-nowrap w-full lg:w-auto" iconPos="right" v-ripple icon="pi pi-plus" label="Add Task"></Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="border-2 border-dashed surface-border surface-50 flex-auto border-round-xl"></div>
                    </div>
                </div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'SidebarLayout',
    data() {
        return {
            menuOptions: [
                { name: 'Favorites', value: 0 },
                { name: 'Apps', value: 1 }
            ],
            menuOption: 0,
            block1: `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-1" class="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style="width:280px">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center px-5 flex-shrink-0" style="height:60px">
                <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="30">
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-3 m-0">
                    <li>
                        <div v-ripple class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                            <span class="font-medium">FAVORITES</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bookmark mr-2"></i>
                                    <span class="font-medium">Bookmarks</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Reports</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Revenue</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-table mr-2"></i>
                                                    <span class="font-medium">View</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-search mr-2"></i>
                                                    <span class="font-medium">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Expenses</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-users mr-2"></i>
                                    <span class="font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-none p-3 m-0">
                    <li>
                        <div v-ripple class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                            <span class="font-medium">APPLICATION</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-folder mr-2"></i>
                                    <span class="font-medium">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-bar mr-2"></i>
                                    <span class="font-medium">Performance</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px"/>
                    <span class="font-medium">Amy Elsner</span>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style="height:60px">
            <div class="flex">
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                    v-styleclass="{ selector: '#app-sidebar-1', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                </span>
            </div>
            <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>`,
            block2: `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-2" class="bg-bluegray-800 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none" style="width:280px">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center px-5 bg-bluegray-900 flex-shrink-0" style="height:60px">
                <img src="images/blocks/logos/hyper-300.svg" alt="Image" height="30">
            </div>
            <div class="overflow-y-auto mt-3">
                <ul class="list-none p-3 m-0">
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-home mr-2"></i>
                            <span class="font-medium">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-bookmark mr-2"></i>
                            <span class="font-medium">Bookmarks</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                            <i class="pi pi-chart-line mr-2"></i>
                            <span class="font-medium">Reports</span>
                            <i class="pi pi-chevron-down ml-auto"></i>
                        </a>
                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                transition-duration-150 transition-colors p-ripple"
                                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Revenue</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                        transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-table mr-2"></i>
                                            <span class="font-medium">View</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                        transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-search mr-2"></i>
                                            <span class="font-medium">Search</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Expenses</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-users mr-2"></i>
                            <span class="font-medium">Team</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-comments mr-2"></i>
                            <span class="font-medium">Messages</span>
                            <span class="inline-flex align-items-center justify-content-center ml-auto bg-yellow-500 text-bluegray-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-calendar mr-2"></i>
                            <span class="font-medium">Calendar</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                            transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-cog mr-2"></i>
                            <span class="font-medium">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-none border-bluegray-600" />
                <ul class="list-none p-2 m-0 hidden origin-bottom animation-duration-150 overflow-hidden animation-ease-in-out">
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                        transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-user mr-2"></i>
                            <span class="font-medium">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                        transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-cog mr-2"></i>
                            <span class="font-medium">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                        transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-sign-out mr-2"></i>
                            <span class="font-medium">Sign Out</span>
                        </a>
                    </li>
                </ul>
                <a v-ripple class="m-3 px-3 py-2 flex align-items-center hover:bg-bluegray-900 border-round cursor-pointer text-bluegray-100 hover:text-bluegray-50
                    transition-duration-150 transition-colors p-ripple"
                    v-styleclass="{ selector: '@prev', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px"/>
                    <span class="font-medium">Amy Elsner</span>
                    <i class="pi pi-chevron-up ml-auto"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-section shadow-2 relative lg:static border-bottom-1 surface-border" style="height:60px">
            <div class="flex">
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                    v-styleclass="{ selector: '#app-sidebar-2', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true}">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                </span>
            </div>
            <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>`,
            block3: `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-3" class="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 select-none" style="width:280px">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center px-5 flex-shrink-0" style="height:60px">
                <img src="images/blocks/logos/hyper-300.svg" alt="Image" height="30">
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-3 m-0">
                    <li>
                        <span class="block p-3 text-gray-600">FAVORITES</span>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-home mr-2"></i>
                            <span class="font-medium">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-bookmark mr-2"></i>
                            <span class="font-medium">Bookmarks</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                            <i class="pi pi-chart-line mr-2"></i>
                            <span class="font-medium">Reports</span>
                            <i class="pi pi-chevron-down ml-auto"></i>
                        </a>
                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Revenue</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-table mr-2"></i>
                                            <span class="font-medium">View</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-search mr-2"></i>
                                            <span class="font-medium">Search</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Expenses</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-users mr-2"></i>
                            <span class="font-medium">Team</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-comments mr-2"></i>
                            <span class="font-medium">Messages</span>
                            <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-calendar mr-2"></i>
                            <span class="font-medium">Calendar</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-cog mr-2"></i>
                            <span class="font-medium">Settings</span>
                        </a>
                    </li>
                </ul>
                <ul class="list-none p-3 m-0">
                    <li>
                        <span class="block p-3 text-600">APPLICATION</span>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-folder mr-2"></i>
                            <span class="font-medium">Projects</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-chart-bar mr-2"></i>
                            <span class="font-medium">Reports</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-cog mr-2"></i>
                            <span class="font-medium">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-none border-gray-800" />
                <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 border-round hover:bg-gray-800 text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px"/>
                    <span class="font-medium">Amy Elsner</span>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style="height:60px">
            <div class="flex">
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                    v-styleclass="{ selector: '#app-sidebar-3', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                </span>
            </div>
            <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
        </div>`,
            block4: `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-4" class="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 w-18rem lg:w-5rem select-none">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center justify-content-center flex-shrink-0 bg-indigo-500" style="height:60px">
                <img src="images/blocks/logos/hyper-light.svg" alt="Image" height="30">
            </div>
            <div class="mt-3 select-none">
                <ul class="list-none p-3 lg:py-3 lg:px-2 m-0">
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-home mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span class="font-medium inline lg:hidden">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-bookmark mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span class="font-medium inline lg:hidden">Bookmarks</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-users mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span class="font-medium inline lg:hidden">Team</span>
                        </a>
                    </li>
                    <li class="lg:relative">
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                            <i class="pi pi-chart-line mr-2 lg:mr-0 text-base lg:text-xl" v-badge></i>
                            <span class="font-medium inline lg:hidden">Reports</span>
                            <i class="pi pi-chevron-down ml-auto lg:hidden"></i>
                        </a>
                        <ul class="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static lg:absolute left-100 top-0 z-1 bg-gray-900 border-round-right shadow-none lg:shadow-2 w-full lg:w-15rem">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                                    v-styleclass="{ selector: '@next', toggleClass: 'hidden' }">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Revenue</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-table mr-2"></i>
                                            <span class="font-medium">View</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-search mr-2"></i>
                                            <span class="font-medium">Search</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Expenses</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-calendar mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span class="font-medium inline lg:hidden">Calendar</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-cog mr-2 lg:mr-0 text-base lg:text-xl"></i>
                            <span class="font-medium inline lg:hidden">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-2 border-top-1 border-none border-gray-800" />
                <a v-ripple class="my-3 mx-2 flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-300 hover:text-0
                    transition-duration-150 transition-colors p-ripple">
                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2 lg:mr-0" style="width: 32px; height: 32"/>
                    <span class="font-medium inline lg:hidden">Amy Elsner</span>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style="height:60px">
            <div class="flex">
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                    v-styleclass="{ selector: '#app-sidebar-4', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                </span>
            </div>
            <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>`,
            block5: `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-5" class="bg-gray-900 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 w-18rem lg:w-7rem select-none">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center justify-content-center flex-shrink-0 bg-orange-500" style="height:60px">
                <img src="images/blocks/logos/hyper-light.svg" alt="Image" height="30">
            </div>
            <div class="mt-3">
                <ul class="list-none p-3 m-0">
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Home</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-search mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Search</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Team</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                            <i class="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg" v-badge.danger></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Reports</span>
                            <i class="pi pi-chevron-down ml-auto lg:hidden"></i>
                        </a>
                        <ul class="list-none pl-3 pr-0 py-0 lg:p-3 m-0 lg:ml-3 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static border-round-right lg:absolute left-100 top-0 z-1 bg-gray-900 shadow-none lg:shadow-2 w-full lg:w-15rem">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"
                                    v-styleclass="{ selector: '@next', toggleClass: 'hidden' }">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Revenue</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-table mr-2"></i>
                                            <span class="font-medium">View</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-search mr-2"></i>
                                            <span class="font-medium">Search</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Expenses</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-calendar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Events</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Options</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-none border-gray-800" />
                <a v-ripple class="m-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2 lg:mr-0" style="width: 32px; height: 32px"/>
                    <span class="font-medium inline lg:hidden">Amy Elsner</span>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style="height:60px">
            <div class="flex">
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                    v-styleclass="{ selector: '#app-sidebar-5', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                </span>
            </div>
            <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>`,
            block6: `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-6" class="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none w-12rem bg-indigo-800 animation-duration-300 animation-ease-in-out">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center justify-content-center flex-shrink-0" style="height:60px">
                <img src="images/blocks/logos/bastion.svg" alt="Image" height="30">
            </div>
            <div class="my-3 p-3">
                <span class="p-input-icon-left">
                    <i class="pi pi-search text-indigo-50"></i>
                    <InputText type="text" class="appearance-none border-none bg-indigo-700 text-indigo-50 w-full" />
                </span>
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-3 m-0 flex flex-wrap">
                    <li class="w-6 text-center">
                        <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple" style="width:60px;height:60px;border-radius:10px">
                            <i class="pi pi-home text-2xl"></i>
                        </a>
                        <div class="mt-2 text-indigo-200 font-medium text-sm">Home</div>
                    </li>
                    <li class="w-6 text-center">
                        <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple" style="width:60px;height:60px;border-radius:10px">
                            <i class="pi pi-star-fill text-2xl"></i>
                        </a>
                        <div class="mt-2 text-indigo-200 font-medium text-sm">Favorites</div>
                    </li>
                    <li class="w-6 text-center mt-3">
                        <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple" style="width:60px;height:60px;border-radius:10px">
                            <i class="pi pi-users text-2xl"></i>
                        </a>
                        <div class="mt-2 text-indigo-200 font-medium text-sm">Users</div>
                    </li>
                    <li class="w-6 text-center mt-3">
                        <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple" style="width:60px;height:60px;border-radius:10px">
                            <i class="pi pi-comments text-2xl"></i>
                        </a>
                        <div class="mt-2 text-indigo-200 font-medium text-sm">Chart</div>
                    </li>
                    <li class="w-6 text-center mt-3">
                        <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple" style="width:60px;height:60px;border-radius:10px">
                            <i class="pi pi-calendar text-2xl"></i>
                        </a>
                        <div class="mt-2 text-indigo-200 font-medium text-sm">Calendar</div>
                    </li>
                    <li class="w-6 text-center mt-3">
                        <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple" style="width:60px;height:60px;border-radius:10px">
                            <i class="pi pi-cog text-2xl"></i>
                        </a>
                        <div class="mt-2 text-indigo-200 font-medium text-sm">Settings</div>
                    </li>
                </ul>
            </div>
            <div class="mt-auto border-top-1 border-indigo-700 p-3 flex justify-content-between">
                <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple" style="width:40px;height:40px;border-radius:10px">
                    <img src="images/blocks/avatars/circle/avatar-f-6.png" style="width: 24px; height: 24px"/>
                </a>
                <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple" style="width:40px;height:40px;border-radius:10px">
                    <i class="pi pi-slack text-xl"></i>
                </a>
                <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center border-2 border-indigo-500 hover:bg-indigo-700 active:bg-indigo-400 text-indigo-200 hover:text-indigo-100 transition-colors transition-duration-150 p-ripple" style="width:40px;height:40px;border-radius:10px">
                    <i class="pi pi-github text-xl"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-section shadow-2 relative lg:static border-bottom-1 surface-border" style="height:60px">
            <div class="flex">
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                    v-styleclass="{ selector: '#app-sidebar-6', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
            </div>
            <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <img src="images/blocks/avatars/circle/avatar-f-6.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>`,
            block7: `
<div class="min-h-screen flex relative lg:static" style="background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);">
    <div id="app-sidebar-7" class="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none animation-duration-300 animation-ease-in-out bg-white-alpha-50 border-white-alpha-30" style="width:280px;backdrop-filter: blur(10px);">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center px-5 flex-shrink-0" style="height:60px">
                <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="30">
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-3 m-0">
                    <li>
                        <div v-ripple class="p-3 flex align-items-center justify-content-between text-gray-600 cursor-pointer p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                            <span class="font-medium">FAVORITES</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-bookmark mr-2"></i>
                                    <span class="font-medium">Bookmarks</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px"
                                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Reports</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px"
                                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Revenue</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                    <i class="pi pi-table mr-2"></i>
                                                    <span class="font-medium">View</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                    <i class="pi pi-search mr-2"></i>
                                                    <span class="font-medium">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Expenses</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-users mr-2"></i>
                                    <span class="font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-none p-3 m-0">
                    <li>
                        <div v-ripple class="p-3 flex align-items-center justify-content-between text-gray-700 cursor-pointer p-ripple"
                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                            <span class="font-medium">APPLICATION</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-folder mr-2"></i>
                                    <span class="font-medium">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-chart-bar mr-2"></i>
                                    <span class="font-medium">Performance</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-auto border-top-1 border-white-alpha-40">
                <ul class="list-none p-2 m-0 hidden origin-bottom animation-duration-150 overflow-hidden animation-ease-in-out">
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                            <i class="pi pi-user mr-2"></i>
                            <span class="font-medium">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                            <i class="pi pi-cog mr-2"></i>
                            <span class="font-medium">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-purple-50 text-gray-800 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                            <i class="pi pi-sign-out mr-2"></i>
                            <span class="font-medium">Sign Out</span>
                        </a>
                    </li>
                </ul>
                <a v-ripple class="m-3 px-3 py-2 flex align-items-center hover:bg-purple-50 text-gray-800 cursor-pointer text-gray-800
                    transition-duration-150 transition-colors p-ripple" style="border-radius: 30px"
                    v-styleclass="{ selector: '@prev', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px"/>
                    <span class="font-medium">Amy Elsner</span>
                    <i class="pi pi-chevron-up ml-auto"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 border-bottom-1 relative lg:static bg-white-alpha-50 border-white-alpha-40" style="height:60px">
            <div class="flex">
                <a v-ripple class="cursor-pointer block lg:hidden text-gray-800 mr-3 mt-1 p-ripple"
                    v-styleclass="{ selector: '#app-sidebar-7', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true}">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
            </div>
            <a v-ripple class="cursor-pointer block lg:hidden text-gray-800 p-ripple"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static px-3 py-3 lg:py-0 mr-3 lg:mr-0" style="backdrop-filter: blur(10px)">
                <li class="mr-0 lg:mr-3">
                    <a v-ripple class="flex p-3 lg:p-2 align-items-center text-gray-800 hover:bg-purple-50 font-medium cursor-pointer
                        transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li class="mr-0 lg:mr-3">
                    <a v-ripple class="flex p-3 lg:p-2  align-items-center text-gray-800 hover:bg-purple-50 font-medium cursor-pointer
                        transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 lg:border-top-none lg:mt-0 mt-2 lg:pt-0 pt-2 border-white-alpha-40">
                    <a v-ripple class="flex p-3 lg:p-2  align-items-center hover:bg-purple-50 font-medium cursor-pointer
                        transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-gray-900 font-medium">Josephine Lillard</div>
                            <span class="text-gray-700 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="border-2 border-dashed border-round flex-auto bg-white-alpha-50 border-white-alpha-40">

            </div>
        </div>
    </div>
</div>`,
            block8: `
<div class="min-h-screen flex relative lg:static" style="background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);">
    <div id="app-sidebar-8" class="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none animation-duration-300 animation-ease-in-out border-white-alpha-10" style="width:280px; background-image: linear-gradient(60deg, #29323c 0%, #2f3844 100%);">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center px-5 flex-shrink-0" style="height:60px">
                <img src="images/blocks/logos/hyper-300.svg" alt="Image" height="30">
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-3 m-0">
                    <li>
                        <div v-ripple class="p-3 flex align-items-center justify-content-between text-gray-500 cursor-pointer p-ripple"
                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                            <span class="font-medium">FAVORITES</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-bookmark mr-2"></i>
                                    <span class="font-medium">Bookmarks</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px"
                                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Reports</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px"
                                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Revenue</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                    <i class="pi pi-table mr-2"></i>
                                                    <span class="font-medium">View</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                                    <i class="pi pi-search mr-2"></i>
                                                    <span class="font-medium">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Expenses</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-users mr-2"></i>
                                    <span class="font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-none p-3 m-0">
                    <li>
                        <div v-ripple class="p-3 flex align-items-center justify-content-between text-gray-500 cursor-pointer p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                            <span class="font-medium">APPLICATION</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-folder mr-2"></i>
                                    <span class="font-medium">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-chart-bar mr-2"></i>
                                    <span class="font-medium">Performance</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-auto border-top-1 border-white-alpha-10">
                <ul class="list-none p-2 m-0 hidden origin-bottom animation-duration-150 overflow-hidden animation-ease-in-out">
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-700 text-gray-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                            <i class="pi pi-user mr-2"></i>
                            <span class="font-medium">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-700 text-gray-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                            <i class="pi pi-cog mr-2"></i>
                            <span class="font-medium">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:bg-bluegray-700 text-gray-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                            <i class="pi pi-sign-out mr-2"></i>
                            <span class="font-medium">Sign Out</span>
                        </a>
                    </li>
                </ul>
                <a v-ripple class="m-3 px-3 py-2 flex align-items-center hover:bg-bluegray-700 text-gray-300 cursor-pointer text-gray-300
                    transition-duration-150 transition-colors p-ripple" style="border-radius: 30px"
                    v-styleclass="{ selector: '@prev', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px"/>
                    <span class="font-medium">Amy Elsner</span>
                    <i class="pi pi-chevron-up ml-auto"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 border-bottom-1 relative lg:static border-white-alpha-10" style="height:60px">
            <div class="flex">
                <a v-ripple class="cursor-pointer block lg:hidden text-gray-300 mr-3 mt-1 p-ripple"
                    v-styleclass="{ selector: '#app-sidebar-8', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
            </div>
            <a v-ripple class="cursor-pointer block lg:hidden text-gray-300 p-ripple"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static px-3 py-3 lg:py-0 mr-3 lg:mr-0" style="background-image: linear-gradient(60deg, #29323c 0%, #485563 100%); border-radius: 30px">
                <li class="mr-0 lg:mr-3">
                    <a v-ripple class="flex p-3 lg:p-2 align-items-center text-gray-300 hover:bg-bluegray-700 font-medium cursor-pointer
                        transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li class="mr-0 lg:mr-3">
                    <a v-ripple class="flex p-3 lg:p-2  align-items-center text-gray-300 hover:bg-bluegray-700 font-medium cursor-pointer
                        transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 lg:border-top-none lg:mt-0 mt-2 lg:pt-0 pt-2 border-white-alpha-10">
                    <a v-ripple class="flex p-3 lg:p-2  align-items-center hover:bg-bluegray-700 font-medium cursor-pointer
                        transition-duration-150 transition-colors p-ripple" style="border-radius: 30px">
                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-gray-300 font-medium">Josephine Lillard</div>
                            <span class="text-gray-500 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="border-2 border-dashed border-round flex-auto border-white-alpha-10">

            </div>
        </div>
    </div>
</div>`,
            block9: `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-9" class="h-screen surface-section hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center justify-content-center flex-shrink-0" style="height:60px">
                <img src="images/blocks/logos/hyper-cyan.svg" alt="Image" height="30">
            </div>
            <div class="mt-3">
                <ul class="list-none p-0 m-0">
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300 transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Home</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-search mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Search</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Team</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                            <i class="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl" v-badge.danger></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Reports</span>
                            <i class="pi pi-chevron-down ml-auto lg:hidden"></i>
                        </a>
                        <ul class="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static border-round-right lg:absolute left-100 top-0 z-1 surface-overlay shadow-none lg:shadow-2 w-full lg:w-15rem">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple"
                                    v-styleclass="{ selector: '@next', toggleClass: 'hidden' }">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Revenue</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-table mr-2"></i>
                                            <span class="font-medium">View</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-search mr-2"></i>
                                            <span class="font-medium">Search</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Expenses</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-calendar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Events</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Options</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                <a v-ripple class="m-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:surface-200 border-round text-600 transition-duration-150 transition-colors p-ripple">
                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2 lg:mr-0" style="width: 32px; height: 32px"/>
                    <span class="font-medium inline lg:hidden">Amy Elsner</span>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style="height:60px">
            <div class="flex">
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                v-styleclass="{ selector: '#app-sidebar-9', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                </span>
            </div>
            <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Amy Elsner</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>`,
            block10: `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-10" class="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none surface-ground border-right-1 lg:border-right-none surface-border" style="width:280px">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center px-5 flex-shrink-0" style="height:60px">
                <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="30">
            </div>
            <div class="overflow-y-auto">
                <div class="p-3">
                    <div class="p-input-icon-left w-full">
                        <i class="pi pi-search"></i>
                        <InputText type="text" class="border-1 surface-border w-full" placeholder="Search" style="border-radius: 30px" />
                    </div>
                </div>
                <ul class="list-none p-3 m-0">
                    <li>
                        <div class="p-3 flex align-items-center justify-content-between text-600r">
                            <span class="font-bold text-800">FAVORITES</span>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-blue-500 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bookmark mr-2"></i>
                                    <span class="font-medium">Bookmarks</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple"
                                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Reports</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple"
                                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Revenue</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-table mr-2"></i>
                                                    <span class="font-medium">View</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-search mr-2"></i>
                                                    <span class="font-medium">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Expenses</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-users mr-2"></i>
                                    <span class="font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-none p-3 m-0">
                    <li>
                        <div class="p-3 flex align-items-center justify-content-between text-600">
                            <span class="font-bold text-800">APPLICATION</span>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-folder mr-2"></i>
                                    <span class="font-medium">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-bar mr-2"></i>
                                    <span class="font-medium">Performance</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-200 transition-duration-150 transition-colors p-ripple">
                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px"/>
                    <span class="font-medium">Amy Elsner</span>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex align-items-center justify-content-between lg:justify-content-start px-5 relative lg:static" style="height:60px">
            <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                v-styleclass="{ selector: '#app-sidebar-10', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                <i class="pi pi-bars text-4xl"></i>
            </a>
            <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple">
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 mt-0 mb-0 ml-0 mr-3 lg:mr-0 hidden lg:flex lg:align-items-center select-none lg:flex-row border-round
                border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static surface-ground lg:w-full">
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-cog text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Settings</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-user text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Profile</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none ml-auto">
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-200 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Amy Elsner</div>
                            <span class="text-600 font-medium text-sm">Developer</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>`,
            block11: `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-11" class="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style="width:280px">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center px-5 flex-shrink-0" style="height:60px">
                <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="30">
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-3 m-0">
                    <li>
                        <div v-ripple class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer border-2 border-transparent border-rounded p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                            <span class="font-medium">FAVORITES</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors text-indigo-500 p-ripple" style="border-radius: 12px">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                    <i class="pi pi-bookmark mr-2 text-blue-500"></i>
                                    <span class="font-medium">Bookmarks</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px"
                                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                                    <i class="pi pi-chart-line mr-2 text-purple-500"></i>
                                    <span class="font-medium">Reports</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px"
                                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                                            <i class="pi pi-chart-line mr-2 text-purple-500"></i>
                                            <span class="font-medium">Revenue</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                                    <i class="pi pi-table text-purple-500 mr-2"></i>
                                                    <span class="font-medium">View</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                                    <i class="pi pi-search mr-2 text-purple-500"></i>
                                                    <span class="font-medium">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                            <i class="pi pi-chart-line mr-2 text-purple-500"></i>
                                            <span class="font-medium">Expenses</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                    <i class="pi pi-users mr-2 text-green-500"></i>
                                    <span class="font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                    <i class="pi pi-comments mr-2 text-cyan-500 "></i>
                                    <span class="font-medium">Messages</span>
                                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-indigo-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                    <i class="pi pi-calendar mr-2 text-teal-500 "></i>
                                    <span class="font-medium">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                    <i class="pi pi-cog mr-2 text-pink-500 "></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-none p-3 m-0">
                    <li>
                        <div v-ripple class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup'}">
                            <span class="font-medium">APPLICATIONS</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                    <i class="pi pi-discord mr-2 text-cyan-500"></i>
                                    <span class="font-medium">Discord</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                    <i class="pi pi-slack mr-2 text-purple-500"></i>
                                    <span class="font-medium">Slack</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-2 border-transparent hover:border-300 text-700 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                                    <i class="pi pi-github mr-2 text-blue-500"></i>
                                    <span class="font-medium">GitHub</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px"/>
                    <span class="font-medium">Amy Elsner</span>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style="height:60px">
            <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                v-styleclass="{ selector: '#app-sidebar-11', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                <i class="pi pi-bars text-4xl"></i>
            </a>
            <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row w-auto lg:w-full
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-cog text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Settings</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-user text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Profile</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-star text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Favorites</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-200 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-pencil text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Edit</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none ml-auto">
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto">

            </div>
        </div>
    </div>
</div>`,
            block12: `
<div class="min-h-screen flex flex-column surface-ground">
    <div class="surface-overlay py-3 px-6 flex align-items-center justify-content-between relative lg:static">
        <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
            v-styleclass="{ selector: '#app-sidebar-12', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
            <i class="pi pi-bars text-4xl"></i>
        </a>
        <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
        <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
            v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
            <i class="pi pi-ellipsis-v text-2xl"></i>
        </a>
        <ul class="list-none p-3 lg:p-0 m-0 lg:align-items-center select-none flex-column lg:flex-row absolute hidden lg:flex lg:static surface-overlay right-0 top-100 z-1 shadow-2 lg:shadow-none">
            <li class="lg:mr-1">
                <a v-ripple class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 lg:border-circle p-ripple">
                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span class="block lg:hidden font-medium">Inbox</span>
                </a>
            </li>
            <li class="lg:mr-1">
                <a v-ripple class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 lg:border-circle p-ripple">
                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                    <span class="block lg:hidden font-medium">Notifications</span>
                </a>
            </li>
            <li class="border-top-1 surface-border lg:border-top-none lg:mt-0 mt-2 lg:pt-0 pt-2">
                <a v-ripple class="flex p-3 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 lg:border-circle p-ripple">
                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 25px; height: 25px"/>
                    <div class="block lg:hidden">
                        <div class="text-900 font-medium">Josephine Lillard</div>
                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
    <ul class="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border">
        <li class="pr-3">
            <a class="cursor-pointer">
                <i class="pi pi-home text-600"></i>
            </a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-600"></i>
        </li>
        <li class="px-2">
            <a class="cursor-pointer text-600 white-space-nowrap">Favorites</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-600"></i>
        </li>
        <li class="px-2">
            <a class="cursor-pointer text-purple-500 white-space-nowrap">Dashboard</a>
        </li>
    </ul>
    <div class="flex relative lg:static p-5 flex-auto">
        <div id="app-sidebar-12" class="surface-card hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none shadow-2" style="width:280px;border-radius: 12px">
            <div class="flex flex-column h-full">
                <div class="overflow-y-auto">
                    <div class="p-3">
                        <div class="p-input-icon-left w-full">
                            <i class="pi pi-search"></i>
                            <InputText type="text" class="border-1 surface-border w-full" placeholder="Search" style="border-radius: 30px" />
                        </div>
                    </div>
                    <ul class="list-none px-3 pb-3 pt-0 m-0">
                        <li>
                            <div class="p-3 flex align-items-center justify-content-between text-600">
                                <span class="font-medium text-sm text-900">FAVORITES</span>
                            </div>
                            <ul class="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 bg-purple-50 transition-duration-150 transition-colors text-purple-500 border-purple-500 border-right-2 p-ripple">
                                        <i class="pi pi-home mr-2"></i>
                                        <span class="font-medium">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                        <i class="pi pi-bookmark mr-2"></i>
                                        <span class="font-medium">Bookmarks</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                        <i class="pi pi-chart-line mr-2"></i>
                                        <span class="font-medium">Reports</span>
                                        <i class="pi pi-chevron-down ml-auto"></i>
                                    </a>
                                    <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple"
                                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Revenue</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                                        <i class="pi pi-table mr-2"></i>
                                                        <span class="font-medium">View</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                                        <i class="pi pi-search mr-2"></i>
                                                        <span class="font-medium">Search</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Expenses</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                        <i class="pi pi-users mr-2"></i>
                                        <span class="font-medium">Team</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                        <i class="pi pi-comments mr-2"></i>
                                        <span class="font-medium">Messages</span>
                                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-purple-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-none p-3 m-0">
                        <li>
                            <div class="p-3 flex align-items-center justify-content-between text-600">
                                <span class="font-medium text-sm text-900">APPLICATION</span>
                            </div>
                            <ul class="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                        <i class="pi pi-folder mr-2"></i>
                                        <span class="font-medium">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                        <i class="pi pi-chart-bar mr-2"></i>
                                        <span class="font-medium">Performance</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 transition-duration-150 transition-colors border-right-2 border-transparent p-ripple">
                                        <i class="pi pi-cog mr-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="mt-auto border-top-1 surface-border p-3 flex justify-content-between">
                    <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle p-ripple" style="width:40px;height:40px">
                        <i class="pi pi-file text-xl"></i>
                    </a>
                    <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle p-ripple" style="width:40px;height:40px">
                        <i class="pi pi-star text-xl"></i>
                    </a>
                    <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center border-2 surface-border hover:surface-100 text-600 transition-colors transition-duration-150 border-circle p-ripple" style="width:40px;height:40px">
                        <i class="pi pi-cog text-xl"></i>
                    </a>
                    <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center bg-pink-500 text-white border-2 border-pink-600 hover:bg-pink-600 text-600 transition-colors transition-duration-150 border-circle p-ripple" style="width:40px;height:40px">
                        <i class="pi pi-sign-out text-xl"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="flex flex-column flex-auto">
            <div class="border-2 border-dashed surface-border border-round surface-section flex-auto lg:ml-5">

            </div>
        </div>
    </div>
</div>`,
            block13: `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-13" class="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-rightsurface-border select-none" style="width: 280px">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center justify-content-center px-3 py-5 border-bottom-1 surface-border" style="height: 60px">
                <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="30" />
            </div>
            <div class="flex justify-content-center py-5">
                <SelectButton :options="menuOptions" v-model="menuOption" optionLabel="name" optionValue="value" :unselectable="false"></SelectButton>
            </div>
            <div class="overflow-y-auto px-5 flex-1">
                <ul class="list-none p-0 m-0" v-if="menuOption === 0">
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hovtransition-duration-150 transition-colors text-primary p-ripple" style="border-radius: 12px">
                            <i class="pi pi-home mr-2"></i>
                            <span class="font-medium">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hovtransition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                            <i class="pi pi-bookmark mr-2"></i>
                            <span class="font-medium">Bookmarks</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hovtransition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                            <i class="pi pi-users mr-2"></i>
                            <span class="font-medium">Team</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hovtransition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                            <i class="pi pi-comments mr-2"></i>
                            <span class="font-medium">Messages</span>
                            <Badge value="5" class="ml-auto"></Badge>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hovtransition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                            <i class="pi pi-calendar mr-2"></i>
                            <span class="font-medium">Calendar</span>
                        </a>
                    </li>
                </ul>
                <ul class="list-none p-0 m-0" v-if="menuOption == 1">
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hovtransition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                            <i class="pi pi-discord mr-2"></i>
                            <span class="font-medium">Discord</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hovtransition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                            <i class="pi pi-slack mr-2"></i>
                            <span class="font-medium">Slack</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex align-items-center cursor-pointer p-3 text-700 border-2 border-transparent hover:surface-hovtransition-duration-150 transition-colors p-ripple" style="border-radius: 12px">
                            <i class="pi pi-github mr-2"></i>
                            <span class="font-medium">GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="border-top-1 surface-border p-3 flex justify-content-center column-gap-5">
                <a v-ripple class="cursor-pointer text-purple-500 inline-flex align-items-center justify-content-center hover:surface-1transition-colors transition-duration-150 w-3rem h-3rem border-circle p-ripple">
                    <i class="pi pi-chart-pie text-3xl"></i>
                </a>
                <a v-ripple class="cursor-pointer text-orange-500 inline-flex align-items-center justify-content-center hover:surface-1transition-colors transition-duration-150 w-3rem h-3rem border-circle p-ripple">
                    <i class="pi pi-bolt text-3xl"></i>
                </a>
                <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center hover:surface-100 transition-colotransition-duration-150 w-3rem h-3rem border-circle p-ripple">
                    <img src="images/blocks/avatars/circle/avatar-f-1.png" style="width: 42px; height: 42px" />
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column flex-auto surface-ground p-5">
        <div class="surface-card flex flex-column flex-auto border-round-xl p-5">
            <div class="flex justify-content-between align-items-center relative lg:static mb-5 column-gap-5">
                <div class="flex align-items-center">
                    <Button v-ripple class="p-link cursor-pointer inline-flex align-items-center justify-content-center lg:hidden text-700 mrp-ripple" v-styleclass="{ selector: '#app-sidebar-13', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClas'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                        <i class="pi pi-bars text-4xl"></i>
                    </Button>
                    <div class="font-medium">Welcome back, <span class="font-bold">Christina!</span> 👋</div>
                </div>
                <div>
                    <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple" v-styleclass="{ selector: '@next', enterClass: 'hiddenenterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                        <i class="pi pi-ellipsis-v text-2xl"></i>
                    </a>
                    <ul class="list-none p-3 lg:p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row lg:border-round-noborder-round-xl surface-overlay border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolulg:static">
                        <li>
                            <span class="p-input-icon-left lg:mr-3 mb-3 lg:mb-0">
                                <i class="pi pi-search"></i>
                                <InputText type="text" class="border-round-3xl w-8rem sm:w-full" placeholder="Search" />
                            </span>
                        </li>
                        <li>
                            <Button class="border-round-3xl white-space-nowrap w-full lg:w-auto" iconPos="right" v-ripple icon="pi pi-plulabel="Add Task"></Button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-2 border-dashed surface-border surface-50 flex-auto border-round-xl"></div>
        </div>
    </div>
</div>
`
        };
    }
};
</script>
