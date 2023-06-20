<template>
    <div>
        <BlockViewer header="Applicant Detail" :code="block1">
            <div class="surface-ground">
                <div class="surface-overlay py-3 px-6 border-bottom-1 surface-border flex align-items-center justify-content-between relative lg:static" style="min-height: 80px">
                    <img src="images/blocks/logos/bastion-700.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
                    <a class="cursor-pointer block lg:hidden text-700"
                        v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                        <i class="pi pi-bars text-4xl"></i>
                    </a>
                    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
                        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                            <li>
                                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                    <i class="pi pi-home mr-2"></i>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li class="lg:relative">
                                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                                    <i class="pi pi-users mr-2"></i>
                                    <span>Customers</span>
                                    <i class="pi pi-angle-down ml-auto lg:ml-3"></i>
                                </a>
                                <ul class="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                                    <li>
                                        <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                            <i class="pi pi-user-plus mr-2"></i>
                                            <span class="font-medium">Add New</span>
                                        </a>
                                    </li>
                                    <li class="relative">
                                        <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150"
                                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                                            <i class="pi pi-search mr-2"></i>
                                            <span class="font-medium">Search</span>
                                            <i class="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                        </a>
                                        <ul class="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                            <li>
                                                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                                    <i class="pi pi-shopping-cart mr-2"></i>
                                                    <span class="font-medium">Purchases</span>
                                                </a>
                                            </li>
                                            <li class="relative">
                                                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                                    <i class="pi pi-comments mr-2"></i>
                                                    <span class="font-medium">Messages</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span>Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span>Stats</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                            <li>
                                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li class="border-top-1 surface-border lg:border-top-none">
                                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                                    <div class="block lg:hidden">
                                        <div class="text-900 font-medium">Josephine Lillard</div>
                                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="surface-section px-6 pt-5">
                    <div class="text-3xl font-medium text-900 mb-4">Application</div>
                    <TabMenu :model="items"></TabMenu>
                </div>
                <div class="surface-section px-6 py-5">
                    <div class="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
                        <div class="flex align-items-start flex-column md:flex-row">
                            <img src="images/blocks/avatars/circle/avatar-f-1@2x.png" class="mr-5 mb-3 lg:mb-0" style="width:90px;height:90px" />
                            <div>
                                <span class="text-900 font-medium text-3xl">Kathryn Murphy</span>
                                <i class="pi pi-star text-2xl ml-4 text-yellow-500"></i>
                                <div class="flex align-items-center flex-wrap text-sm">
                                    <div class="mr-5 mt-3">
                                        <span class="font-medium text-500">FOLLOWERS</span>
                                        <div class="text-700 mt-2">333</div>
                                    </div>
                                    <div class="mr-5 mt-3">
                                        <span class="font-medium text-500">PROJECTS</span>
                                        <div class="text-700 mt-2">26</div>
                                    </div>
                                    <div class="mr-5 mt-3">
                                        <span class="font-medium text-500">COLLECTIONS</span>
                                        <div class="text-700 mt-2">17</div>
                                    </div>
                                    <div class="mt-3">
                                        <span class="font-medium text-500">SHOTS</span>
                                        <div class="text-700 mt-2">130</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 lg:mt-0">
                            <Button icon="pi pi-bookmark" class="p-button-rounded mr-2"></Button>
                            <Button icon="pi pi-heart" class="p-button-rounded p-button-success mr-2"></Button>
                            <Button icon="pi pi-list" class="p-button-rounded p-button-help"></Button>
                        </div>
                    </div>
                </div>
                <div class="px-6 py-5">
                    <div class="surface-card p-4 shadow-2 border-round">
                        <div class="font-medium text-3xl text-900 mb-3">Applicant Profile</div>
                        <div class="text-500 mb-5">Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</div>
                        <ul class="list-none p-0 m-0 border-top-1 border-300">
                            <li class="flex align-items-center py-3 px-2 flex-wrap surface-50">
                                <div class="text-500 w-full md:w-2 font-medium">Name</div>
                                <div class="text-900 w-full md:w-10">Elliot Alderson</div>
                            </li>
                            <li class="flex align-items-center py-3 px-2 flex-wrap">
                                <div class="text-500 w-full md:w-2 font-medium">Bio</div>
                                <div class="text-900 w-full md:w-10 line-height-3">Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Eget felis eget nunc lobortis mattis aliquam faucibus purus in.</div>
                            </li>
                            <li class="flex align-items-center py-3 px-2 flex-wrap surface-50">
                                <div class="text-500 w-full md:w-2 font-medium">Salary Expectation</div>
                                <div class="text-900 w-full md:w-10">$150,000</div>
                            </li>
                            <li class="flex align-items-center py-3 px-2 flex-wrap">
                                <div class="text-500 w-full md:w-2 font-medium">Skills</div>
                                <div class="text-900 w-full md:w-10">
                                    <Tag class="mr-2" value="Algorithms" :rounded="true"></Tag>
                                    <Tag class="mr-2" severity="success" value="Javascript" :rounded="true"></Tag>
                                    <Tag class="mr-2" severity="danger" value="Python" :rounded="true"></Tag>
                                    <Tag severity="warning" value="SQL" :rounded="true"></Tag>
                                </div>
                            </li>
                            <li class="flex align-items-center py-3 px-2 flex-wrap surface-50">
                                <div class="text-500 w-full md:w-2 font-medium">Repositories</div>
                                <div class="text-900 w-full md:w-10">
                                    <div class="grid mt-0 mr-0">
                                        <div class="col-12 md:col-6">
                                            <div class="p-3 border-1 border-300 border-round surface-0">
                                                <div class="text-900 mb-2">
                                                    <i class="pi pi-github mr-2"></i>
                                                    <span class="font-medium">PrimeVue</span>
                                                </div>
                                                <div class="text-700">The Most Powerful Vue UI Component Library</div>
                                            </div>
                                        </div>
                                        <div class="col-12 md:col-6">
                                            <div class="p-3 border-1 border-300 border-round surface-0">
                                                <div class="text-900 mb-2">
                                                    <i class="pi pi-github mr-2"></i>
                                                    <span class="font-medium">PrimeFaces</span>
                                                </div>
                                                <div class="text-700">Ultimate UI Component Suite for JavaServer Faces</div>
                                            </div>
                                        </div>
                                        <div class="col-12 md:col-6">
                                            <div class="p-3 border-1 border-300 border-round surface-0">
                                                <div class="text-900 mb-2">
                                                    <i class="pi pi-github mr-2"></i>
                                                    <span class="font-medium">PrimeNG</span>
                                                </div>
                                                <div class="text-700">The Most Complete Angular UI Component Library</div>
                                            </div>
                                        </div>
                                        <div class="col-12 md:col-6">
                                            <div class="p-3 border-1 border-300 border-round surface-0">
                                                <div class="text-900 mb-2">
                                                    <i class="pi pi-github mr-2"></i>
                                                    <span class="font-medium">PrimeReact</span>
                                                </div>
                                                <div class="text-700">Advanced UI Components for ReactJS</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="py-5 px-6">
                    <div class="font-medium text-3xl text-900 mb-3">Application Flow</div>
                    <ul class="list-none p-0 m-0 flex flex-column md:flex-row">
                        <li class="relative mr-0 md:mr-8 flex-auto">
                            <div class="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                                <i class="pi pi-check-circle text-green-500 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                                <div>
                                    <div class="text-900 font-medium mb-1">Applied</div>
                                    <span class="text-600 text-sm hidden md:block">Tempus iaculis urna id volutpat</span>
                                </div>
                            </div>
                            <div class="w-full absolute top-50 left-100 surface-300 hidden md:block" style="transform: translateY(-50%); height: 2px"></div>
                        </li>
                        <li class="relative mr-0 md:mr-8 flex-auto">
                            <div class="border-2 border-blue-500 surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                                <i class="pi pi-users text-blue-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                                <div>
                                    <div class="text-blue-600 font-medium mb-1">Interview</div>
                                    <span class="text-600 text-sm hidden md:block">Nisi vitae suscipit tellus</span>
                                </div>
                            </div>
                            <div class="w-full absolute top-50 left-100 surface-300 hidden md:block" style="transform: translateY(-50%); height: 2px"></div>
                        </li>
                        <li class="relative flex-auto">
                            <div class="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                                <i class="pi pi-check-circle text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                                <div>
                                    <div class="text-900 font-medium mb-1">Confirmation</div>
                                    <span class="text-600 text-sm hidden md:block">Sit amet est placerat in egestas erat</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="surface-section py-6 px-6 border-top-1 surface-border">
                    <div class="flex flex flex-column lg:flex-row lg:align-items-center justify-content-between">
                        <div class="flex align-items-center">
                            <img src="images/blocks/footer/footer-1.png" alt="Logo" width="50" height="50" class="mr-3">
                            <div class="text-700 font-bold text-5xl">Bastion</div>
                        </div>
                        <div class="flex flex-column lg:flex-row lg:align-items-center lg:my-0 my-4">
                            <a class="text-700 cursor-pointer mb-2 lg:mb-0">Brand Policy</a>
                            <a class="text-700 cursor-pointer mb-2 lg:mb-0 ml-0 lg:ml-4">Privacy Policy</a>
                            <a class="text-700 cursor-pointer mb-2 lg:mb-0 ml-0 lg:ml-4">Terms of Service</a>
                        </div>
                        <div class="flex align-items-center lg:justify-content-between">
                            <a class="cursor-pointer text-500">
                                <i class="pi pi-twitter text-xl"></i>
                            </a>
                            <a class="cursor-pointer text-500 ml-2">
                                <i class="pi pi-facebook text-xl"></i>
                            </a>
                            <a class="cursor-pointer text-500 ml-2">
                                <i class="pi pi-github text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'DetailScreen',
    data() {
        return {
            block1: `
<div class="surface-ground">
    <div class="surface-overlay py-3 px-6 border-bottom-1 surface-border flex align-items-center justify-content-between relative lg:static" style="min-height: 80px">
        <img src="images/blocks/logos/bastion-700.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
        <a class="cursor-pointer block lg:hidden text-700"
            v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
            <i class="pi pi-bars text-4xl"></i>
        </a>
        <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
            <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                <li>
                    <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-home mr-2"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li class="lg:relative">
                    <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                        <i class="pi pi-users mr-2"></i>
                        <span>Customers</span>
                        <i class="pi pi-angle-down ml-auto lg:ml-3"></i>
                    </a>
                    <ul class="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                        <li>
                            <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                <i class="pi pi-user-plus mr-2"></i>
                                <span class="font-medium">Add New</span>
                            </a>
                        </li>
                        <li class="relative">
                            <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150"
                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                                <i class="pi pi-search mr-2"></i>
                                <span class="font-medium">Search</span>
                                <i class="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                            </a>
                            <ul class="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                <li>
                                    <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                        <i class="pi pi-shopping-cart mr-2"></i>
                                        <span class="font-medium">Purchases</span>
                                    </a>
                                </li>
                                <li class="relative">
                                    <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                        <i class="pi pi-comments mr-2"></i>
                                        <span class="font-medium">Messages</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-calendar mr-2"></i>
                        <span>Calendar</span>
                    </a>
                </li>
                <li>
                    <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-chart-line mr-2"></i>
                        <span>Stats</span>
                    </a>
                </li>
            </ul>
            <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                <li>
                    <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="surface-section px-6 pt-5">
        <div class="text-3xl font-medium text-900 mb-4">Application</div>
        <TabMenu :model="items"></TabMenu>
    </div>
    <div class="surface-section px-6 py-5">
        <div class="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
            <div class="flex align-items-start flex-column md:flex-row">
                <img src="images/blocks/avatars/circle/avatar-f-1@2x.png" class="mr-5 mb-3 lg:mb-0" style="width:90px;height:90px" />
                <div>
                    <span class="text-900 font-medium text-3xl">Kathryn Murphy</span>
                    <i class="pi pi-star text-2xl ml-4 text-yellow-500"></i>
                    <div class="flex align-items-center flex-wrap text-sm">
                        <div class="mr-5 mt-3">
                            <span class="font-medium text-500">FOLLOWERS</span>
                            <div class="text-700 mt-2">333</div>
                        </div>
                        <div class="mr-5 mt-3">
                            <span class="font-medium text-500">PROJECTS</span>
                            <div class="text-700 mt-2">26</div>
                        </div>
                        <div class="mr-5 mt-3">
                            <span class="font-medium text-500">COLLECTIONS</span>
                            <div class="text-700 mt-2">17</div>
                        </div>
                        <div class="mt-3">
                            <span class="font-medium text-500">SHOTS</span>
                            <div class="text-700 mt-2">130</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3 lg:mt-0">
                <Button icon="pi pi-bookmark" class="p-button-rounded mr-2"></Button>
                <Button icon="pi pi-heart" class="p-button-rounded p-button-success mr-2"></Button>
                <Button icon="pi pi-list" class="p-button-rounded p-button-help"></Button>
            </div>
        </div>
    </div>
    <div class="px-6 py-5">
        <div class="surface-card p-4 shadow-2 border-round">
            <div class="font-medium text-3xl text-900 mb-3">Applicant Profile</div>
            <div class="text-500 mb-5">Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</div>
            <ul class="list-none p-0 m-0 border-top-1 border-300">
                <li class="flex align-items-center py-3 px-2 flex-wrap surface-50">
                    <div class="text-500 w-full md:w-2 font-medium">Name</div>
                    <div class="text-900 w-full md:w-10">Elliot Alderson</div>
                </li>
                <li class="flex align-items-center py-3 px-2 flex-wrap">
                    <div class="text-500 w-full md:w-2 font-medium">Bio</div>
                    <div class="text-900 w-full md:w-10 line-height-3">Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Eget felis eget nunc lobortis mattis aliquam faucibus purus in.</div>
                </li>
                <li class="flex align-items-center py-3 px-2 flex-wrap surface-50">
                    <div class="text-500 w-full md:w-2 font-medium">Salary Expectation</div>
                    <div class="text-900 w-full md:w-10">$150,000</div>
                </li>
                <li class="flex align-items-center py-3 px-2 flex-wrap">
                    <div class="text-500 w-full md:w-2 font-medium">Skills</div>
                    <div class="text-900 w-full md:w-10">
                        <Tag class="mr-2" value="Algorithms" :rounded="true"></Tag>
                        <Tag class="mr-2" severity="success" value="Javascript" :rounded="true"></Tag>
                        <Tag class="mr-2" severity="danger" value="Python" :rounded="true"></Tag>
                        <Tag severity="warning" value="SQL" :rounded="true"></Tag>
                    </div>
                </li>
                <li class="flex align-items-center py-3 px-2 flex-wrap surface-50">
                    <div class="text-500 w-full md:w-2 font-medium">Repositories</div>
                    <div class="text-900 w-full md:w-10">
                        <div class="grid mt-0 mr-0">
                            <div class="col-12 md:col-6">
                                <div class="p-3 border-1 border-300 border-round surface-0">
                                    <div class="text-900 mb-2">
                                        <i class="pi pi-github mr-2"></i>
                                        <span class="font-medium">PrimeVue</span>
                                    </div>
                                    <div class="text-700">The Most Powerful Vue UI Component Library</div>
                                </div>
                            </div>
                            <div class="col-12 md:col-6">
                                <div class="p-3 border-1 border-300 border-round surface-0">
                                    <div class="text-900 mb-2">
                                        <i class="pi pi-github mr-2"></i>
                                        <span class="font-medium">PrimeFaces</span>
                                    </div>
                                    <div class="text-700">Ultimate UI Component Suite for JavaServer Faces</div>
                                </div>
                            </div>
                            <div class="col-12 md:col-6">
                                <div class="p-3 border-1 border-300 border-round surface-0">
                                    <div class="text-900 mb-2">
                                        <i class="pi pi-github mr-2"></i>
                                        <span class="font-medium">PrimeNG</span>
                                    </div>
                                    <div class="text-700">The Most Complete Angular UI Component Library</div>
                                </div>
                            </div>
                            <div class="col-12 md:col-6">
                                <div class="p-3 border-1 border-300 border-round surface-0">
                                    <div class="text-900 mb-2">
                                        <i class="pi pi-github mr-2"></i>
                                        <span class="font-medium">PrimeReact</span>
                                    </div>
                                    <div class="text-700">Advanced UI Components for ReactJS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="py-5 px-6">
        <div class="font-medium text-3xl text-900 mb-3">Application Flow</div>
        <ul class="list-none p-0 m-0 flex flex-column md:flex-row">
            <li class="relative mr-0 md:mr-8 flex-auto">
                <div class="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                    <i class="pi pi-check-circle text-green-500 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                    <div>
                        <div class="text-900 font-medium mb-1">Applied</div>
                        <span class="text-600 text-sm hidden md:block">Tempus iaculis urna id volutpat</span>
                    </div>
                </div>
                <div class="w-full absolute top-50 left-100 surface-300 hidden md:block" style="transform: translateY(-50%); height: 2px"></div>
            </li>
            <li class="relative mr-0 md:mr-8 flex-auto">
                <div class="border-2 border-blue-500 surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                    <i class="pi pi-users text-blue-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                    <div>
                        <div class="text-blue-600 font-medium mb-1">Interview</div>
                        <span class="text-600 text-sm hidden md:block">Nisi vitae suscipit tellus</span>
                    </div>
                </div>
                <div class="w-full absolute top-50 left-100 surface-300 hidden md:block" style="transform: translateY(-50%); height: 2px"></div>
            </li>
            <li class="relative flex-auto">
                <div class="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                    <i class="pi pi-check-circle text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                    <div>
                        <div class="text-900 font-medium mb-1">Confirmation</div>
                        <span class="text-600 text-sm hidden md:block">Sit amet est placerat in egestas erat</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="surface-section py-6 px-6 border-top-1 surface-border">
        <div class="flex flex flex-column lg:flex-row lg:align-items-center justify-content-between">
            <div class="flex align-items-center">
                <img src="images/blocks/footer/footer-1.png" alt="Logo" width="50" height="50" class="mr-3">
                <div class="text-700 font-bold text-5xl">Bastion</div>
            </div>
            <div class="flex flex-column lg:flex-row lg:align-items-center lg:my-0 my-4">
                <a class="text-700 cursor-pointer mb-2 lg:mb-0">Brand Policy</a>
                <a class="text-700 cursor-pointer mb-2 lg:mb-0 ml-0 lg:ml-4">Privacy Policy</a>
                <a class="text-700 cursor-pointer mb-2 lg:mb-0 ml-0 lg:ml-4">Terms of Service</a>
            </div>
            <div class="flex align-items-center lg:justify-content-between">
                <a class="cursor-pointer text-500">
                    <i class="pi pi-twitter text-xl"></i>
                </a>
                <a class="cursor-pointer text-500 ml-2">
                    <i class="pi pi-facebook text-xl"></i>
                </a>
                <a class="cursor-pointer text-500 ml-2">
                    <i class="pi pi-github text-xl"></i>
                </a>
            </div>
        </div>
    </div>
</div>`,
            items: [
                {label: 'Overview', icon: 'pi pi-home'},
                {label: 'Members', icon: 'pi pi-users'},
                {label: 'Jobs', icon: 'pi pi-search'},
                {label: 'Profile', icon: 'pi pi-user'},
                {label: 'Settings', icon: 'pi pi-cog'}
            ]
        }
    }
}
</script>