<template>
    <div>
        <div class="block-category-title">Hero</div>
        <BlockViewer header="Right Aligned Image" :code="block1" :free="true">
            <div class="grid grid-nogutter surface-section text-800">
                <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span class="block text-6xl font-bold mb-1">Create the screens your</span>
                        <div class="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
                        <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        
                        <Button label="Learn More" type="button" class="mr-3 p-button-raised"></Button>
                        <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
                    </section>
                </div>
                <div class="col-12 md:col-6 overflow-hidden">
                    <img src="images/blocks/hero/hero-1.png" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Light Image Background" :code="block2">
            <div class="relative p-8 overflow-hidden">
                <img src="images/blocks/hero/hero-2.jpg" alt="Image" class="absolute top-0 left-0 w-auto h-full block md:w-full">

                <div class="text-center my-6 relative">
                    <div class="text-6xl text-white font-bold mb-1">The Platform For</div>
                    <div class="text-6xl text-primary font-bold mb-4">Today's Generation</div>
                    <p class="mt-0 mb-4 line-height-3 text-center mx-auto text-white" style="max-width:500px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    
                    <Button label="Learn More" type="button"></Button>

                    <p class="text-sm mt-4 mb-4 line-height-3 text-white">Available for MacOS, Web and Google accounts only</p>
                    <div class="flex justify-content-center align-items-center">
                        <a href="https://www.apple.com" class="text-white mr-3">
                            <i class="pi pi-apple text-2xl"></i>
                        </a>
                        <a href="https://play.google.com" class="text-white mr-3">
                            <i class="pi pi-android text-2xl"></i>
                        </a>
                        <a href="https://www.facebook.com" class="text-white">
                            <i class="pi pi-facebook text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Dark Image Background" :code="block3">
            <div class="relative p-8 overflow-hidden bg-no-repeat bg-cover" style="background-image: url('images/blocks/hero/hero-3.jpg')">
                <div class="text-center my-6 relative">
                    <div class="text-6xl font-bold mb-1 text-white">Bring Out The Best</div>
                    <div class="text-6xl text-blue-400 font-bold mb-4">In Your Code</div>
                    <p class="mt-0 mb-3 line-height-3 text-center mx-auto text-blue-100" style="max-width:500px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    
                    <div class="flex align-items-center justify-content-center flex-wrap">
                        <InputText type="text" class="bg-transparent border-white p-3 mr-3 mt-3" style="border-radius: 40px" size="30" placeholder="Enter your email" />
                        <Button label="Notify Me" class="p-3 mt-3" style="border-radius: 40px"></Button>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Centered Product Image" :code="block4">
            <div class="p-6 text-center" style="background:radial-gradient(69.84% 69.84% at 50% 100%, rgba(21, 101, 192, 0.15) 0%, rgba(255, 255, 255, 0) 100%);">
                <div class="surface-900 text-0 p-2 mx-auto mb-4" style="max-width: 250px; border-radius: 40px">🔥 Get started in no time</div>
                <div class="text-6xl text-900 font-bold mb-1">Highly Customizable</div>
                <div class="text-6xl text-primary font-bold mb-4">Premium Application Template</div>
                <Button type="button" label="Get Started" class="p-button-outlined p-3 font-bold"></Button>

                <img src="images/blocks/hero/ultima.png" alt="Image" class="block mx-auto mt-6 w-full md:w-auto" style="margin-bottom:-3rem">
            </div>
        </BlockViewer>

        <BlockViewer header="Dark with Illustration" :code="block5">
            <div class="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
                <div class="flex flex-wrap">
                    <div class="w-12 lg:w-6 p-4">
                        <h1 class="text-6xl font-bold text-white mt-0 mb-3">Social CRM that helps you grow faster <span class="text-yellow-500 underline">for free</span></h1>
                        <p class="text-3xl text-gray-400 mt-0 mb-5">Arcu cursus euismod quis viverra nibh cras. Amet justo donec enim diam vulputate ut.</p>
                        <ul class="list-none p-0 m-0">
                            <li class="mb-3 flex align-items-center"><i class="pi pi-compass text-yellow-500 text-xl mr-2"></i><span class="text-gray-400 line-height-3">Senectus et netus et malesuada fames.</span></li>
                            <li class="mb-3 flex align-items-center"><i class="pi pi-map text-yellow-500 text-xl mr-2"></i><span class="text-gray-400 line-height-3">Orci a scelerisque purus semper eget.</span></li>
                            <li class="mb-3 flex align-items-center"><i class="pi pi-calendar text-yellow-500 text-xl mr-2"></i><span class="text-gray-400 line-height-3">Aenean sed adipiscing diam donec adipiscing tristique.</span></li>
                        </ul>
                        <Button label="Claim Your Account" class="block mt-7 mb-7 lg:mb-0 p-button-rounded p-button-success p-button-lg font-medium"></Button>
                    </div>
                    <div class="w-12 lg:w-6 text-center lg:text-right overflow-hidden">
                        <img src="images/blocks/hero/hero-illustration.svg" alt="Image" class="w-full lg:w-auto">
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Form and Video Aligned Image" :code="block6">
            <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
                <div class="flex flex-wrap">
                    <div class="w-full xl:w-6 p-3 pr-5">
                        <span class="text-indigo-600 font-bold mb-4 block">SUPERCHARGE YOUR PRODUCT</span>
                        <div class="font-bold text-900 text-6xl mb-4">Take Control of Your Marketing Strategy</div>
                        <p class="mt-0 mb-5 text-700 line-height-3 text-xl">Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>
                        <div class="relative w-full xl:w-30rem">
                            <InputText type="text" placeholder="Enter your email" class="py-3 pl-3 w-full" style="border-radius: 30px;padding-right: 8rem" />
                            <button class="p-3 absolute appearance-none p-component border-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white outline-none h-full cursor-pointer" style="border-radius: 30px; top: 0; right: 0">Join Now</button>
                        </div>
                    </div>
                    <div class="w-full xl:w-6 p-3 flex align-items-center justify-content-center bg-indigo-50 p-4 lg:p-8 mt-5 xl:mt-0" style="border-radius: 30px">
                        <div class="relative w-full" style="padding-bottom:56.25%;height:0;">
                            <iframe class="absolute top-0 left-0 w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/3NV6X6eiE0k" title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    data() {
        return {
            block1: `
<div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span class="block text-6xl font-bold mb-1">Create the screens your</span>
            <div class="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <Button label="Learn More" type="button" class="mr-3 p-button-raised"></Button>
            <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
        </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
        <img src="images/blocks/hero/hero-1.png" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
</div>`,
            block2: `
<div class="relative p-8 overflow-hidden">
    <img src="images/blocks/hero/hero-2.jpg" alt="Image" class="absolute top-0 left-0 w-auto h-full block md:w-full">

    <div class="text-center my-6 relative">
        <div class="text-6xl text-white font-bold mb-1">The Platform For</div>
        <div class="text-6xl text-primary font-bold mb-4">Today's Generation</div>
        <p class="mt-0 mb-4 line-height-3 text-center mx-auto text-white" style="max-width:500px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <Button label="Learn More" type="button"></Button>

        <p class="text-sm mt-4 mb-4 line-height-3 text-white">Available for MacOS, Web and Google accounts only</p>
        <div class="flex justify-content-center align-items-center">
            <a href="https://www.apple.com" class="text-white mr-3">
                <i class="pi pi-apple text-2xl"></i>
            </a>
            <a href="https://play.google.com" class="text-white mr-3">
                <i class="pi pi-android text-2xl"></i>
            </a>
            <a href="https://www.facebook.com" class="text-white">
                <i class="pi pi-facebook text-2xl"></i>
            </a>
        </div>
    </div>
</div>`,
            block3: `
<div class="relative p-8 overflow-hidden bg-no-repeat bg-cover" style="background-image: url('images/blocks/hero/hero-3.jpg')">
    <div class="text-center my-6 relative">
        <div class="text-6xl font-bold mb-1 text-white">Bring Out The Best</div>
        <div class="text-6xl text-blue-400 font-bold mb-4">In Your Code</div>
        <p class="mt-0 mb-3 line-height-3 text-center mx-auto text-blue-100" style="max-width:500px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <div class="flex align-items-center justify-content-center flex-wrap">
            <InputText type="text" class="bg-transparent border-white p-3 mr-3 mt-3" style="border-radius: 40px" size="30" placeholder="Enter your email" />
            <Button label="Notify Me" class="p-3 mt-3" style="border-radius: 40px"></Button>
        </div>
    </div>
</div>`,
            block4: `
<div class="p-6 text-center" style="background:radial-gradient(69.84% 69.84% at 50% 100%, rgba(21, 101, 192, 0.15) 0%, rgba(255, 255, 255, 0) 100%);">
    <div class="surface-900 text-0 p-2 mx-auto mb-4" style="max-width: 250px; border-radius: 40px">🔥 Get started in no time</div>
    <div class="text-6xl text-900 font-bold mb-1">Highly Customizable</div>
    <div class="text-6xl text-primary font-bold mb-4">Premium Application Template</div>
    <Button type="button" label="Get Started" class="p-button-outlined p-3 font-bold"></Button>

    <img src="images/blocks/hero/ultima.png" alt="Image" class="block mx-auto mt-6 w-full md:w-auto" style="margin-bottom:-3rem">
</div>`,
            block5: `
<div class="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-wrap">
        <div class="w-12 lg:w-6 p-4">
            <h1 class="text-6xl font-bold text-white mt-0 mb-3">Social CRM that helps you grow faster <span class="text-yellow-500 underline">for free</span></h1>
            <p class="text-3xl text-gray-400 mt-0 mb-5">Arcu cursus euismod quis viverra nibh cras. Amet justo donec enim diam vulputate ut.</p>
            <ul class="list-none p-0 m-0">
                <li class="mb-3 flex align-items-center"><i class="pi pi-compass text-yellow-500 text-xl mr-2"></i><span class="text-gray-400 line-height-3">Senectus et netus et malesuada fames.</span></li>
                <li class="mb-3 flex align-items-center"><i class="pi pi-map text-yellow-500 text-xl mr-2"></i><span class="text-gray-400 line-height-3">Orci a scelerisque purus semper eget.</span></li>
                <li class="mb-3 flex align-items-center"><i class="pi pi-calendar text-yellow-500 text-xl mr-2"></i><span class="text-gray-400 line-height-3">Aenean sed adipiscing diam donec adipiscing tristique.</span></li>
            </ul>
            <Button label="Claim Your Account" class="block mt-7 mb-7 lg:mb-0 p-button-rounded p-button-success p-button-lg font-medium"></Button>
        </div>
        <div class="w-12 lg:w-6 text-center lg:text-right overflow-hidden">
            <img src="images/blocks/hero/hero-illustration.svg" alt="Image" class="w-full lg:w-auto">
        </div>
    </div>
</div>`,
            block6: `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-wrap">
        <div class="w-full xl:w-6 p-3 pr-5">
            <span class="text-indigo-600 font-bold mb-4 block">SUPERCHARGE YOUR PRODUCT</span>
            <div class="font-bold text-900 text-6xl mb-4">Take Control of Your Marketing Strategy</div>
            <p class="mt-0 mb-5 text-700 line-height-3 text-xl">Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>
            <div class="relative w-full xl:w-30rem">
                <InputText type="text" placeholder="Enter your email" class="py-3 pl-3 w-full" style="border-radius: 30px;padding-right: 8rem" />
                <button class="p-3 absolute appearance-none p-component border-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white outline-none h-full cursor-pointer" style="border-radius: 30px; top: 0; right: 0">Join Now</button>
            </div>
        </div>
        <div class="w-full xl:w-6 p-3 flex align-items-center justify-content-center bg-indigo-50 p-4 lg:p-8 mt-5 xl:mt-0" style="border-radius: 30px">
            <div class="relative w-full" style="padding-bottom:56.25%;height:0;">
                <iframe class="absolute top-0 left-0 w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/3NV6X6eiE0k" title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</div>`
        }
    }
}
</script>
