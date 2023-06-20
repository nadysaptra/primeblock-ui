<template>
    <div>
        <div class="block-category-title">Newsletter</div>
        <BlockViewer header="Simple 2 Column" :code="block1">
            <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
                <div class="flex flex-wrap align-items-center">
                    <div class="w-full lg:w-6 lg:pr-6">
                        <div class="text-900 font-bold text-2xl mb-3">Get our weekly updates and <span class="text-blue-500">free stuff!</span></div>
                        <div class="text-600 text-xl line-height-3 lg:mb-0 mb-4" style="max-width: 450px">Join our community to get weekly updates and unique gifts every friday.</div>
                    </div>

                    <div class="w-full lg:w-6">
                        <div class="flex flex-column md:flex-row align-items-start md:align-items-center lg:justify-content-end">
                            <InputText placeholder="Enter your email" class="p-3 mr-3 border-400 mb-3 md:mb-0" />
                            <Button label="Subscribe" class="py-3 font-bold"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Simple Centered" :code="block2">
            <div class="surface-section text-center px-4 py-8 md:px-6 lg:px-8">
                <div class="bg-blue-50 text-blue-600 font-bold border-round px-2 py-1 mx-auto mb-3" style="max-width: 350px">
                    🔥&nbsp;3,907 businesses already subscribed</div>
                <div class="text-2xl text-900 font-bold mb-3">Subscribe to our newsletter today</div>
                <p class="text-600 line-height-3 mb-6">Join our community to receieve the latest updates and special promotions.
                </p>

                <div class="flex align-items-center justify-content-center">
                    <InputText placeholder="Enter your email" class="p-3 border-noround border-round-left" style="min-width: 250px" />
                    <Button icon="pi pi-chevron-right" class="border-noround border-round-right p-3 w-auto"></Button>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Gradient Background" :code="block3">
            <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
                <div class="py-6 px-3 md:px-6shadow-2 text-center" style="background: linear-gradient(180deg, #6372C3 0%, #3F51B5 100%); border-radius: 1rem">
                    <div class="text-white font-bold text-2xl mb-3">Stay in touch with us</div>
                    <span class="block text-indigo-100 font-medium text-xl">Subscribe for updates to ensure that you don’t miss any important news from us.</span>
                    <div class="mt-5 mb-3 relative sm:w-20rem mx-auto">
                        <input type="text" class="appearance-none bg-indigo-600 border-1 border-indigo-400 py-3 pl-3 w-full p-component text-indigo-100 outline-none" style="border-radius: 35px; padding-right:6rem" value="Your email" />
                        <Button type="button" class="absolute" label="Join" style="border-radius: 35px; top: .25rem; right: .25rem; bottom:0.25rem;"></Button>
                    </div>
                    <span class="text-indigo-200">We ensure to protect your privacy. <a tabindex="0" class="cursor-pointer text-white">Privacy Policy</a></span>
                </div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'Newsletter',
    data() {
        return {
            block1: `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-wrap align-items-center">
        <div class="w-full lg:w-6 lg:pr-6">
            <div class="text-900 font-bold text-2xl mb-3">Get our weekly updates and <span class="text-blue-500">free stuff!</span></div>
            <div class="text-600 text-xl line-height-3 lg:mb-0 mb-4" style="max-width: 450px">Join our community to get weekly updates and unique gifts every friday.</div>
        </div>

        <div class="w-full lg:w-6">
            <div class="flex flex-column md:flex-row align-items-start md:align-items-center lg:justify-content-end">
                <InputText placeholder="Enter your email" class="p-3 mr-3 border-400 mb-3 md:mb-0" />
                <Button label="Subscribe" class="py-3 font-bold"></Button>
            </div>
        </div>
    </div>
</div>`,
            block2: `
<div class="surface-section text-center px-4 py-8 md:px-6 lg:px-8">
    <div class="bg-blue-50 text-blue-600 font-bold border-round px-2 py-1 mx-auto mb-3" style="max-width: 350px">
        🔥&nbsp;3,907 businesses already subscribed</div>
    <div class="text-2xl text-900 font-bold mb-3">Subscribe to our newsletter today</div>
    <p class="text-600 line-height-3 mb-6">Join our community to receieve the latest updates and special promotions.
    </p>

    <div class="flex align-items-center justify-content-center">
        <InputText placeholder="Enter your email" class="p-3 border-noround border-round-left" style="min-width: 250px" />
        <Button icon="pi pi-chevron-right" class="border-noround border-round-right p-3 w-auto"></Button>
    </div>
</div>`,
            block3: `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="py-6 px-3 md:px-6shadow-2 text-center" style="background: linear-gradient(180deg, #6372C3 0%, #3F51B5 100%); border-radius: 1rem">
        <div class="text-white font-bold text-2xl mb-3">Stay in touch with us</div>
        <span class="block text-indigo-100 font-medium text-xl">Subscribe for updates to ensure that you don’t miss any important news from us.</span>
        <div class="mt-5 mb-3 relative sm:w-20rem mx-auto">
            <input type="text" class="appearance-none bg-indigo-600 border-1 border-indigo-400 py-3 pl-3 w-full p-component text-indigo-100 outline-none" style="border-radius: 35px; padding-right:6rem" value="Your email" />
            <Button type="button" class="absolute" label="Join" style="border-radius: 35px; top: .25rem; right: .25rem"></Button>
        </div>
        <span class="text-indigo-200">We ensure to protect your privacy. <a tabindex="0" class="cursor-pointer text-white">Privacy Policy</a></span>
    </div>
</div>`
        }
    }
}
</script>