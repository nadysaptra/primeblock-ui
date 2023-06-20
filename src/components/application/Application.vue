<template>
    <div>
        <div class="block-category-title">Application UI</div>
        <div class="block-category">
            <div class="block-group">
                <span class="block-group-title">Application Shells</span>
                <div class="block-group-content">
                    <div class="grid">
                        <div class="col-12 md:col-3">
                            <router-link to="/application/stackedlayout">
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-stackedlayout-dark.svg' : 'images/placeholders/placeholder-stackedlayout.svg'" class="block-placeholder" alt="Stacked Layout">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-sidebarlayouts-dark.svg' : 'images/placeholders/placeholder-sidebarlayouts.svg'" class="block-placeholder" alt="Sidebar Layout">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-multicolumnlayouts-dark.svg' : 'images/placeholders/placeholder-multicolumnlayouts.svg'" class="block-placeholder" alt="Multi-Column Layout">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-dashboard-dark.svg' : 'images/placeholders/placeholder-dashboard.svg'" class="block-placeholder" alt="Dashboard">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-detailscreens-dark.svg' : 'images/placeholders/placeholder-detailscreens.svg'" class="block-placeholder" alt="Detail">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-settingscreens-dark.svg' : 'images/placeholders/placeholder-settingscreens.svg'" class="block-placeholder" alt="Settings">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-pageheadings-dark.svg' : 'images/placeholders/placeholder-pageheadings.svg'" class="block-placeholder" alt="Page Heading">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-cardheadings-dark.svg' : 'images/placeholders/placeholder-cardheadings.svg'" class="block-placeholder" alt="Card Heading">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-sectionheadings-dark.svg' : 'images/placeholders/placeholder-sectionheadings.svg'" class="block-placeholder" alt="Section Heading">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-descriptionlist-dark.svg' : 'images/placeholders/placeholder-descriptionlist.svg'" class="block-placeholder" alt="Description List">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-stats-data-dark.svg' : 'images/placeholders/placeholder-stats-data.svg'" class="block-placeholder" alt="Stats">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-stackedlists-dark.svg' : 'images/placeholders/placeholder-stackedlists.svg'" class="block-placeholder" alt="Stacked List">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-gridlists-dark.svg' : 'images/placeholders/placeholder-gridlists.svg'" class="block-placeholder" alt="Grid List">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-feeds-dark.svg' : 'images/placeholders/placeholder-feeds.svg'" class="block-placeholder" alt="Feed">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-formlayouts-dark.svg' : 'images/placeholders/placeholder-formlayouts.svg'" class="block-placeholder" alt="Form Layout">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-signin-dark.svg' : 'images/placeholders/placeholder-signin.svg'" class="block-placeholder" alt="Sign-in">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-radiogroups-dark.svg' : 'images/placeholders/placeholder-radiogroups.svg'" class="block-placeholder" alt="Radio Group">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-actionpanels-dark.svg' : 'images/placeholders/placeholder-actionpanels.svg'" class="block-placeholder" alt="Action Panel">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-alert-dark.svg' : 'images/placeholders/placeholder-alert.svg'" class="block-placeholder" alt="Alert">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-app-navbar-dark.svg' : 'images/placeholders/placeholder-app-navbar.svg'" class="block-placeholder" alt="Navbar">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-tabs-dark.svg' : 'images/placeholders/placeholder-tabs.svg'" class="block-placeholder" alt="Tabs">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-verticalnavigation-dark.svg' : 'images/placeholders/placeholder-verticalnavigation.svg'" class="block-placeholder" alt="Vertical Navigation">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-sidebarnavigation-dark.svg' : 'images/placeholders/placeholder-sidebarnavigation.svg'" class="block-placeholder" alt="Sidebar Navigation">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-breadcrumb-dark.svg' : 'images/placeholders/placeholder-breadcrumb.svg'" class="block-placeholder" alt="Breadcrumb">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-steps-dark.svg' : 'images/placeholders/placeholder-steps.svg'" class="block-placeholder" alt="Steps">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-footers-appui-dark.svg' : 'images/placeholders/placeholder-footers-appui.svg'" class="block-placeholder" alt="Footer">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-dialog-dark.svg' : 'images/placeholders/placeholder-dialog.svg'" class="block-placeholder" alt="Modal">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-slideovers-dark.svg' : 'images/placeholders/placeholder-slideovers.svg'" class="block-placeholder" alt="Slide-over">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-notification-dark.svg' : 'images/placeholders/placeholder-notification.svg'" class="block-placeholder" alt="Notification">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-pagenotfound-dark.svg' : 'images/placeholders/placeholder-pagenotfound.svg'" class="block-placeholder" alt="Container">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-containers-dark.svg' : 'images/placeholders/placeholder-containers.svg'" class="block-placeholder" alt="Container">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-panels-dark.svg' : 'images/placeholders/placeholder-panels.svg'" class="block-placeholder" alt="Panel">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-listcontainers-dark.svg' : 'images/placeholders/placeholder-listcontainers.svg'" class="block-placeholder" alt="List Container">
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
                                <img :src="$appState.dark ? 'images/placeholders/placeholder-dividers-dark.svg' : 'images/placeholders/placeholder-dividers.svg'" class="block-placeholder" alt="Dividers">
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
    </div>
</template>

<script>
export default {
    name: 'Application'
}
</script>
