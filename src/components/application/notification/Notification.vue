<template>
    <div>
        <div class="block-category-title">Notification</div>
        <BlockViewer header="Message Actions" :code="block1" containerClass="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
            <Button label="Display" @click="notify1()"></Button>
            <Toast group="block1" :style="{width: '30rem'}">
                <template #message="{ message }">
                    <div class="flex border-1 surface-border surface-overlay">
                        <div class="flex flex-column p-3">
                            <div class="flex align-items-center">
                                <span class="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle" style="width:32px;height:32px">
                                    <i class="pi pi-info text-lg"></i>
                                </span>
                                <span class="font-medium text-2xl text-900">{{message.summary}}</span>
                            </div>
                            <p class="my-3 p-0 line-height-3 text-700">{{message.detail}}</p>
                        </div>
                        <div class="flex flex-column border-left-1 surface-border">
                            <div class="flex-auto flex align-items-center justify-content-center px-3">
                                <Button label="Update" class="p-button-text font-medium" @click="clear('block1')"></Button>
                            </div>
                            <div class="flex-auto border-top-1 surface-border flex align-items-center justify-content-center px-3">
                                <Button label="Later" class="p-button-text font-medium" @click="clear('block1')"></Button>
                            </div>
                        </div>
                    </div>
                </template>
            </Toast>
        </BlockViewer>

        <BlockViewer header="Dark with Timeout" :code="block2" containerClass="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
            <Button label="Display" @click="notify2()"></Button>
            <Toast group="block2">
                <template #message="{ message }">
                    <div class="flex flex-column bg-gray-900">
                        <div class="p-3">
                            <div class="flex align-items-center">
                                <span class="flex align-items-center justify-content-center bg-blue-400 text-blue-900 mr-3 border-circle" style="width:32px;height:32px">
                                    <i class="pi pi-info text-lg"></i>
                                </span>
                                <span class="font-medium text-2xl text-white">{{message.summary}}</span>
                            </div>
                            <p class="my-3 line-height-3 text-gray-300">{{message.detail}}</p>
                        </div>
                        <div style="height:6px" class="bg-gray-700">
                            <div class="h-full bg-blue-500 animate-width animation-duration-3000"></div>
                        </div>
                    </div>
                </template>
            </Toast>
        </BlockViewer>

        <BlockViewer header="Custom Icon" :code="block3" containerClass="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
            <Button label="Display" @click="notify3()"></Button>
            <Toast group="block3" :style="{width: '30rem'}">
                <template #message="{ message }">
                    <div class="flex align-items-start flex-1">
                        <i class="pi pi-envelope text-blue-500 text-2xl mr-3"></i>
                        <div>
                            <span class="text-xl font-medium text-900">{{message.summary}}</span>
                            <p class="text-700 mt-3">{{message.detail}}</p>
                        </div>
                    </div>
                </template>
            </Toast>
        </BlockViewer>

        <BlockViewer header="Condensed" :code="block4" containerClass="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
            <Button label="Display" @click="notify4()"></Button>
            <Toast group="block4" :style="{width: '30rem'}">
                <template #message="{ message }">
                    <div class="flex align-items-center justify-content-between flex-1 align-self-center mr-3">
                        <span class="text-xl font-medium text-900">{{message.detail}}</span>
                        <a class="cursor-pointer font-medium text-blue-500">Reply</a>
                    </div>
                </template>
            </Toast>
        </BlockViewer>

        <BlockViewer header="With Profile" :code="block5" containerClass="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
            <Button label="Display" @click="notify5()"></Button>
            <Toast group="block5" :style="{width: '30rem'}">
                <template #message="{ message }">
                    <div class="flex align-items-start flex-1 align-self-center mr-3">
                        <img src="images/blocks/avatars/circle-big/avatar-f-2.png" style="width:56px;height:56px" />
                        <div class="ml-3">
                            <span class="text-xl font-medium text-900">{{message.summary}}</span>
                            <p class="text-600 mt-2 mb-3">{{message.detail}}</p>
                            <Button class="p-button-sm mr-2" label="Reply" @click="clear('block5')"></Button>
                            <Button class="p-button-sm p-button-text" label="Hide" @click="clear('block5')"></Button>
                        </div>
                    </div>
                </template>
            </Toast>
        </BlockViewer>

        <BlockViewer header="Colored Custom Icon" :code="block6" containerClass="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
            <Button label="Display" @click="notify6()"></Button>
            <Toast group="block6" :style="{width: '30rem'}">
                <template #message="{ message }">
                    <div class="flex align-items-start flex-1">
                        <i class="pi pi-envelope text-cyan-900 text-2xl mr-3"></i>
                        <div>
                            <span class="text-xl font-medium text-cyan-900">{{message.summary}}</span>
                            <p class="text-cyan-800 mt-3">{{message.detail}}</p>
                        </div>
                    </div>
                </template>
            </Toast>
        </BlockViewer>

        <BlockViewer header="Colored Condensed" :code="block7" containerClass="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
            <Button label="Display" @click="notify7()"></Button>
            <Toast group="block7" :style="{width: '30rem'}">
                <template #message="{ message }">
                    <div class="flex align-items-center justify-content-between flex-1 align-self-center mr-3">
                        <span class="text-xl font-medium text-orange-900">{{message.detail}}</span>
                        <a class="cursor-pointer font-medium text-orange-700">Reply</a>
                    </div>
                </template>
            </Toast>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'Notification',
    data() {
        return {
            block1: `
<Button label="Display" @click="notify1()"></Button>
<Toast group="block1" :style="{width: '30rem'}">
    <template #message="{ message }">
        <div class="flex border-1 surface-border surface-overlay">
            <div class="flex flex-column p-3">
                <div class="flex align-items-center">
                    <span class="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle" style="width:32px;height:32px">
                        <i class="pi pi-info text-lg"></i>
                    </span>
                    <span class="font-medium text-2xl text-900">{{message.summary}}</span>
                </div>
                <p class="my-3 p-0 line-height-3 text-700">{{message.detail}}</p>
            </div>
            <div class="flex flex-column border-left-1 surface-border">
                <div class="flex-auto flex align-items-center justify-content-center px-3">
                    <Button label="Update" class="p-button-text font-medium" @click="clear('block1')"></Button>
                </div>
                <div class="flex-auto border-top-1 surface-border flex align-items-center justify-content-center px-3">
                    <Button label="Later" class="p-button-text font-medium" @click="clear('block1')"></Button>
                </div>
            </div>
        </div>
    </template>
</Toast>`,
            block2: `
<Button label="Display" @click="notify2()"></Button>
<Toast group="block2">
    <template #message="{ message }">
        <div class="flex flex-column bg-gray-900">
            <div class="p-3">
                <div class="flex align-items-center">
                    <span class="flex align-items-center justify-content-center bg-blue-400 text-blue-900 mr-3 border-circle" style="width:32px;height:32px">
                        <i class="pi pi-info text-lg"></i>
                    </span>
                    <span class="font-medium text-2xl text-white">{{message.summary}}</span>
                </div>
                <p class="my-3 line-height-3 text-gray-300">{{message.detail}}</p>
            </div>
            <div style="height:6px" class="bg-gray-700">
                <div class="h-full bg-blue-500 animate-width animation-duration-3000"></div>
            </div>
        </div>
    </template>
</Toast>`,
            block3: `
<Button label="Display" @click="notify3()"></Button>
<Toast group="block3" :style="{width: '30rem'}">
    <template #message="{ message }">
        <div class="flex align-items-start flex-1">
            <i class="pi pi-envelope text-blue-500 text-2xl mr-3"></i>
            <div>
                <span class="text-xl font-medium text-900">{{message.summary}}</span>
                <p class="text-700 mt-3">{{message.detail}}</p>
            </div>
        </div>
    </template>
</Toast>`,
            block4: `
<Button label="Display" @click="notify4()"></Button>
<Toast group="block4" :style="{width: '30rem'}">
    <template #message="{ message }">
        <div class="flex align-items-center justify-content-between flex-1 align-self-center mr-3">
            <span class="text-xl font-medium text-900">{{message.detail}}</span>
            <a class="cursor-pointer font-medium text-blue-500">Reply</a>
        </div>
    </template>
</Toast>`,
            block5: `
<Button label="Display" @click="notify5()"></Button>
<Toast group="block5" :style="{width: '30rem'}">
    <template #message="{ message }">
        <div class="flex align-items-start flex-1 align-self-center mr-3">
            <img src="images/blocks/avatars/circle-big/avatar-f-2.png" style="width:56px;height:56px" />
            <div class="ml-3">
                <span class="text-xl font-medium text-900">{{message.summary}}</span>
                <p class="text-600 mt-2 mb-3">{{message.detail}}</p>
                <Button class="p-button-sm mr-2" label="Reply" @click="clear('block5')"></Button>
                <Button class="p-button-sm p-button-text" label="Hide" @click="clear('block5')"></Button>
            </div>
        </div>
    </template>
</Toast>`,
            block6: `
<Button label="Display" @click="notify6()"></Button>
<Toast group="block6" :style="{width: '30rem'}">
    <template #message="{ message }">
        <div class="flex align-items-start flex-1">
            <i class="pi pi-envelope text-cyan-900 text-2xl mr-3"></i>
            <div>
                <span class="text-xl font-medium text-cyan-900">{{message.summary}}</span>
                <p class="text-cyan-800 mt-3">{{message.detail}}</p>
            </div>
        </div>
    </template>
</Toast>`,
            block7: `
<Button label="Display" @click="notify7()"></Button>
<Toast group="block7" :style="{width: '30rem'}">
    <template #message="{ message }">
        <div class="flex align-items-center justify-content-between flex-1 align-self-center mr-3">
            <span class="text-xl font-medium text-orange-900">{{message.detail}}</span>
            <a class="cursor-pointer font-medium text-orange-700">Reply</a>
        </div>
    </template>
</Toast>`
        }
    },
    methods: {
        notify1() {
            this.$toast.removeAllGroups();
            this.$toast.add({
                group: 'block1',
                severity: 'custom-1',
                summary: 'Message Title',
                detail: 'Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.',
                sticky: true,
                closable: false,
                styleClass: 'surface-0',
                contentStyleClass: 'p-0'
            });
        },
        notify2() {
            this.$toast.removeAllGroups();
            this.$toast.add({
                group: 'block2',
                severity: 'custom-2',
                summary: 'Message Title',
                closable: false,
                detail: 'Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.',
                life: 3000,
                styleClass: 'surface-900',
                contentStyleClass: 'p-0'
            });
        },
        notify3() {
            this.$toast.removeAllGroups();
            this.$toast.add({
                group: 'block3',
                severity: 'custom-3',
                summary: 'Custom Icon',
                detail: 'Sagittis eu volutpat odio facilisis mauris sit amet.',
                styleClass: 'surface-overlay',
                contentStyleClass: 'p-3',
                closable: false
            });
        },
        notify4() {
            this.$toast.removeAllGroups();
            this.$toast.add({
                group: 'block4',
                severity: 'custom-4',
                detail: 'You received 1 new message.',
                styleClass: 'surface-overlay',
                contentStyleClass: 'p-3',
                closable: false
            });
        },
        notify5() {
            this.$toast.removeAllGroups();
            this.$toast.add({
                group: 'block5',
                severity: 'custom-5',
                summary: 'Arlene McCoy',
                detail: 'Tristique nulla aliquet enim tortor at auctor 😅... Urna nunc id.',
                styleClass: 'surface-overlay',
                contentStyleClass: 'p-4',
                closable: false
            });
        },
        notify6() {
            this.$toast.removeAllGroups();
            this.$toast.add({
                group: 'block6',
                severity: 'custom-6',
                summary: 'Custom Icon',
                detail: 'Sagittis eu volutpat odio facilisis mauris sit amet.',
                styleClass: 'bg-cyan-500',
                contentStyleClass: 'p-3'
            });
        },
        notify7() {
            this.$toast.removeAllGroups();
            this.$toast.add({
                group: 'block7',
                severity: 'custom-7',
                detail: 'You received 1 new message.',
                styleClass: 'bg-orange-300',
                contentStyleClass: 'p-3'
            });
        },
        clear() {
            this.$toast.removeAllGroups();
        }
    }
}
</script>