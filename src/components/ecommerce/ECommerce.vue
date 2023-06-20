<template>
    <div class="block-category-title">E-Commerce</div>
    <div class="block-category">
        <div class="block-group">
            <span class="block-group-title">Blocks</span>
            <div class="block-group-content">
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <router-link to="/ecommerce/productoverview">
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-productoverviews-dark.svg' : 'images/placeholders/placeholder-productoverviews.svg'" class="block-placeholder" alt="Product Overview">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-productlists-dark.svg' : 'images/placeholders/placeholder-productlists.svg'" class="block-placeholder" alt="Product Overview">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-categorypreviews-dark.svg' : 'images/placeholders/placeholder-categorypreviews.svg'" class="block-placeholder" alt="Product Overview">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-shoppingcarts-dark.svg' : 'images/placeholders/placeholder-shoppingcarts.svg'" class="block-placeholder" alt="Product Overview">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-categoryfilters-dark.svg' : 'images/placeholders/placeholder-categoryfilters.svg'" class="block-placeholder" alt="Product Overview">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-productquickviews-dark.svg' : 'images/placeholders/placeholder-productquickviews.svg'" class="block-placeholder" alt="Product Overview">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-productfeatures-dark.svg' : 'images/placeholders/placeholder-productfeatures.svg'" class="block-placeholder" alt="Product Overview">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-storenavigation-dark.svg' : 'images/placeholders/placeholder-storenavigation.svg'" class="block-placeholder" alt="Product Overview">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-promosections-dark.svg' : 'images/placeholders/placeholder-promosections.svg'" class="block-placeholder" alt="Product Overview">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-checkoutforms-dark.svg' : 'images/placeholders/placeholder-checkoutforms.svg'" class="block-placeholder" alt="Product Overview">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-reviews-dark.svg' : 'images/placeholders/placeholder-reviews.svg'" class="block-placeholder" alt="Product Overview">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-ordersummaries-dark.svg' : 'images/placeholders/placeholder-ordersummaries.svg'" class="block-placeholder" alt="Product Overview">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-orderhistory-dark.svg' : 'images/placeholders/placeholder-orderhistory.svg'" class="block-placeholder" alt="Product Overview">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-incentives-dark.svg' : 'images/placeholders/placeholder-incentives.svg'" class="block-placeholder" alt="Product Overview">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-storefrontpages-dark.svg' : 'images/placeholders/placeholder-storefrontpages.svg'" class="block-placeholder" alt="Store Front">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-productpages-dark.svg' : 'images/placeholders/placeholder-productpages.svg'" class="block-placeholder" alt="Store Front">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-categorypages-dark.svg' : 'images/placeholders/placeholder-categorypages.svg'" class="block-placeholder" alt="Store Front">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-shoppingcarts-dark.svg' : 'images/placeholders/placeholder-shoppingcarts.svg'" class="block-placeholder" alt="Store Front">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-checkoutpages-dark.svg' : 'images/placeholders/placeholder-checkoutpages.svg'" class="block-placeholder" alt="Store Front">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-orderdetailpages-dark.svg' : 'images/placeholders/placeholder-orderdetailpages.svg'" class="block-placeholder" alt="Store Front">
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
                            <img :src="$appState.dark ? 'images/placeholders/placeholder-orderhistorypages-dark.svg' : 'images/placeholders/placeholder-orderhistorypages.svg'" class="block-placeholder" alt="Store Front">
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
