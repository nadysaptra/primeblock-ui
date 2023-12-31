<template>
    <div :class="containerClass">
        <div class="layout-topbar">
            <div class="topbar-logo">
                <router-link to="/">
                    <img :src="$appState.dark ? 'images/logo-primeblocks-dark.svg': 'images/logo-primeblocks.svg'" class="logo" alt="PrimeBlocks Logo">
                    <img src="images/icon-primeblocks.svg" class="icon" alt="PrimeBlocks">
                </router-link>
            </div>

            <div class="topbar-actions">
                <a class="topbar-menu-button" @click="showTopbarMenu($event)">
                    <i class="pi pi-bars"></i>
                </a>
                <ul class="topbar-menu">
                    <li><router-link to="/">BLOCKS</router-link></li>
                    <li><router-link to="/documentation">DOCUMENTATION</router-link></li>
                    <li><router-link to="/pricing">PRICING</router-link></li>
                </ul>
            </div>
        </div>

        <div class="layout-breadcrumb">
            <ul>
                <li>
                    <router-link to="/"><i class="pi pi-home"></i></router-link>
                    <div v-if="$route.path === '/'" class="chevron">/</div>
                    <template v-if="$route.meta.breadcrumb">
                        <template v-if="$route.meta.breadcrumb[0].parent">
                            <div v-if="$route.path !== '/'" class="chevron">/</div>
                            <router-link :to="parentRoute">
                                <span>{{$route.meta.breadcrumb[0].parent}}</span>
                            </router-link>
                        </template>
                        <div v-if="$route.path !== '/'" class="chevron">/</div>
                        <router-link v-if="$route.meta.breadcrumb[0].label" :to="$route.path">
                            <span>{{$route.meta.breadcrumb[0].label}}</span>
                        </router-link>
                    </template>
                </li>
            </ul>
        </div>

        <div class="layout-content">
            <router-view></router-view>
        </div>

        <a tabindex="0" class="layout-config-button" @click="visibleSidebar = true">
            <i class="pi pi-cog"></i>
        </a>

        <Sidebar v-model:visible="visibleTopbarMenu" position="right">
            <ul class="topbar-mobile-menu">
                <li><router-link to="/">BLOCKS</router-link></li>
                <li><router-link to="/documentation">DOCUMENTATION</router-link></li>
                <li><router-link to="/pricing">PRICING</router-link></li>
            </ul>
        </Sidebar>

        <Sidebar v-model:visible="visibleSidebar" position="right" class="layout-config p-sidebar-md" styleClass="p-sidebar-md">
            <div class="config-title" style="margin-top:0">Component Scale</div>
            <div class="config-scale">
                <Button icon="pi pi-minus" type="button" @click="decrementScale()" class="p-button-text" :disabled="scale === scales[0]"></button>
                <i class="pi pi-circle-fill" v-for="s of scales" :key="s" :class="{'scale-active': s === scale}"></i>
                <Button icon="pi pi-plus" type="button" @click="incrementScale()" class="p-button-text" :disabled="scale === scales[scales.length - 1]"></button>
            </div>

            <div class="config-title">Input Style</div>
            <div class="formgroup-inline">
                <div class="field-radiobutton">
                    <RadioButton name="inputstyle" value="outlined" v-model="$primevue.config.inputStyle" id="input_outlined"></RadioButton>
                    <label for="input_outlined">Outlined</label>
                </div>
                <div class="field-radiobutton">
                    <RadioButton name="inputstyle" value="filled" v-model="$primevue.config.inputStyle" id="input_filled"></RadioButton>
                    <label for="input_filled">Filled</label>
                </div>
            </div>

            <div class="config-title">Ripple Effect</div>
            <InputSwitch v-model="$primevue.config.ripple"></InputSwitch>

            <div class="config-title">Bootstrap</div>
            <div class="grid themes-grid">
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'bootstrap4-light-blue', false)">
                        <img src="./assets/images/themes/bootstrap4-light-blue.svg" alt="Bootstrap Light Blue" />
                    </button>
                    <span>Blue</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'bootstrap4-light-purple', false)">
                        <img src="./assets/images/themes/bootstrap4-light-purple.svg" alt="Bootstrap Light Purple" />
                    </button>
                    <span>Purple</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'bootstrap4-dark-blue', true)">
                        <img src="./assets/images/themes/bootstrap4-dark-blue.svg" alt="Bootstrap Dark Blue" />
                    </button>
                    <span>Blue</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'bootstrap4-dark-purple', true)">
                        <img src="./assets/images/themes/bootstrap4-dark-purple.svg" alt="Bootstrap Dark Purple" />
                    </button>
                    <span>Purple</span>
                </div>
            </div>

            <div class="config-title">Material Design</div>
            <div class="grid themes-grid">
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'md-light-indigo', false)">
                        <img src="./assets/images/themes/md-light-indigo.svg" alt="Material Light Indigo" />
                    </button>
                    <span>Indigo</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'md-light-deeppurple', false)">
                        <img src="./assets/images/themes/md-light-deeppurple.svg" alt="Material Light Deep Purple" />
                    </button>
                    <span>Deep Purple</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'md-dark-indigo', true)">
                        <img src="./assets/images/themes/md-dark-indigo.svg" alt="Material Dark Indigo" />
                    </button>
                    <span>Indigo</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'md-dark-deeppurple', true)">
                        <img src="./assets/images/themes/md-dark-deeppurple.svg" alt="Material Dark Deep Purple" />
                    </button>
                    <span>Deep Purple</span>
                </div>
            </div>

            <div class="config-title">Material Design Compact</div>
            <div class="grid themes-grid">
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'mdc-light-indigo', false)">
                        <img src="./assets/images/themes/md-light-indigo.svg" alt="Material Compact Light Indigo"/>
                    </button>
                    <span>Indigo</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'mdc-light-deeppurple', false)">
                        <img src="./assets/images/themes/md-light-deeppurple.svg" alt="Material Compact Deep Purple" />
                    </button>
                    <span>Deep Purple</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'mdc-dark-indigo', true)">
                        <img src="./assets/images/themes/md-dark-indigo.svg" alt="Material Compact Dark Indigo" />
                    </button>
                    <span>Indigo</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'mdc-dark-deeppurple', true)">
                        <img src="./assets/images/themes/md-dark-deeppurple.svg" alt="Material Compact Dark Deep Purple" />
                    </button>
                    <span>Deep Purple</span>
                </div>
            </div>

            <div class="config-title">Tailwind</div>
            <div class="grid themes-grid">
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'tailwind-light', false)">
                        <img src="./assets/images/themes/tailwind-light.png" alt="Tailwind Light"/>
                    </button>
                    <span>Tailwind Light</span>
                </div>
            </div>

            <div class="config-title">Fluent UI</div>
            <div class="grid themes-grid">
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'fluent-light', false)">
                        <img src="./assets/images/themes/fluent-light.png" alt="Fluent Light"/>
                    </button>
                    <span>Fluent Light</span>
                </div>
            </div>

            <div class="config-title flex">PrimeOne Design - 2022</div>
            <div class="grid themes-grid">
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'lara-light-indigo', false)">
                        <img src="./assets/images/themes/lara-light-indigo.png" alt="Lara Light Indigo" />
                    </button>
                    <span>Lara Light Indigo</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'lara-light-blue', false)">
                        <img src="./assets/images/themes/lara-light-blue.png" alt="Lara Light Blue" />
                    </button>
                    <span>Lara Light Blue</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'lara-light-purple', false)">
                        <img src="./assets/images/themes/lara-light-purple.png" alt="Lara Light Purple" />
                    </button>
                    <span>Lara Light Purple</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'lara-light-teal', false)">
                        <img src="./assets/images/themes/lara-light-teal.png" alt="Lara Light Teal" />
                    </button>
                    <span>Lara Light Teal</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'lara-dark-indigo', true)">
                        <img src="./assets/images/themes/lara-dark-indigo.png" alt="Lara Dark Indigo" />
                    </button>
                    <span>Lara Dark Indigo</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'lara-dark-blue', true)">
                        <img src="./assets/images/themes/lara-dark-blue.png" alt="Lara Dark Blue" />
                    </button>
                    <span>Lara Dark Blue</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'lara-dark-purple', true)">
                        <img src="./assets/images/themes/lara-dark-purple.png" alt="Lara Dark Purple" />
                    </button>
                    <span>Lara Dark Purple</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'lara-dark-teal', true)">
                        <img src="./assets/images/themes/lara-dark-teal.png" alt="Lara Dark Teal" />
                    </button>
                    <span>Lara Dark Teal</span>
                </div>
            </div>

            <div class="config-title">PrimeOne Design - 2021</div>
            <div class="grid themes-grid">
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'saga-blue', false)">
                        <img src="./assets/images/themes/saga-blue.png" alt="Saga Blue" />
                    </button>
                    <span>Saga Blue</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'saga-green', false)">
                        <img src="./assets/images/themes/saga-green.png" alt="Saga Green" />
                    </button>
                    <span>Saga Green</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'saga-orange', false)">
                        <img src="./assets/images/themes/saga-orange.png" alt="Saga Orange" />
                    </button>
                    <span>Saga Orange</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'saga-purple', false)">
                        <img src="./assets/images/themes/saga-purple.png" alt="Saga Purple" />
                    </button>
                    <span>Saga Purple</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'vela-blue', true)">
                        <img src="./assets/images/themes/vela-blue.png" alt="Vela Blue" />
                    </button>
                    <span>Vela Blue</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'vela-green', true)">
                        <img src="./assets/images/themes/vela-green.png" alt="Vela Green" />
                    </button>
                    <span>Vela Green</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'vela-orange', true)">
                        <img src="./assets/images/themes/vela-orange.png" alt="Vela Orange" />
                    </button>
                    <span>Vela Orange</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'vela-purple', true)">
                        <img src="./assets/images/themes/vela-purple.png" alt="Vela Purple" />
                    </button>
                    <span>Vela Purple</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'arya-blue', true)">
                        <img src="./assets/images/themes/arya-blue.png" alt="Arya Blue" />
                    </button>
                    <span>Arya Blue</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'arya-green', true)">
                        <img src="./assets/images/themes/arya-green.png" alt="Arya Green" />
                    </button>
                    <span>Arya Green</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'arya-orange', true)">
                        <img src="./assets/images/themes/arya-orange.png" alt="Arya Orange" />
                    </button>
                    <span>Arya Orange</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'arya-purple', true)">
                        <img src="./assets/images/themes/arya-purple.png" alt="Arya Purple" />
                    </button>
                    <span>Arya Purple</span>
                </div>
            </div>

            <div class="config-title">Premium Themes</div>

            <div class="grid themes-grid">
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'soho-light', false)">
                        <img src="./assets/images/themes/soho-light.png" alt="Soho Light"/>
                    </button>
                    <span>Soho Light</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'soho-dark', true)">
                        <img src="./assets/images/themes/soho-dark.png" alt="Soho Dark"/>
                    </button>
                    <span>Soho Dark</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'viva-light', false)">
                        <img src="./assets/images/themes/viva-light.svg" alt="Viva Light"/>
                    </button>
                    <span>Viva Light</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'viva-dark', true)">
                        <img src="./assets/images/themes/viva-dark.svg" alt="Viva Dark"/>
                    </button>
                    <span>Viva Dark</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'mira', false)">
                        <img src="./assets/images/themes/mira.jpg" alt="Mira"/>
                    </button>
                    <span>Mira</span>
                </div>
                <div class="col-6 sm:col-3">
                    <button class="p-link" @click="changeTheme($event, 'nano', false)">
                        <img src="./assets/images/themes/nano.jpg" alt="Nano"/>
                    </button>
                    <span>Nano</span>
                </div>
            </div>
        </Sidebar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visibleSidebar: false,
            visibleTopbarMenu: false,
            scale: 16,
            scales: [12,13,14,15,16]
        }
    },
    methods: {
        changeTheme(event, theme, dark) {
            let themeElement = document.getElementById('theme-link');
            themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.$appState.theme, theme));
            this.$appState.theme = theme;
            this.$appState.dark = dark;
            event.preventDefault();
        },
        decrementScale() {
            this.scale--;
            this.applyScale();
        },
        incrementScale() {
            this.scale++;
            this.applyScale();
        },
        applyScale() {
            document.documentElement.style.fontSize = this.scale + 'px';
        },
        showTopbarMenu(event) {
            this.visibleTopbarMenu = true;
            event.preventDefault();
        }
    },
    computed: {
        containerClass() {
            return [
                'layout-wrapper', {
                    "layout-wrapper-dark": this.$appState.dark,
                    "p-input-filled": this.$primevue.config.inputStyle === "filled",
                    "p-ripple-disabled": !this.$primevue.config.ripple,
                }
            ]
        },
        desktopLogo() {
            if (this.$appState.dark)
                return  '-dark';
            return '';
        }
    },
    watch: {
        $route() {
            const i = this.$route.path.toString().indexOf('/');
            const last = this.$route.path.toString().indexOf('/', i+1);
            this.parentRoute = this.$route.path.toString().slice(0, last);
        }
    }
}
</script>

<style lang="scss">
@import './assets/styles/app/layout.scss';
</style>
