<template>
    <div class="block-category-title">Marketing</div>
    <div class="block-category">
        <div class="block-group">
            <span class="block-group-title">Page Sections</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/marketing/hero">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-hero-dark.svg' : 'images/placeholders/placeholder-hero.svg'" class="block-placeholder" alt="Hero">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-feature-dark.svg' : 'images/placeholders/placeholder-feature.svg'" class="block-placeholder" alt="Feature">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-cta-dark.svg' : 'images/placeholders/placeholder-cta.svg'" class="block-placeholder" alt="CTA">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-pricing-dark.svg' : 'images/placeholders/placeholder-pricing.svg'" class="block-placeholder" alt="Pricing">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-faq-dark.svg' : 'images/placeholders/placeholder-faq.svg'" class="block-placeholder" alt="FAQ">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-newsletter-dark.svg' : 'images/placeholders/placeholder-newsletter.svg'" class="block-placeholder" alt="Newsletter">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-stats-dark.svg' : 'images/placeholders/placeholder-stats.svg'" class="block-placeholder" alt="Newsletter">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-testimonials-dark.svg' : 'images/placeholders/placeholder-testimonials.svg'" class="block-placeholder" alt="Testimonial">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-blogsections-dark.svg' : 'images/placeholders/placeholder-blogsections.svg'" class="block-placeholder" alt="Blog">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-contactsections-dark.svg' : 'images/placeholders/placeholder-contactsections.svg'" class="block-placeholder" alt="Contact">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-teamsections-dark.svg' : 'images/placeholders/placeholder-teamsections.svg'" class="block-placeholder" alt="Team">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-contentsections-dark.svg' : 'images/placeholders/placeholder-contentsections.svg'" class="block-placeholder" alt="Content">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-footer-dark.svg' : 'images/placeholders/placeholder-footer.svg'" class="block-placeholder" alt="Footer">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-logocloud-dark.svg' : 'images/placeholders/placeholder-logocloud.svg'" class="block-placeholder" alt="Logo Cloud">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-marketing-navbar-dark.svg' : 'images/placeholders/placeholder-marketing-navbar.svg'" class="block-placeholder" alt="NavBar">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-banner-dark.svg' : 'images/placeholders/placeholder-banner.svg'" class="block-placeholder" alt="Banners">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-landingscreens-dark.svg' : 'images/placeholders/placeholder-landingscreens.svg'" class="block-placeholder" alt="Landing">
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
</template>

<script>
export default {
    name: 'Marketing'
}
</script>
