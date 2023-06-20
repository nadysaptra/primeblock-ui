<template>
    <div class="introduction">
        <div class="introduction-content shadow-2 relative overflow-hidden">
            <div class="bg-drop bg-primary"></div>
            <div class="introduction-title text-900">Vue UI Blocks</div>
            <div class="introduction-subtitle">Powered by PrimeVue</div>
            <p><strong>370+</strong> ready to use UI blocks to build spectacular applications in no time.</p>
            <div class="flex flex-nowrap flex-column align-items-center sm:flex-row sm:justify-content-center">
                <Button label="Browse All" @click="viewBlocks('#application')" class="w-full sm:w-auto font-bold p-3 mb-3 sm:mb-0 sm:mr-3"></Button>
                <router-link to="/free" custom v-slot="{ navigate }">
                    <Button label="Free Blocks" class="w-full sm:w-auto p-button-outlined font-bold p-3" @click="navigate"></Button>
                </router-link>
            </div>
            <div class="video-container mt-5 z-2 relative">
                <iframe width="420" height="236" src="https://www.youtube.com/embed/videoseries?list=PLC9bp-OHi-Wn0Vw2rJBMf6do08_H7PVd6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen onload="this.classList.add('shadow-6')"></iframe>
            </div>
        </div>
    </div>

    <div id="application" class="block-category-title">Application UI</div>
    <div class="block-category">
        <div class="block-group">
            <span class="block-group-title">Application Shells</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/application/stackedlayout">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-stackedlayout-dark.svg' : 'images/placeholders/placeholder-stackedlayout.svg'" class="block-placeholder" alt="Stacked Layout" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Stacked Layout</span>
                                <span class="block-count">7 Blocks</span>
                            </div>
                            <span class="badge-new">2 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/sidebarlayout">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-sidebarlayouts-dark.svg' : 'images/placeholders/placeholder-sidebarlayouts.svg'" class="block-placeholder" alt="Sidebar Layout" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Sidebar Layout</span>
                                <span class="block-count">13 Blocks</span>
                            </div>
                            <span class="badge-new">1 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/multicolumnlayout">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-multicolumnlayouts-dark.svg' : 'images/placeholders/placeholder-multicolumnlayouts.svg'" class="block-placeholder" alt="Multi-Column Layout" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Multi Column Layout</span>
                                <span class="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-group">
            <span class="block-group-title">Samples</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/application/dashboard">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-dashboard-dark.svg' : 'images/placeholders/placeholder-dashboard.svg'" class="block-placeholder" alt="Dashboard" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Dashboard</span>
                                <span class="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/detailscreen">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-detailscreens-dark.svg' : 'images/placeholders/placeholder-detailscreens.svg'" class="block-placeholder" alt="Detail" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Detail</span>
                                <span class="block-count">1 Block</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/settingscreen">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-settingscreens-dark.svg' : 'images/placeholders/placeholder-settingscreens.svg'" class="block-placeholder" alt="Settings" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Setting</span>
                                <span class="block-count">1 Block</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-group">
            <span class="block-group-title">Headings</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/application/pageheading">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-pageheadings-dark.svg' : 'images/placeholders/placeholder-pageheadings.svg'" class="block-placeholder" alt="Page Heading" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Page Heading</span>
                                <span class="block-count">13 Blocks</span>
                            </div>
                            <span class="badge-new">1 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/cardheading">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-cardheadings-dark.svg' : 'images/placeholders/placeholder-cardheadings.svg'" class="block-placeholder" alt="Card Heading" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Card Heading</span>
                                <span class="block-count">7 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/sectionheading">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-sectionheadings-dark.svg' : 'images/placeholders/placeholder-sectionheadings.svg'" class="block-placeholder" alt="Section Heading" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Section Heading</span>
                                <span class="block-count">4 Blocks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-group">
            <span class="block-group-title">Data Display</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/application/descriptionlist">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-descriptionlist-dark.svg' : 'images/placeholders/placeholder-descriptionlist.svg'" class="block-placeholder" alt="Description List" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Description List</span>
                                <span class="block-count">4 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/stats">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-stats-data-dark.svg' : 'images/placeholders/placeholder-stats-data.svg'" class="block-placeholder" alt="Stats" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Stats</span>
                                <span class="block-count">11 Blocks</span>
                            </div>
                            <span class="badge-new">2 New</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-group">
            <span class="block-group-title">Lists</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/application/stackedlist">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-stackedlists-dark.svg' : 'images/placeholders/placeholder-stackedlists.svg'" class="block-placeholder" alt="Stacked List" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Stacked List</span>
                                <span class="block-count">6 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/gridlist">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-gridlists-dark.svg' : 'images/placeholders/placeholder-gridlists.svg'" class="block-placeholder" alt="Grid List" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Grid List</span>
                                <span class="block-count">8 Blocks</span>
                            </div>
                            <span class="badge-new">1 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/feed">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-feeds-dark.svg' : 'images/placeholders/placeholder-feeds.svg'" class="block-placeholder" alt="Feed" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Feed</span>
                                <span class="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-group">
            <span class="block-group-title">Forms</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/application/formlayout">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-formlayouts-dark.svg' : 'images/placeholders/placeholder-formlayouts.svg'" class="block-placeholder" alt="Form Layout" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Form Layout</span>
                                <span class="block-count">4 Blocks</span>
                            </div>
                            <span class="badge-new">1 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/signin">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-signin-dark.svg' : 'images/placeholders/placeholder-signin.svg'" class="block-placeholder" alt="Sign-in" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Sign-in</span>
                                <span class="block-count">5 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/radiogroup">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-radiogroups-dark.svg' : 'images/placeholders/placeholder-radiogroups.svg'" class="block-placeholder" alt="Radio Group" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Radio Group</span>
                                <span class="block-count">7 Blocks</span>
                            </div>
                            <span class="badge-new">1 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/actionpanel">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-actionpanels-dark.svg' : 'images/placeholders/placeholder-actionpanels.svg'" class="block-placeholder" alt="Action Panel" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Action Panel</span>
                                <span class="block-count">7 Blocks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-group">
            <span class="block-group-title">Feedback</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/application/alert">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-alert-dark.svg' : 'images/placeholders/placeholder-alert.svg'" class="block-placeholder" alt="Alert" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Alert</span>
                                <span class="block-count">4 Blocks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-group">
            <span class="block-group-title">Navigation</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/application/navbar">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-app-navbar-dark.svg' : 'images/placeholders/placeholder-app-navbar.svg'" class="block-placeholder" alt="Navbar" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Navbar</span>
                                <span class="block-count">11 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/tabs">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-tabs-dark.svg' : 'images/placeholders/placeholder-tabs.svg'" class="block-placeholder" alt="Tabs" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Tabs</span>
                                <span class="block-count">6 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/verticalnav">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-verticalnavigation-dark.svg' : 'images/placeholders/placeholder-verticalnavigation.svg'" class="block-placeholder" alt="Vertical Navigation" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Vertical Navigation</span>
                                <span class="block-count">7 Blocks</span>
                            </div>
                            <span class="badge-new">2 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/sidebarnav">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-sidebarnavigation-dark.svg' : 'images/placeholders/placeholder-sidebarnavigation.svg'" class="block-placeholder" alt="Sidebar Navigation" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Sidebar Navigation</span>
                                <span class="block-count">5 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/breadcrumb">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-breadcrumb-dark.svg' : 'images/placeholders/placeholder-breadcrumb.svg'" class="block-placeholder" alt="Breadcrumb" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Breadcrumbs</span>
                                <span class="block-count">5 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/steps">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-steps-dark.svg' : 'images/placeholders/placeholder-steps.svg'" class="block-placeholder" alt="Steps" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Steps</span>
                                <span class="block-count">6 Blocks</span>
                            </div>
                            <span class="badge-new">1 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/footer">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-footers-appui-dark.svg' : 'images/placeholders/placeholder-footers-appui.svg'" class="block-placeholder" alt="Footer" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Footer</span>
                                <span class="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-group">
            <span class="block-group-title">Overlays</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/application/dialog">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-dialog-dark.svg' : 'images/placeholders/placeholder-dialog.svg'" class="block-placeholder" alt="Modal" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Dialog</span>
                                <span class="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/slideover">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-slideovers-dark.svg' : 'images/placeholders/placeholder-slideovers.svg'" class="block-placeholder" alt="Slide-over" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">SlideOver</span>
                                <span class="block-count">10 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/notification">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-notification-dark.svg' : 'images/placeholders/placeholder-notification.svg'" class="block-placeholder" alt="Notification" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Notification</span>
                                <span class="block-count">7 Blocks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-group">
            <span class="block-group-title">Pages</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/application/pagenotfound">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-pagenotfound-dark.svg' : 'images/placeholders/placeholder-pagenotfound.svg'" class="block-placeholder" alt="Container" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Page Not Found</span>
                                <span class="block-count">4 Blocks</span>
                            </div>
                            <span class="badge-new">1 New</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="block-group">
            <span class="block-group-title">Layout</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/application/container">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-containers-dark.svg' : 'images/placeholders/placeholder-containers.svg'" class="block-placeholder" alt="Container" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Container</span>
                                <span class="block-count">5 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/panel">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-panels-dark.svg' : 'images/placeholders/placeholder-panels.svg'" class="block-placeholder" alt="Panel" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Panel</span>
                                <span class="block-count">4 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/listcontainer">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-listcontainers-dark.svg' : 'images/placeholders/placeholder-listcontainers.svg'" class="block-placeholder" alt="List Container" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">List Container</span>
                                <span class="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/application/divider">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-dividers-dark.svg' : 'images/placeholders/placeholder-dividers.svg'" class="block-placeholder" alt="Dividers" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Divider</span>
                                <span class="block-count">6 Blocks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="block-category-title">Marketing</div>
    <div class="block-category">
        <div class="block-group">
            <span class="block-group-title">Page Sections</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/hero">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-hero-dark.svg' : 'images/placeholders/placeholder-hero.svg'" class="block-placeholder" alt="Hero" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Hero</span>
                                <span class="block-count">6 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/feature">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-feature-dark.svg' : 'images/placeholders/placeholder-feature.svg'" class="block-placeholder" alt="Feature" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Feature</span>
                                <span class="block-count">14 Blocks</span>
                            </div>
                            <span class="badge-new">2 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/cta">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-cta-dark.svg' : 'images/placeholders/placeholder-cta.svg'" class="block-placeholder" alt="CTA" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Call to Action</span>
                                <span class="block-count">12 Blocks</span>
                            </div>
                            <span class="badge-new">1 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/pricing">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-pricing-dark.svg' : 'images/placeholders/placeholder-pricing.svg'" class="block-placeholder" alt="Pricing" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Pricing</span>
                                <span class="block-count">6 Blocks</span>
                            </div>
                            <span class="badge-new">1 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/faq">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-faq-dark.svg' : 'images/placeholders/placeholder-faq.svg'" class="block-placeholder" alt="FAQ" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">FAQ</span>
                                <span class="block-count">5 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/newsletter">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-newsletter-dark.svg' : 'images/placeholders/placeholder-newsletter.svg'" class="block-placeholder" alt="Newsletter" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Newsletter</span>
                                <span class="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/stats">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-stats-dark.svg' : 'images/placeholders/placeholder-stats.svg'" class="block-placeholder" alt="Newsletter" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Stats</span>
                                <span class="block-count">5 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/testimonials">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-testimonials-dark.svg' : 'images/placeholders/placeholder-testimonials.svg'" class="block-placeholder" alt="Testimonial" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Testimonial</span>
                                <span class="block-count">5 Blocks</span>
                            </div>
                            <span class="badge-new">1 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/blog">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-blogsections-dark.svg' : 'images/placeholders/placeholder-blogsections.svg'" class="block-placeholder" alt="Blog" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Blog</span>
                                <span class="block-count">7 Blocks</span>
                            </div>
                            <span class="badge-new">1 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/contact">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-contactsections-dark.svg' : 'images/placeholders/placeholder-contactsections.svg'" class="block-placeholder" alt="Contact" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Contact</span>
                                <span class="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/team">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-teamsections-dark.svg' : 'images/placeholders/placeholder-teamsections.svg'" class="block-placeholder" alt="Team" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Team</span>
                                <span class="block-count">5 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/content">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-contentsections-dark.svg' : 'images/placeholders/placeholder-contentsections.svg'" class="block-placeholder" alt="Content" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Content</span>
                                <span class="block-count">3 Blocks</span>
                            </div>
                            <span class="badge-new">1 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/footer">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-footer-dark.svg' : 'images/placeholders/placeholder-footer.svg'" class="block-placeholder" alt="Footer" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Footer</span>
                                <span class="block-count">7 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/logocloud">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-logocloud-dark.svg' : 'images/placeholders/placeholder-logocloud.svg'" class="block-placeholder" alt="Logo Cloud" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Logo Cloud</span>
                                <span class="block-count">5 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/navbar">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-marketing-navbar-dark.svg' : 'images/placeholders/placeholder-marketing-navbar.svg'" class="block-placeholder" alt="NavBar" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">NavBar</span>
                                <span class="block-count">6 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/banner">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-banner-dark.svg' : 'images/placeholders/placeholder-banner.svg'" class="block-placeholder" alt="Banners" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Banner</span>
                                <span class="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-group">
            <span class="block-group-title">Samples</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/landing">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-landingscreens-dark.svg' : 'images/placeholders/placeholder-landingscreens.svg'" class="block-placeholder" alt="Landing" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Landing</span>
                                <span class="block-count">2 Blocks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="block-category-title">E-Commerce</div>
    <div class="block-category">
        <div class="block-group">
            <span class="block-group-title">Blocks</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/productoverview">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-productoverviews-dark.svg' : 'images/placeholders/placeholder-productoverviews.svg'" class="block-placeholder" alt="Product Overview" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Product Overview</span>
                                <span class="block-count">4 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/productlist">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-productlists-dark.svg' : 'images/placeholders/placeholder-productlists.svg'" class="block-placeholder" alt="Product Overview" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Product List</span>
                                <span class="block-count">9 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/categorypreview">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-categorypreviews-dark.svg' : 'images/placeholders/placeholder-categorypreviews.svg'" class="block-placeholder" alt="Product Overview" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Category Preview</span>
                                <span class="block-count">7 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/shoppingcart">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-shoppingcarts-dark.svg' : 'images/placeholders/placeholder-shoppingcarts.svg'" class="block-placeholder" alt="Product Overview" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Shopping Cart</span>
                                <span class="block-count">5 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/categoryfilter">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-categoryfilters-dark.svg' : 'images/placeholders/placeholder-categoryfilters.svg'" class="block-placeholder" alt="Product Overview" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Category Filter</span>
                                <span class="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/productquickview">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-productquickviews-dark.svg' : 'images/placeholders/placeholder-productquickviews.svg'" class="block-placeholder" alt="Product Overview" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Product Quickview</span>
                                <span class="block-count">2 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/productfeature">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-productfeatures-dark.svg' : 'images/placeholders/placeholder-productfeatures.svg'" class="block-placeholder" alt="Product Overview" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Product Feature</span>
                                <span class="block-count">7 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/storenavigation">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-storenavigation-dark.svg' : 'images/placeholders/placeholder-storenavigation.svg'" class="block-placeholder" alt="Product Overview" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Store Navigation</span>
                                <span class="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/promosection">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-promosections-dark.svg' : 'images/placeholders/placeholder-promosections.svg'" class="block-placeholder" alt="Product Overview" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Promo Section</span>
                                <span class="block-count">6 Blocks</span>
                            </div>
                            <span class="badge-new">1 New</span>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/checkoutform">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-checkoutforms-dark.svg' : 'images/placeholders/placeholder-checkoutforms.svg'" class="block-placeholder" alt="Product Overview" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Checkout Form</span>
                                <span class="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/review">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-reviews-dark.svg' : 'images/placeholders/placeholder-reviews.svg'" class="block-placeholder" alt="Product Overview" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Review</span>
                                <span class="block-count">4 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/ordersummary">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-ordersummaries-dark.svg' : 'images/placeholders/placeholder-ordersummaries.svg'" class="block-placeholder" alt="Product Overview" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Order Summary</span>
                                <span class="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/orderhistory">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-orderhistory-dark.svg' : 'images/placeholders/placeholder-orderhistory.svg'" class="block-placeholder" alt="Product Overview" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Order History</span>
                                <span class="block-count">1 Block</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/incentive">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-incentives-dark.svg' : 'images/placeholders/placeholder-incentives.svg'" class="block-placeholder" alt="Product Overview" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Incentive</span>
                                <span class="block-count">4 Blocks</span>
                            </div>
                            <span class="badge-new">1 New</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-group">
            <span class="block-group-title">Page Samples</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/storefront">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-storefrontpages-dark.svg' : 'images/placeholders/placeholder-storefrontpages.svg'" class="block-placeholder" alt="Store Front" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Storefront</span>
                                <span class="block-count">2 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/productpage">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-productpages-dark.svg' : 'images/placeholders/placeholder-productpages.svg'" class="block-placeholder" alt="Store Front" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Product Page</span>
                                <span class="block-count">1 Block</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/categorypage">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-categorypages-dark.svg' : 'images/placeholders/placeholder-categorypages.svg'" class="block-placeholder" alt="Store Front" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Category Page</span>
                                <span class="block-count">1 Block</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/shoppingcartpage">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-shoppingcarts-dark.svg' : 'images/placeholders/placeholder-shoppingcarts.svg'" class="block-placeholder" alt="Store Front" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Shopping Cart Page</span>
                                <span class="block-count">1 Block</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/checkoutpage">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-checkoutpages-dark.svg' : 'images/placeholders/placeholder-checkoutpages.svg'" class="block-placeholder" alt="Store Front" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Checkout Page</span>
                                <span class="block-count">1 Blocks</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/orderdetailpage">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-orderdetailpages-dark.svg' : 'images/placeholders/placeholder-orderdetailpages.svg'" class="block-placeholder" alt="Store Front" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Order Detail Page</span>
                                <span class="block-count">1 Block</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/orderhistorypage">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-orderhistorypages-dark.svg' : 'images/placeholders/placeholder-orderhistorypages.svg'" class="block-placeholder" alt="Store Front" />
                        </router-link>
                        <div class="flex align-items-start justify-content-between">
                            <div>
                                <span class="block-name">Order History Page</span>
                                <span class="block-count">1 Blocks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        viewBlocks(id) {
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>
