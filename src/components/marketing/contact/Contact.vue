<template>
    <div>
       <div class="block-category-title">Contact Sections</div>
        <BlockViewer header="2 Columns" :code="block1">
            <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
                <div class="grid">
                    <div class="col-12 md:col-6">
                        <div class="p-fluid pr-0 md:pr-6">
                            <div class="field">
                                <label for="name" class="font-medium">Name</label>
                                <InputText id="name" type="text" class="py-3 px-2 text-lg" />
                            </div>
                            <div class="field">
                                <label for="email" class="font-medium">Email</label>
                                <InputText id="email" type="text" class="py-3 px-2 text-lg" /> 
                            </div>
                            <div class="field">
                                <label for="company" class="font-medium">Company</label>
                                <InputText id="company" type="text" class="py-3 px-2 text-lg" /> 
                            </div>
                            <div class="field">
                                <label for="message" class="font-medium">Message</label>
                                <Textarea id="message" :rows="6" :autoResize="true" class="py-3 px-2 text-lg"></Textarea> 
                            </div>
                            <Button label="Send Message" icon="pi pi-send" class="w-auto"></Button>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 bg-no-repeat bg-right-bottom" style="background-image: url('images/blocks/contact/contact-1.png')">
                        <div class="text-900 text-2xl font-medium mb-6">Contact Us</div>
                        <div class="text-700 line-height-3 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                        <a class="inline-flex align-items-center text-blue-600 font-bold no-underline cursor-pointer">
                            <span class="mr-3">View Address on Google Maps</span>
                            <i class="pi pi-arrow-right"></i>
                        </a>
                        <ul class="list-none p-0 m-0 mt-6 text-700">
                            <li class="flex align-items-center mb-3">
                                <i class="pi pi-phone mr-2"></i>
                                <span>+123456789</span>
                            </li>
                            <li class="flex align-items-center mb-3">
                                <i class="pi pi-twitter mr-2"></i>
                                <span>@prime_ng</span>
                            </li>
                            <li class="flex align-items-center">
                                <i class="pi pi-inbox mr-2"></i>
                                <span>contact@primetek.com.tr</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="With a Map" :code="block2">
            <div class="surface-section">
                <div class="grid grid-nogutter">
                    <div class="col-12 md:col-6 bg-no-repeat bg-cover p-8" style="background-image: url('images/blocks/contact/contact-2.jpg')">
                        <div class="text-white text-2xl font-medium mb-6">Contact Us</div>
                        <div class="text-gray-300 line-height-3 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                        <a class="inline-flex align-items-center text-blue-300 font-bold no-underline cursor-pointer">
                            <span class="mr-3">View Address on Google Maps</span>
                            <i class="pi pi-arrow-right"></i>
                        </a>
                        <ul class="list-none p-0 m-0 mt-6 text-white">
                            <li class="flex align-items-center mb-3">
                                <i class="pi pi-phone mr-2"></i>
                                <span>+123456789</span>
                            </li>
                            <li class="flex align-items-center mb-3">
                                <i class="pi pi-twitter mr-2"></i>
                                <span>@prime_ng</span>
                            </li>
                            <li class="flex align-items-center">
                                <i class="pi pi-inbox mr-2"></i>
                                <span>contact@primetek.com.tr</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 md:col-6">
                        <div class="p-fluid formgrid grid px-4 py-8 md:px-6 lg:px-8">
                            <div class="field col-12 lg:col-6 p-float-label mb-4">
                                <InputText id="firstname" type="text" class="py-3 px-2 text-lg" placeholder="First Name" /> 
                            </div>
                            <div class="field col-12 lg:col-6 p-float-label mb-4">
                                <InputText id="lastname" type="text"  class="py-3 px-2 text-lg" placeholder="Last Name" /> 
                            </div>
                            <div class="field col-12 mb-4">
                                <InputText id="email" type="text"  class="py-3 px-2 text-lg" placeholder="Email" /> 
                            </div>
                            <div class="field col-12 mb-4">
                                <InputText id="email" type="text"  class="py-3 px-2 text-lg" placeholder="Phone" /> 
                            </div>
                            <div class="field col-12 mb-4">
                                <Textarea id="message" :rows="3" :autoResize="true" class="py-3 px-2 text-lg" placeholder="Message"></Textarea> 
                            </div>
                            <div class="col-12 text-right">
                                <Button label="Submit" icon="pi pi-envelope" class="px-5 py-3 w-auto"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="2 Rows with Map" :code="block3">
            <div>
                <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div class="grid">
                        <div class="col-12 lg:col-6">
                            <div class="text-900 font-medium mb-4">Contact Us</div>
                            <div class="text-900 text-2xl font-bold mb-4">GET IN TOUCH</div>
                            <p class="text-700 line-height-3 pr-0 lg:pr-5">Ornare massa eget egestas purus viverra accumsan in. Sed elementum tempus egestas sed. Venenatis urna cursus eget nunc scelerisque viverra.</p>
                        </div>
                        <div class="col-12 md:col-6 lg:col-3">
                            <div class="flex align-items-start">
                                <div>
                                    <span class="flex align-items-center justify-content-center surface-100 border-round mr-3" style="height: 3rem; width: 3rem">
                                        <i class="pi pi-map-marker text-900 text-4xl"></i>
                                    </span>
                                </div>
                                <div>
                                    <span class="text-2xl text-900 mb-2 font-medium">Address</span>
                                    <p class="text-700 line-height-3">Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 md:col-6 lg:col-3">
                            <div class="flex align-items-start">
                                <div>
                                    <span class="flex align-items-center justify-content-center surface-100 border-round mr-3" style="height: 3rem; width: 3rem">
                                        <i class="pi pi-inbox text-900 text-4xl"></i>
                                    </span>
                                </div>
                                <div>
                                    <span class="text-2xl text-900 mb-2 font-medium">Email</span>
                                    <p class="text-700 line-height-3">info@company.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img alt="Image" src="images/blocks/contact/map.png" class="w-full">
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            block1: `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6">
            <div class="p-fluid pr-0 md:pr-6">
                <div class="field">
                    <label for="name" class="font-medium">Name</label>
                    <InputText id="name" type="text" class="py-3 px-2 text-lg" />
                </div>
                <div class="field">
                    <label for="email" class="font-medium">Email</label>
                    <InputText id="email" type="text" class="py-3 px-2 text-lg" /> 
                </div>
                <div class="field">
                    <label for="company" class="font-medium">Company</label>
                    <InputText id="company" type="text" class="py-3 px-2 text-lg" /> 
                </div>
                <div class="field">
                    <label for="message" class="font-medium">Message</label>
                    <Textarea id="message" :rows="6" :autoResize="true" class="py-3 px-2 text-lg"></Textarea> 
                </div>
                <Button label="Send Message" icon="pi pi-send" class="w-auto"></Button>
            </div>
        </div>
        <div class="col-12 md:col-6 bg-no-repeat bg-right-bottom" style="background-image: url('images/blocks/contact/contact-1.png')">
            <div class="text-900 text-2xl font-medium mb-6">Contact Us</div>
            <div class="text-700 line-height-3 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            <a class="inline-flex align-items-center text-blue-600 font-bold no-underline cursor-pointer">
                <span class="mr-3">View Address on Google Maps</span>
                <i class="pi pi-arrow-right"></i>
            </a>
            <ul class="list-none p-0 m-0 mt-6 text-700">
                <li class="flex align-items-center mb-3">
                    <i class="pi pi-phone mr-2"></i>
                    <span>+123456789</span>
                </li>
                <li class="flex align-items-center mb-3">
                    <i class="pi pi-twitter mr-2"></i>
                    <span>@prime_ng</span>
                </li>
                <li class="flex align-items-center">
                    <i class="pi pi-inbox mr-2"></i>
                    <span>contact@primetek.com.tr</span>
                </li>
            </ul>
        </div>
    </div>
</div>`,
            block2: `
<div class="surface-section">
    <div class="grid grid-nogutter">
        <div class="col-12 md:col-6 bg-no-repeat bg-cover p-8" style="background-image: url('images/blocks/contact/contact-2.jpg')">
            <div class="text-white text-2xl font-medium mb-6">Contact Us</div>
            <div class="text-gray-300 line-height-3 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            <a class="inline-flex align-items-center text-blue-300 font-bold no-underline cursor-pointer">
                <span class="mr-3">View Address on Google Maps</span>
                <i class="pi pi-arrow-right"></i>
            </a>
            <ul class="list-none p-0 m-0 mt-6 text-white">
                <li class="flex align-items-center mb-3">
                    <i class="pi pi-phone mr-2"></i>
                    <span>+123456789</span>
                </li>
                <li class="flex align-items-center mb-3">
                    <i class="pi pi-twitter mr-2"></i>
                    <span>@prime_ng</span>
                </li>
                <li class="flex align-items-center">
                    <i class="pi pi-inbox mr-2"></i>
                    <span>contact@primetek.com.tr</span>
                </li>
            </ul>
        </div>
        <div class="col-12 md:col-6">
            <div class="p-fluid formgrid grid px-4 py-8 md:px-6 lg:px-8">
                <div class="field col-12 lg:col-6 p-float-label mb-4">
                    <InputText id="firstname" type="text" class="py-3 px-2 text-lg" placeholder="First Name" /> 
                </div>
                <div class="field col-12 lg:col-6 p-float-label mb-4">
                    <InputText id="lastname" type="text"  class="py-3 px-2 text-lg" placeholder="Last Name" /> 
                </div>
                <div class="field col-12 mb-4">
                    <InputText id="email" type="text"  class="py-3 px-2 text-lg" placeholder="Email" /> 
                </div>
                <div class="field col-12 mb-4">
                    <InputText id="email" type="text"  class="py-3 px-2 text-lg" placeholder="Phone" /> 
                </div>
                <div class="field col-12 mb-4">
                    <Textarea id="message" :rows="3" :autoResize="true" class="py-3 px-2 text-lg" placeholder="Message"></Textarea> 
                </div>
                <div class="col-12 text-right">
                    <Button label="Submit" icon="pi pi-envelope" class="px-5 py-3 w-auto"></Button>
                </div>
            </div>
        </div>
    </div>
</div>`,
            block3: `
<div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="grid">
            <div class="col-12 lg:col-6">
                <div class="text-900 font-medium mb-4">Contact Us</div>
                <div class="text-900 text-2xl font-bold mb-4">GET IN TOUCH</div>
                <p class="text-700 line-height-3 pr-0 lg:pr-5">Ornare massa eget egestas purus viverra accumsan in. Sed elementum tempus egestas sed. Venenatis urna cursus eget nunc scelerisque viverra.</p>
            </div>
            <div class="col-12 md:col-6 lg:col-3">
                <div class="flex align-items-start">
                    <div>
                        <span class="flex align-items-center justify-content-center surface-100 border-round mr-3" style="height: 3rem; width: 3rem">
                            <i class="pi pi-map-marker text-900 text-4xl"></i>
                        </span>
                    </div>
                    <div>
                        <span class="text-2xl text-900 mb-2 font-medium">Address</span>
                        <p class="text-700 line-height-3">Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands</p>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-6 lg:col-3">
                <div class="flex align-items-start">
                    <div>
                        <span class="flex align-items-center justify-content-center surface-100 border-round mr-3" style="height: 3rem; width: 3rem">
                            <i class="pi pi-inbox text-900 text-4xl"></i>
                        </span>
                    </div>
                    <div>
                        <span class="text-2xl text-900 mb-2 font-medium">Email</span>
                        <p class="text-700 line-height-3">info@company.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img alt="Image" src="images/blocks/contact/map.png" class="w-full">
</div>`
        }
    }
}
</script>