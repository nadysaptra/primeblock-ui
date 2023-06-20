<template>
    <div>
        <div class="block-category-title">Stacked List</div>
        <BlockViewer header="Avatars with Links" :code="block1" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card shadow-2 border-round p-4">
                <div class="flex justify-content-between align-items-center mb-5">
                    <span class="text-xl text-900 font-medium">Team Members</span>
                    <div>
                        <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu1.toggle($event)"></Button>
                        <Menu ref="menu1" :popup="true" :model="items"></Menu>
                    </div>
                </div>
                <ul class="list-none p-0 m-0">
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div class="flex">
                            <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3" style="width: 45px; height: 45px" />
                            <div class="mr-0 md:mr-8">
                                <span class="block text-900 font-medium mb-1">Janette Hudson</span>
                                <div class="text-600">UI/UX Designer</div>
                            </div>
                        </div>
                        <div class="mt-2 md:mt-0 flex flex-nowrap">
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div class="flex">
                            <img src="images/blocks/avatars/circle/avatar-f-2.png" class="mr-3" style="width: 45px; height: 45px" />
                            <div class="mr-0 md:mr-8">
                                <span class="block text-900 font-medium mb-1">Theresa Webb Hudson</span>
                                <div class="text-600">UI/UX Designer</div>
                            </div>
                        </div>
                        <div class="mt-2 md:mt-0 flex flex-nowrap">
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div class="flex">
                            <img src="images/blocks/avatars/circle/avatar-f-3.png" class="mr-3" style="width: 45px; height: 45px" />
                            <div class="mr-0 md:mr-8">
                                <span class="block text-900 font-medium mb-1">Arlene McCoy</span>
                                <div class="text-600">UI/UX Designer</div>
                            </div>
                        </div>
                        <div class="mt-2 md:mt-0 flex flex-nowrap">
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div class="flex">
                            <img src="images/blocks/avatars/circle/avatar-m-1.png" class="mr-3" style="width: 45px; height: 45px" />
                            <div class="mr-0 md:mr-8">
                                <span class="block text-900 font-medium mb-1">Jacob Jones</span>
                                <div class="text-600">UI/UX Designer</div>
                            </div>
                        </div>
                        <div class="mt-2 md:mt-0 flex flex-nowrap">
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div class="flex">
                            <img src="images/blocks/avatars/circle/avatar-m-2.png" class="mr-3" style="width: 45px; height: 45px" />
                            <div class="mr-0 md:mr-8">
                                <span class="block text-900 font-medium mb-1">James Cooper</span>
                                <div class="text-600">UI/UX Designer</div>
                            </div>
                        </div>
                        <div class="mt-2 md:mt-0 flex flex-nowrap">
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                        </div>
                    </li>
                </ul>
            </div>
        </BlockViewer>

        <BlockViewer header="Stats with ProgressBars" :code="block2" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card shadow-2 border-round p-4">
                <div class="flex justify-content-between align-items-center mb-5">
                    <span class="text-xl text-900 font-medium">Best Selling Products</span>
                    <div>
                        <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu2.toggle($event)"></Button>
                        <Menu ref="menu2" :popup="true" :model="items"></Menu>
                    </div>
                </div>
                <ul class="list-none p-0 m-0">
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div class="mr-8 md:mr-8">
                            <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
                            <span class="text-600">Clothing</span>
                        </div>
                        <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                            <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                                <div class="bg-orange-500 h-full" style="width:50%"></div>
                            </div>
                            <span class="text-orange-500 ml-3 font-medium">%50</span>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div class="mr-8 md:mr-8">
                            <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
                            <span class="text-600">Accessories</span>
                        </div>
                        <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                            <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                                <div class="bg-cyan-500 h-full" style="width:16%"></div>
                            </div>
                            <span class="text-cyan-500 ml-3 font-medium">%16</span>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div class="mr-8 md:mr-8">
                            <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
                            <span class="text-600">Accessories</span>
                        </div>
                        <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                            <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                                <div class="bg-pink-500 h-full" style="width:67%"></div>
                            </div>
                            <span class="text-pink-500 ml-3 font-medium">%67</span>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div class="mr-8 md:mr-8">
                            <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
                            <span class="text-600">Office</span>
                        </div>
                        <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                            <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                                <div class="bg-green-500 h-full" style="width:35%"></div>
                            </div>
                            <span class="text-green-500 ml-3 font-medium">%35</span>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div class="mr-8 md:mr-8">
                            <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span>
                            <span class="text-600">Accessories</span>
                        </div>
                        <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                            <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                                <div class="bg-purple-500 h-full" style="width:75%"></div>
                            </div>
                            <span class="text-purple-500 ml-3 font-medium">%75</span>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div class="mr-8 md:mr-8">
                            <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span>
                            <span class="text-600">Clothing</span>
                        </div>
                        <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                            <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                                <div class="bg-teal-500 h-full" style="width:40%"></div>
                            </div>
                            <span class="text-teal-500 ml-3 font-medium">%40</span>
                        </div>
                    </li>
                </ul>
            </div>
        </BlockViewer>

        <BlockViewer header="Content Links with Actions" :code="block3" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card shadow-2 border-round p-4">
                <div class="text-xl text-900 font-medium mb-5">Latest News</div>
                <ul class="list-none p-0 m-0">
                    <li class="pb-3 border-bottom-1 surface-border">
                        <div class="font-medium text-900 mb-2">Aenean euismod elementum</div>
                        <div class="line-height-3 text-600" style="max-width: 30rem">Vitae turpis massa sed elementum tempus egestas sed sed risus. 
                            In metus vulputate eu scelerisque felis imperdiet proin.</div>
                    </li>
                    <li class="py-3 border-bottom-1 surface-border">
                        <div class="font-medium text-900 mb-2">In iaculis nunc sed augue lacus</div>
                        <div class="line-height-3 text-600" style="max-width: 30rem">Viverra vitae congue. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. 
                            Elementum eu facilisis sed odio morbi.</div>
                    </li>
                    <li class="py-3 border-bottom-1 surface-border">
                        <div class="font-medium text-900 mb-2">Proin sagittis nisl rhoncus</div>
                        <div class="line-height-3 text-600" style="max-width: 30rem">In pellentesque massa placerat duis ultricies lacus. Ac feugiat sed lectus vestibulum mattis ullamcorper.</div>
                    </li>
                </ul>
                <div class="flex justify-content-between pt-3">
                    <Button label="Clear All" class="p-button-outlined p-button-secondary w-6 mr-2"></Button>
                    <Button label="New Entry" class="p-button-outlined w-6 ml-2"></Button>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Colored Rows" :code="block4" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card shadow-2 border-round p-4">
                <div class="flex justify-content-between align-items-center mb-5">
                    <span class="text-xl text-900 font-medium">Recent Invoices</span>
                    <div>
                        <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu3.toggle($event)"></Button>
                        <Menu ref="menu3" :popup="true" :model="items"></Menu>
                    </div>
                </div>
                <ul class="list-none p-0 m-0">
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style="border-radius: 10px; background-color: rgba(234,179,10,.1); border-color:rgba(234,179,10,.5)">
                        <div>
                            <div>
                                <span class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1" style="border-color:rgba(234,179,10,.5)">
                                    <i class="pi pi-file text-yellow-700"></i>
                                </span>
                                <span class="text-yellow-700 font-bold ml-2">Jenny Wilson</span>
                            </div>
                            <p class="text-yellow-700 mt-2 mb-0">Due <span class="font-medium">10/09/2021</span></p>
                        </div>
                        <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                            <span class="bg-yellow-400 text-yellow-900 font-bold text-sm py-1 px-2" style="border-radius: 10px">PENDING</span>
                            <div class="text-right ml-3">
                                <span class="text-yellow-700 font-bold">120.00</span>
                                <p class="mt-1 mb-0 text-yellow-700">EUR</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style="border-radius: 10px; background-color: rgba(33,197,94,.1); border-color:rgba(33,197,94,.5)">
                        <div>
                            <div>
                                <span class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1" style="border-color:rgba(33,197,94,.5)">
                                    <i class="pi pi-file text-green-600"></i>
                                </span>
                                <span class="text-green-700 font-bold ml-2">Dianne Russell</span>
                            </div>
                            <p class="text-green-700 mt-2 mb-0">Due <span class="font-medium">21/10/2021</span></p>
                        </div>
                        <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                            <span class="bg-green-400 text-green-900 font-bold text-sm py-1 px-2" style="border-radius: 10px">PAID</span>
                            <div class="text-right ml-3">
                                <span class="text-green-700 font-bold">82.50</span>
                                <p class="mt-1 mb-0 text-green-700">EUR</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style="border-radius: 10px; background-color: rgba(33,197,94,.1); border-color:rgba(33,197,94,.5)">
                        <div>
                            <div>
                                <span class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1" style="border-color:rgba(33,197,94,.5)">
                                    <i class="pi pi-file text-green-600"></i>
                                </span>
                                <span class="text-green-700 font-bold ml-2">Jerome Bell</span>
                            </div>
                            <p class="text-green-700 mt-2 mb-0">Due <span class="font-medium">20/12/2021</span></p>
                        </div>
                        <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                            <span class="bg-green-400 text-green-900 font-bold text-sm py-1 px-2" style="border-radius: 10px">PAID</span>
                            <div class="text-right ml-3">
                                <span class="text-green-700 font-bold">250.00</span>
                                <p class="mt-1 mb-0 text-green-700">EUR</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style="border-radius: 10px; background-color: rgba(330,81,60,.1); border-color:rgba(330,81,60,.5)">
                        <div>
                            <div>
                                <span class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1" style="border-color:rgba(330,81,60,.5)">
                                    <i class="pi pi-file text-pink-500"></i>
                                </span>
                                <span class="text-pink-500 font-bold ml-2">Courtney Henry</span>
                            </div>
                            <p class="text-pink-500 mt-2 mb-0">Due <span class="font-medium">01/05/2021</span></p>
                        </div>
                        <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                            <span class="bg-pink-400 text-pink-50 font-bold text-sm py-1 px-2" style="border-radius: 10px">UNPAID</span>
                            <div class="text-right ml-3">
                                <span class="text-pink-500 font-bold">60.00</span>
                                <p class="mt-1 mb-0 text-pink-500">EUR</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </BlockViewer>

        <BlockViewer header="Image, Meta and Rating" :code="block5" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card shadow-2 border-round p-4">
                <div class="flex justify-content-between align-items-center mb-5">
                    <span class="text-xl text-900 font-medium">Top Downloads</span>
                    <div>
                        <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu4.toggle($event)"></Button>
                        <Menu ref="menu4" :popup="true" :model="items"></Menu>
                    </div>
                    
                </div>
                <ul class="list-none p-0 m-0">
                    <li class="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
                        <div class="flex align-items-center">
                            <span class="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style="width:58px; height: 58px; border-radius: 10px">
                                <img src="images/blocks/logos/logo-pwd.png" style="width: 30px; height: 30px;" />
                            </span>
                            <div>
                                <div class="text-900 font-medium text-xl mb-2">1Password</div>
                                <div class="flex align-items-center">
                                    <i class="pi pi-apple text-600 mr-2"></i>
                                    <span class="text-600">App Store</span>
                                    <span class="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$12.24</span>
                                </div>
                            </div>
                        </div>
                        <div class="sm:text-right mt-3 md:mt-0">
                            <Rating v-model="rating1" :readonly="true" :stars="5" :cancel="false"></Rating>
                            <div class="text-sm text-600 mt-2">10K Reviews</div>
                        </div>
                    </li>
                    <li class="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
                        <div class="flex align-items-center">
                            <span class="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style="width:58px; height: 58px; border-radius: 10px">
                                <img src="images/blocks/logos/logo-evernote.png" style="width: 30px; height: 30px;" />
                            </span>
                            <div>
                                <div class="text-900 font-medium text-xl mb-2">Evernote</div>
                                <div class="flex align-items-center">
                                    <i class="pi pi-apple text-600 mr-2"></i>
                                    <span class="text-600">App Store</span>
                                    <span class="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$20.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="sm:text-right mt-3 md:mt-0">
                            <Rating v-model="rating2" :readonly="true" :stars="5" :cancel="false"></Rating>
                            <div class="text-sm text-600 mt-2">2K Reviews</div>
                        </div>
                    </li>
                    <li class="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
                        <div class="flex align-items-center">
                            <span class="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style="width:58px; height: 58px; border-radius: 10px">
                                <img src="images/blocks/logos/logo-dropbox.png" style="width: 30px; height: 30px;" />
                            </span>
                            <div>
                                <div class="text-900 font-medium text-xl mb-2">Dropbox</div>
                                <div class="flex align-items-center">
                                    <i class="pi pi-microsoft text-600 mr-2"></i>
                                    <span class="text-600">Microsoft Store</span>
                                    <span class="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$9.50</span>
                                </div>
                            </div>
                        </div>
                        <div class="sm:text-right mt-3 md:mt-0">
                            <Rating v-model="rating3" :readonly="true" :stars="5" :cancel="false"></Rating>
                            <div class="text-sm text-600 mt-2">3K Reviews</div>
                        </div>
                    </li>
                    <li class="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
                        <div class="flex align-items-center">
                            <span class="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style="width:58px; height: 58px; border-radius: 10px">
                                <img src="images/blocks/logos/logo-slack.png" style="width: 30px; height: 30px;" />
                            </span>
                            <div>
                                <div class="text-900 font-medium text-xl mb-2">Slack</div>
                                <div class="flex align-items-center">
                                    <i class="pi pi-microsoft text-600 mr-2"></i>
                                    <span class="text-600">Microsoft Store</span>
                                    <span class="inline-flex p-1 bg-purple-100 text-purple-600 font-medium text-sm border-round ml-3">FREE</span>
                                </div>
                            </div>
                        </div>
                        <div class="sm:text-right mt-3 md:mt-0">
                            <Rating v-model="rating4" :readonly="true" :stars="5" :cancel="false"></Rating>
                            <div class="text-sm text-600 mt-2">5K Reviews</div>
                        </div>
                    </li>
                    <li class="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center">
                        <div class="flex align-items-center">
                            <span class="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style="width:58px; height: 58px; border-radius: 10px">
                                <img src="images/blocks/logos/logo-spotify.png" style="width: 30px; height: 30px;" />
                            </span>
                            <div>
                                <div class="text-900 font-medium text-xl mb-2">Spotify</div>
                                <div class="flex align-items-center">
                                    <i class="pi pi-google text-600 mr-2"></i>
                                    <span class="text-600">Play Store</span>
                                    <span class="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$19.90</span>
                                </div>
                            </div>
                        </div>
                        <div class="sm:text-right mt-3 md:mt-0">
                            <Rating v-model="rating5" :readonly="true" :stars="5" :cancel="false"></Rating>
                            <div class="text-sm text-600 mt-2">5K Reviews</div>
                        </div>
                    </li>
                </ul>
            </div>
        </BlockViewer>

        <BlockViewer header="With Graph" :code="block6" containerClass="px-4 py-8 md:px-6 lg:px-8">
            <div class="surface-card shadow-2 border-round p-4">
                <div class="flex justify-content-between align-items-center mb-5">
                    <span class="text-xl text-900 font-medium">Browsers</span>
                    <div>
                        <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu5.toggle($event)"></Button>
                        <Menu ref="menu5" :popup="true" :model="items"></Menu>
                    </div>
                </div>
                <ul class="list-none p-0 m-0">
                    <li class="mb-4 border-bottom-1 surface-border py-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
                        <div class="inline-flex align-items-center">
                            <img src="images/blocks/logos/chrome.svg" class="mr-3" style="width: 32px; height: 32px" />
                            <span class="text-900 font-medium">Chrome</span>
                        </div>
                        <div class="flex align-items-center mt-3 md:mt-3">
                            <span class="text-900 font-medium mr-3 text-xl">%70</span>
                            <Knob v-model="knob1" :readonly="true" :size="50" valueColor="orange" :showValue="false"></Knob>
                        </div>
                    </li>
                    <li class="mb-4 border-bottom-1 surface-border py-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
                        <div class="inline-flex align-items-center">
                            <img src="images/blocks/logos/firefox.svg" class="mr-3" style="width: 32px; height: 32px" />
                            <span class="text-900 font-medium">Firefox</span>
                        </div>
                        <div class="flex align-items-center mt-3 md:mt-3">
                            <span class="text-900 font-medium mr-3 text-xl">%40</span>
                            <Knob v-model="knob2" :readonly="true" :size="50" valueColor="royalblue" :showValue="false"></Knob>
                        </div>
                    </li>
                    <li class="mb-4 border-bottom-1 surface-border py-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
                        <div class="inline-flex align-items-center">
                            <img src="images/blocks/logos/safari.svg" class="mr-3" style="width: 32px; height: 32px" />
                            <span class="text-900 font-medium">Safari</span>
                        </div>
                        <div class="flex align-items-center mt-3 md:mt-3">
                            <span class="text-900 font-medium mr-3 text-xl">%20</span>
                            <Knob v-model="knob3" :readonly="true" :size="50" valueColor="slategray" :showValue="false"></Knob>
                        </div>
                    </li>
                    <li class="mb-4 border-bottom-1 surface-border py-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
                        <div class="inline-flex align-items-center">
                            <img src="images/blocks/logos/opera.svg" class="mr-3" style="width: 32px; height: 32px" />
                            <span class="text-900 font-medium">Opera</span>
                        </div>
                        <div class="flex align-items-center mt-3 md:mt-3">
                            <span class="text-900 font-medium mr-3 text-xl">%10</span>
                            <Knob v-model="knob4" :readonly="true" :size="50" valueColor="darkslateblue" :showValue="false"></Knob>
                        </div>
                    </li>
                    <li class="mb-4 border-bottom-1 surface-border py-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
                        <div class="inline-flex align-items-center">
                            <img src="images/blocks/logos/edge.svg" class="mr-3" style="width: 32px; height: 32px" />
                            <span class="text-900 font-medium">Edge</span>
                        </div>
                        <div class="flex align-items-center mt-3 md:mt-3">
                            <span class="text-900 font-medium mr-3 text-xl">%8</span>
                            <Knob v-model="knob5" :readonly="true" :size="50" valueColor="mediumpurple" :showValue="false"></Knob>
                        </div>
                    </li>
                </ul>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'StackedList',
    data() {
        return {
            rating1: 3,
            rating2: 2,
            rating3: 4,
            rating4: 3,
            rating5: 3,
            knob1: 70,
            knob2: 40,
            knob3: 20,
            knob4: 70,
            knob5: 8,
            items: [
                {label: 'Add New', icon: 'pi pi-fw pi-plus'},
                {label: 'Remove', icon: 'pi pi-fw pi-minus'}
            ],
            block1: `
<div class="surface-card shadow-2 border-round p-4">
    <div class="flex justify-content-between align-items-center mb-5">
        <span class="text-xl text-900 font-medium">Team Members</span>
        <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu1.toggle($event)"></Button>
            <Menu ref="menu1" :popup="true" :model="items"></Menu>
        </div>
    </div>
    <ul class="list-none p-0 m-0">
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="flex">
                <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3" style="width: 45px; height: 45px" />
                <div class="mr-0 md:mr-8">
                    <span class="block text-900 font-medium mb-1">Janette Hudson</span>
                    <div class="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div class="mt-2 md:mt-0 flex flex-nowrap">
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="flex">
                <img src="images/blocks/avatars/circle/avatar-f-2.png" class="mr-3" style="width: 45px; height: 45px" />
                <div class="mr-0 md:mr-8">
                    <span class="block text-900 font-medium mb-1">Theresa Webb Hudson</span>
                    <div class="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div class="mt-2 md:mt-0 flex flex-nowrap">
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="flex">
                <img src="images/blocks/avatars/circle/avatar-f-3.png" class="mr-3" style="width: 45px; height: 45px" />
                <div class="mr-0 md:mr-8">
                    <span class="block text-900 font-medium mb-1">Arlene McCoy</span>
                    <div class="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div class="mt-2 md:mt-0 flex flex-nowrap">
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="flex">
                <img src="images/blocks/avatars/circle/avatar-m-1.png" class="mr-3" style="width: 45px; height: 45px" />
                <div class="mr-0 md:mr-8">
                    <span class="block text-900 font-medium mb-1">Jacob Jones</span>
                    <div class="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div class="mt-2 md:mt-0 flex flex-nowrap">
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="flex">
                <img src="images/blocks/avatars/circle/avatar-m-2.png" class="mr-3" style="width: 45px; height: 45px" />
                <div class="mr-0 md:mr-8">
                    <span class="block text-900 font-medium mb-1">James Cooper</span>
                    <div class="text-600">UI/UX Designer</div>
                </div>
            </div>
            <div class="mt-2 md:mt-0 flex flex-nowrap">
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
            </div>
        </li>
    </ul>
</div>`,
            block2: `
<div class="surface-card shadow-2 border-round p-4">
    <div class="flex justify-content-between align-items-center mb-5">
        <span class="text-xl text-900 font-medium">Best Selling Products</span>
        <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu2.toggle($event)"></Button>
            <Menu ref="menu2" :popup="true" :model="items"></Menu>
        </div>
    </div>
    <ul class="list-none p-0 m-0">
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="mr-8 md:mr-8">
                <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
                <span class="text-600">Clothing</span>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                    <div class="bg-orange-500 h-full" style="width:50%"></div>
                </div>
                <span class="text-orange-500 ml-3 font-medium">%50</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="mr-8 md:mr-8">
                <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
                <span class="text-600">Accessories</span>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                    <div class="bg-cyan-500 h-full" style="width:16%"></div>
                </div>
                <span class="text-cyan-500 ml-3 font-medium">%16</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="mr-8 md:mr-8">
                <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
                <span class="text-600">Accessories</span>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                    <div class="bg-pink-500 h-full" style="width:67%"></div>
                </div>
                <span class="text-pink-500 ml-3 font-medium">%67</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="mr-8 md:mr-8">
                <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
                <span class="text-600">Office</span>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                    <div class="bg-green-500 h-full" style="width:35%"></div>
                </div>
                <span class="text-green-500 ml-3 font-medium">%35</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="mr-8 md:mr-8">
                <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span>
                <span class="text-600">Accessories</span>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                    <div class="bg-purple-500 h-full" style="width:75%"></div>
                </div>
                <span class="text-purple-500 ml-3 font-medium">%75</span>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div class="mr-8 md:mr-8">
                <span class="inline-block text-900 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span>
                <span class="text-600">Clothing</span>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                <div class="surface-300 border-round overflow-hidden" style="height:8px; width: 200px">
                    <div class="bg-teal-500 h-full" style="width:40%"></div>
                </div>
                <span class="text-teal-500 ml-3 font-medium">%40</span>
            </div>
        </li>
    </ul>
</div>`,
            block3: `
<div class="surface-card shadow-2 border-round p-4">
    <div class="text-xl text-900 font-medium mb-5">Latest News</div>
    <ul class="list-none p-0 m-0">
        <li class="pb-3 border-bottom-1 surface-border">
            <div class="font-medium text-900 mb-2">Aenean euismod elementum</div>
            <div class="line-height-3 text-600" style="max-width: 30rem">Vitae turpis massa sed elementum tempus egestas sed sed risus. 
                In metus vulputate eu scelerisque felis imperdiet proin.</div>
        </li>
        <li class="py-3 border-bottom-1 surface-border">
            <div class="font-medium text-900 mb-2">In iaculis nunc sed augue lacus</div>
            <div class="line-height-3 text-600" style="max-width: 30rem">Viverra vitae congue. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. 
                Elementum eu facilisis sed odio morbi.</div>
        </li>
        <li class="py-3 border-bottom-1 surface-border">
            <div class="font-medium text-900 mb-2">Proin sagittis nisl rhoncus</div>
            <div class="line-height-3 text-600" style="max-width: 30rem">In pellentesque massa placerat duis ultricies lacus. Ac feugiat sed lectus vestibulum mattis ullamcorper.</div>
        </li>
    </ul>
    <div class="flex justify-content-between pt-3">
        <Button label="Clear All" class="p-button-outlined p-button-secondary w-6 mr-2"></Button>
        <Button label="New Entry" class="p-button-outlined w-6 ml-2"></Button>
    </div>
</div>`,
            block4: `
<div class="surface-card shadow-2 border-round p-4">
    <div class="flex justify-content-between align-items-center mb-5">
        <span class="text-xl text-900 font-medium">Recent Invoices</span>
        <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu3.toggle($event)"></Button>
            <Menu ref="menu3" :popup="true" :model="items"></Menu>
        </div>
    </div>
    <ul class="list-none p-0 m-0">
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style="border-radius: 10px; background-color: rgba(234,179,10,.1); border-color:rgba(234,179,10,.5)">
            <div>
                <div>
                    <span class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1" style="border-color:rgba(234,179,10,.5)">
                        <i class="pi pi-file text-yellow-700"></i>
                    </span>
                    <span class="text-yellow-700 font-bold ml-2">Jenny Wilson</span>
                </div>
                <p class="text-yellow-700 mt-2 mb-0">Due <span class="font-medium">10/09/2021</span></p>
            </div>
            <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                <span class="bg-yellow-400 text-yellow-900 font-bold text-sm py-1 px-2" style="border-radius: 10px">PENDING</span>
                <div class="text-right ml-3">
                    <span class="text-yellow-700 font-bold">120.00</span>
                    <p class="mt-1 mb-0 text-yellow-700">EUR</p>
                </div>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style="border-radius: 10px; background-color: rgba(33,197,94,.1); border-color:rgba(33,197,94,.5)">
            <div>
                <div>
                    <span class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1" style="border-color:rgba(33,197,94,.5)">
                        <i class="pi pi-file text-green-600"></i>
                    </span>
                    <span class="text-green-700 font-bold ml-2">Dianne Russell</span>
                </div>
                <p class="text-green-700 mt-2 mb-0">Due <span class="font-medium">21/10/2021</span></p>
            </div>
            <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                <span class="bg-green-400 text-green-900 font-bold text-sm py-1 px-2" style="border-radius: 10px">PAID</span>
                <div class="text-right ml-3">
                    <span class="text-green-700 font-bold">82.50</span>
                    <p class="mt-1 mb-0 text-green-700">EUR</p>
                </div>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style="border-radius: 10px; background-color: rgba(33,197,94,.1); border-color:rgba(33,197,94,.5)">
            <div>
                <div>
                    <span class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1" style="border-color:rgba(33,197,94,.5)">
                        <i class="pi pi-file text-green-600"></i>
                    </span>
                    <span class="text-green-700 font-bold ml-2">Jerome Bell</span>
                </div>
                <p class="text-green-700 mt-2 mb-0">Due <span class="font-medium">20/12/2021</span></p>
            </div>
            <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                <span class="bg-green-400 text-green-900 font-bold text-sm py-1 px-2" style="border-radius: 10px">PAID</span>
                <div class="text-right ml-3">
                    <span class="text-green-700 font-bold">250.00</span>
                    <p class="mt-1 mb-0 text-green-700">EUR</p>
                </div>
            </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style="border-radius: 10px; background-color: rgba(330,81,60,.1); border-color:rgba(330,81,60,.5)">
            <div>
                <div>
                    <span class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1" style="border-color:rgba(330,81,60,.5)">
                        <i class="pi pi-file text-pink-500"></i>
                    </span>
                    <span class="text-pink-500 font-bold ml-2">Courtney Henry</span>
                </div>
                <p class="text-pink-500 mt-2 mb-0">Due <span class="font-medium">01/05/2021</span></p>
            </div>
            <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                <span class="bg-pink-400 text-pink-50 font-bold text-sm py-1 px-2" style="border-radius: 10px">UNPAID</span>
                <div class="text-right ml-3">
                    <span class="text-pink-500 font-bold">60.00</span>
                    <p class="mt-1 mb-0 text-pink-500">EUR</p>
                </div>
            </div>
        </li>
    </ul>
</div>`,
            block5: `
<div class="surface-card shadow-2 border-round p-4">
    <div class="flex justify-content-between align-items-center mb-5">
        <span class="text-xl text-900 font-medium">Top Downloads</span>
        <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu4.toggle($event)"></Button>
            <Menu ref="menu4" :popup="true" :model="items"></Menu>
        </div>
        
    </div>
    <ul class="list-none p-0 m-0">
        <li class="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
            <div class="flex align-items-center">
                <span class="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style="width:58px; height: 58px; border-radius: 10px">
                    <img src="images/blocks/logos/logo-pwd.png" style="width: 30px; height: 30px;" />
                </span>
                <div>
                    <div class="text-900 font-medium text-xl mb-2">1Password</div>
                    <div class="flex align-items-center">
                        <i class="pi pi-apple text-600 mr-2"></i>
                        <span class="text-600">App Store</span>
                        <span class="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$12.24</span>
                    </div>
                </div>
            </div>
            <div class="sm:text-right mt-3 md:mt-0">
                <Rating v-model="rating1" :readonly="true" :stars="5" :cancel="false"></Rating>
                <div class="text-sm text-600 mt-2">10K Reviews</div>
            </div>
        </li>
        <li class="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
            <div class="flex align-items-center">
                <span class="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style="width:58px; height: 58px; border-radius: 10px">
                    <img src="images/blocks/logos/logo-evernote.png" style="width: 30px; height: 30px;" />
                </span>
                <div>
                    <div class="text-900 font-medium text-xl mb-2">Evernote</div>
                    <div class="flex align-items-center">
                        <i class="pi pi-apple text-600 mr-2"></i>
                        <span class="text-600">App Store</span>
                        <span class="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$20.00</span>
                    </div>
                </div>
            </div>
            <div class="sm:text-right mt-3 md:mt-0">
                <Rating v-model="rating2" :readonly="true" :stars="5" :cancel="false"></Rating>
                <div class="text-sm text-600 mt-2">2K Reviews</div>
            </div>
        </li>
        <li class="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
            <div class="flex align-items-center">
                <span class="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style="width:58px; height: 58px; border-radius: 10px">
                    <img src="images/blocks/logos/logo-dropbox.png" style="width: 30px; height: 30px;" />
                </span>
                <div>
                    <div class="text-900 font-medium text-xl mb-2">Dropbox</div>
                    <div class="flex align-items-center">
                        <i class="pi pi-microsoft text-600 mr-2"></i>
                        <span class="text-600">Microsoft Store</span>
                        <span class="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$9.50</span>
                    </div>
                </div>
            </div>
            <div class="sm:text-right mt-3 md:mt-0">
                <Rating v-model="rating3" :readonly="true" :stars="5" :cancel="false"></Rating>
                <div class="text-sm text-600 mt-2">3K Reviews</div>
            </div>
        </li>
        <li class="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center mb-5">
            <div class="flex align-items-center">
                <span class="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style="width:58px; height: 58px; border-radius: 10px">
                    <img src="images/blocks/logos/logo-slack.png" style="width: 30px; height: 30px;" />
                </span>
                <div>
                    <div class="text-900 font-medium text-xl mb-2">Slack</div>
                    <div class="flex align-items-center">
                        <i class="pi pi-microsoft text-600 mr-2"></i>
                        <span class="text-600">Microsoft Store</span>
                        <span class="inline-flex p-1 bg-purple-100 text-purple-600 font-medium text-sm border-round ml-3">FREE</span>
                    </div>
                </div>
            </div>
            <div class="sm:text-right mt-3 md:mt-0">
                <Rating v-model="rating4" :readonly="true" :stars="5" :cancel="false"></Rating>
                <div class="text-sm text-600 mt-2">5K Reviews</div>
            </div>
        </li>
        <li class="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center">
            <div class="flex align-items-center">
                <span class="block mr-3 surface-200 border-radius: 10px inline-flex justify-content-center align-items-center" style="width:58px; height: 58px; border-radius: 10px">
                    <img src="images/blocks/logos/logo-spotify.png" style="width: 30px; height: 30px;" />
                </span>
                <div>
                    <div class="text-900 font-medium text-xl mb-2">Spotify</div>
                    <div class="flex align-items-center">
                        <i class="pi pi-google text-600 mr-2"></i>
                        <span class="text-600">Play Store</span>
                        <span class="inline-flex p-1 bg-green-100 text-green-600 font-medium text-sm border-round ml-3">$19.90</span>
                    </div>
                </div>
            </div>
            <div class="sm:text-right mt-3 md:mt-0">
                <Rating v-model="rating5" :readonly="true" :stars="5" :cancel="false"></Rating>
                <div class="text-sm text-600 mt-2">5K Reviews</div>
            </div>
        </li>
    </ul>
</div>`,
            block6: `
<div class="surface-card shadow-2 border-round p-4">
    <div class="flex justify-content-between align-items-center mb-5">
        <span class="text-xl text-900 font-medium">Browsers</span>
        <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu5.toggle($event)"></Button>
            <Menu ref="menu5" :popup="true" :model="items"></Menu>
        </div>
    </div>
    <ul class="list-none p-0 m-0">
        <li class="mb-4 border-bottom-1 surface-border py-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
            <div class="inline-flex align-items-center">
                <img src="images/blocks/logos/chrome.svg" class="mr-3" style="width: 32px; height: 32px" />
                <span class="text-900 font-medium">Chrome</span>
            </div>
            <div class="flex align-items-center mt-3 md:mt-3">
                <span class="text-900 font-medium mr-3 text-xl">%70</span>
                <Knob v-model="knob1" :readonly="true" :size="50" valueColor="orange" :showValue="false"></Knob>
            </div>
        </li>
        <li class="mb-4 border-bottom-1 surface-border py-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
            <div class="inline-flex align-items-center">
                <img src="images/blocks/logos/firefox.svg" class="mr-3" style="width: 32px; height: 32px" />
                <span class="text-900 font-medium">Firefox</span>
            </div>
            <div class="flex align-items-center mt-3 md:mt-3">
                <span class="text-900 font-medium mr-3 text-xl">%40</span>
                <Knob v-model="knob2" :readonly="true" :size="50" valueColor="royalblue" :showValue="false"></Knob>
            </div>
        </li>
        <li class="mb-4 border-bottom-1 surface-border py-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
            <div class="inline-flex align-items-center">
                <img src="images/blocks/logos/safari.svg" class="mr-3" style="width: 32px; height: 32px" />
                <span class="text-900 font-medium">Safari</span>
            </div>
            <div class="flex align-items-center mt-3 md:mt-3">
                <span class="text-900 font-medium mr-3 text-xl">%20</span>
                <Knob v-model="knob3" :readonly="true" :size="50" valueColor="slategray" :showValue="false"></Knob>
            </div>
        </li>
        <li class="mb-4 border-bottom-1 surface-border py-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
            <div class="inline-flex align-items-center">
                <img src="images/blocks/logos/opera.svg" class="mr-3" style="width: 32px; height: 32px" />
                <span class="text-900 font-medium">Opera</span>
            </div>
            <div class="flex align-items-center mt-3 md:mt-3">
                <span class="text-900 font-medium mr-3 text-xl">%10</span>
                <Knob v-model="knob4" :readonly="true" :size="50" valueColor="darkslateblue" :showValue="false"></Knob>
            </div>
        </li>
        <li class="mb-4 border-bottom-1 surface-border py-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
            <div class="inline-flex align-items-center">
                <img src="images/blocks/logos/edge.svg" class="mr-3" style="width: 32px; height: 32px" />
                <span class="text-900 font-medium">Edge</span>
            </div>
            <div class="flex align-items-center mt-3 md:mt-3">
                <span class="text-900 font-medium mr-3 text-xl">%8</span>
                <Knob v-model="knob5" :readonly="true" :size="50" valueColor="mediumpurple" :showValue="false"></Knob>
            </div>
        </li>
    </ul>
</div>`
        }
    }
}
</script>