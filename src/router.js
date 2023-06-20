import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        exact: true,
        component: () => import('./components/Home.vue')
    },
    {
        path: '/marketing',
        name: 'Marketing',
        component: () => import('./components/marketing/Marketing.vue'),
        meta: {
            breadcrumb: [{ label: 'Marketing' }],
        }
    },
    {
        path: '/marketing/banner',
        name: 'Banner',
        component: () => import ('./components/marketing/banner/Banner.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'Banner' }]
        }
    },
    {
        path: '/marketing/blog',
        name: 'Blog',
        component: () => import ('./components/marketing/blog/Blog.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'Blog' }]
        }
    },
    {
        path: '/marketing/contact',
        name: 'Contact',
        component: () => import ('./components/marketing/contact/Contact.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'Contact' }]
        }
    },
    {
        path: '/marketing/content',
        name: 'Content',
        component: () => import ('./components/marketing/content/Content.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'Content' }]
        }
    },
    {
        path: '/marketing/cta',
        name: 'CTA',
        component: () => import ('./components/marketing/cta/CTA.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'CTA' }]
        }
    },
    {
        path: '/marketing/faq',
        name: 'FAQ',
        component: () => import ('./components/marketing/faq/FAQ.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'FAQ' }]
        }
    },
    {
        path: '/marketing/feature',
        name: 'Feature',
        component: () => import ('./components/marketing/feature/Feature.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'Feature' }]
        }
    },
    {
        path: '/marketing/footer',
        name: 'Marketing Footer',
        component: () => import ('./components/marketing/footer/Footer.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'Footer' }]
        }
    },
    {
        path: '/marketing/hero',
        name: 'Hero',
        component: () => import ('./components/marketing/hero/Hero.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'Hero' }]
        }
    },
    {
        path: '/marketing/landing',
        name: 'Landing',
        component: () => import ('./components/marketing/landing/Landing.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'Landing' }]
        }
    },
    {
        path: '/marketing/logocloud',
        name: 'LogoCloud',
        component: () => import ('./components/marketing/logocloud/LogoCloud.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'Logo Cloud' }]
        }
    },
    {
        path: '/marketing/navbar',
        name: 'Marketing NavBar',
        component: () => import ('./components/marketing/navbar/NavBar.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'NavBar' }]
        }
    },
    {
        path: '/marketing/newsletter',
        name: 'Newsletter',
        component: () => import ('./components/marketing/newsletter/Newsletter.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'Newsletter' }]
        }
    },
    {
        path: '/marketing/pricing',
        name: 'Marketing Pricing',
        component: () => import ('./components/marketing/pricing/Pricing.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'Pricing' }]
        }
    },
    {
        path: '/marketing/stats',
        name: 'Marketing Stats',
        component: () => import ('./components/marketing/stats/Stats.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'Stats' }]
        }
    },
    {
        path: '/marketing/team',
        name: 'Team',
        component: () => import ('./components/marketing/team/Team.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'Team' }]
        }
    },
    {
        path: '/marketing/testimonials',
        name: 'Testimonials',
        component: () => import ('./components/marketing/testimonials/Testimonials.vue'),
        meta: {
            breadcrumb: [{ parent: 'marketing', label: 'Testimonials' }]
        }
    },
    {
        path: '/application',
        name: 'Application',
        component: () => import('./components/application/Application.vue'),
        meta: {
            breadcrumb: [{ label: 'Application' }],
        }
    },
    {
        path: '/application/actionpanel',
        name: 'ActionPanel',
        component: () => import ('./components/application/actionpanel/ActionPanel.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Action Panel' }]
        }
    },
    {
        path: '/application/alert',
        name: 'Alert',
        component: () => import ('./components/application/alert/Alert.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Alert' }]
        }
    },
    {
        path: '/application/breadcrumb',
        name: 'Breadcrumb',
        component: () => import ('./components/application/breadcrumb/Breadcrumb.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Breadcrumb' }]
        }
    },
    {
        path: '/application/cardheading',
        name: 'CardHeading',
        component: () => import ('./components/application/cardheading/CardHeading.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Card Heading' }]
        }
    },
    {
        path: '/application/container',
        name: 'Container',
        component: () => import ('./components/application/container/Container.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Container' }]
        }
    },
    {
        path: '/application/Dashboard',
        name: 'Dashboard',
        component: () => import ('./components/application/dashboard/Dashboard.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Dashboard' }]
        }
    },
    {
        path: '/application/descriptionlist',
        name: 'DescriptionList',
        component: () => import ('./components/application/descriptionlist/DescriptionList.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Description List' }]
        }
    },
    {
        path: '/application/detailscreen',
        name: 'DetailScreen',
        component: () => import ('./components/application/detailscreen/DetailScreen.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Detail Screen' }]
        }
    },
    {
        path: '/application/dialog',
        name: 'DialogPage',
        component: () => import ('./components/application/dialog/DialogPage.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Dialog' }]
        }
    },
    {
        path: '/application/divider',
        name: 'Divider',
        component: () => import ('./components/application/divider/Divider.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Divider' }]
        }
    },
    {
        path: '/application/feed',
        name: 'Feed',
        component: () => import ('./components/application/feed/Feed.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Feed' }]
        }
    },
    {
        path: '/application/footer',
        name: 'Application Footer',
        component: () => import ('./components/application/footer/Footer.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Footer' }]
        }
    },
    {
        path: '/application/formlayout',
        name: 'FormLayout',
        component: () => import ('./components/application/formlayout/FormLayout.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Form Layout' }]
        }
    },
    {
        path: '/application/gridlist',
        name: 'GridList',
        component: () => import ('./components/application/gridlist/GridList.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Grid List' }]
        }
    },
    {
        path: '/application/listcontainer',
        name: 'ListContainer',
        component: () => import ('./components/application/listcontainer/ListContainer.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'List Container' }]
        }
    },
    {
        path: '/application/multicolumnlayout',
        name: 'MultiColumnLayout',
        component: () => import ('./components/application/multicolumnlayout/MultiColumnLayout.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Multi Column Layout' }]
        }
    },
    {
        path: '/application/navbar',
        name: 'Application NavBar',
        component: () => import ('./components/application/navbar/NavBar.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'NavBar' }]
        }
    },
    {
        path: '/application/notification',
        name: 'Notification',
        component: () => import ('./components/application/notification/Notification.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Notification' }]
        }
    },
    {
        path: '/application/pagenotfound',
        name: 'PageNotFound',
        component: () => import ('./components/application/pagenotfound/PageNotFound.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Notification' }]
        }
    },
    {
        path: '/application/pageheading',
        name: 'PageHeading',
        component: () => import ('./components/application/pageheading/PageHeading.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Page Heading' }]
        }
    },
    {
        path: '/application/panel',
        name: 'Panel',
        component: () => import ('./components/application/panel/Panel.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Panel' }]
        }
    },
    {
        path: '/application/radiogroup',
        name: 'RadioGroup',
        component: () => import ('./components/application/radiogroup/RadioGroup.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'RadioGroup' }]
        }
    },
    {
        path: '/application/sectionheading',
        name: 'SectionHeading',
        component: () => import ('./components/application/sectionheading/SectionHeading.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Section Heading' }]
        }
    },
    {
        path: '/application/settingscreen',
        name: 'SettingScreen',
        component: () => import ('./components/application/settingscreen/SettingScreen.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Setting Screen' }]
        }
    },
    {
        path: '/application/sidebarlayout',
        name: 'SidebarLayout',
        component: () => import ('./components/application/sidebarlayout/SidebarLayout.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Sidebar Layout' }]
        }
    },
    {
        path: '/application/sidebarnav',
        name: 'SidebarNav',
        component: () => import ('./components/application/sidebarnav/SidebarNav.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'SidebarNav' }]
        }
    },
    {
        path: '/application/signin',
        name: 'SignIn',
        component: () => import ('./components/application/signin/SignIn.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'SignIn' }]
        }
    },
    {
        path: '/application/slideover',
        name: 'SlideOver',
        component: () => import ('./components/application/slideover/SlideOver.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'SlideOver' }]
        }
    },
    {
        path: '/application/stackedlayout',
        name: 'StackedLayout',
        component: () => import ('./components/application/stackedlayout/StackedLayout.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Stacked Layout' }]
        }
    },
    {
        path: '/application/stackedlist',
        name: 'Application StackedList',
        component: () => import ('./components/application/stackedlist/StackedList.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Stacked List' }]
        }
    },
    {
        path: '/application/stats',
        name: 'Application Stats',
        component: () => import ('./components/application/stats/Stats.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Stats' }]
        }
    },
    {
        path: '/application/steps',
        name: 'Steps',
        component: () => import ('./components/application/steps/Steps.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Steps' }]
        }
    },
    {
        path: '/application/tabs',
        name: 'Tabs',
        component: () => import ('./components/application/tabs/Tabs.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'Tabs' }]
        }
    },
    {
        path: '/application/verticalnav',
        name: 'VerticalNav',
        component: () => import ('./components/application/verticalnav/VerticalNav.vue'),
        meta: {
            breadcrumb: [{ parent: 'application', label: 'VerticalNav' }]
        }
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: () => import('./components/pricing/Pricing.vue'),
        meta: {
            breadcrumb: [{ label: 'Pricing' }],
        }
    },
    {
        path: '/documentation',
        name: 'Documentation',
        component: () => import('./components/documentation/Documentation.vue'),
        meta: {
            breadcrumb: [{ label: 'Documentation' }],
        }
    },
    {
        path: '/free',
        name: 'Free',
        component: () => import('./components/free/Free.vue'),
        meta: {
            breadcrumb: [{ label: 'Free' }],
        }
    },
    {
        path: '/ecommerce',
        name: 'E-Commerce',
        component: () => import('./components/ecommerce/ECommerce.vue'),
        meta: {
            breadcrumb: [{ label: 'E-Commerce' }],
        }
    },
    {
        path: '/ecommerce/categoryfilter',
        name: 'CategoryFilter',
        component: () => import('./components/ecommerce/categoryfilter/CategoryFilter.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Category Filter' }],
        }
    },
    {
        path: '/ecommerce/categorypage',
        name: 'CategoryPage',
        component: () => import('./components/ecommerce/categorypage/CategoryPage.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Category Page' }],
        }
    },
    {
        path: '/ecommerce/categorypreview',
        name: 'CategoryPreview',
        component: () => import('./components/ecommerce/categorypreview/CategoryPreview.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Category Preview' }],
        }
    },
    {
        path: '/ecommerce/checkoutform',
        name: 'CheckoutForm',
        component: () => import('./components/ecommerce/checkoutform/CheckoutForm.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Checkout Forms' }],
        }
    },
    {
        path: '/ecommerce/checkoutpage',
        name: 'CheckoutPage',
        component: () => import('./components/ecommerce/checkoutpage/CheckoutPage.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Checkout Pages' }],
        }
    },
    {
        path: '/ecommerce/incentive',
        name: 'Incentive',
        component: () => import('./components/ecommerce/incentive/Incentive.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Incentive' }],
        }
    },
    {
        path: '/ecommerce/orderdetailpage',
        name: 'OrderDetailPage',
        component: () => import('./components/ecommerce/orderdetailpage/OrderDetailPage.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Order Detail Pages' }],
        }
    },
    {
        path: '/ecommerce/orderhistory',
        name: 'OrderHistory',
        component: () => import('./components/ecommerce/orderhistory/OrderHistory.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Order History' }],
        }
    },
    {
        path: '/ecommerce/orderhistorypage',
        name: 'OrderHistoryPage',
        component: () => import('./components/ecommerce/orderhistorypage/OrderHistoryPage.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Order History Pages' }],
        }
    },
    {
        path: '/ecommerce/ordersummary',
        name: 'OrderSummary',
        component: () => import('./components/ecommerce/ordersummary/OrderSummary.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Order Summary' }],
        }
    },
    {
        path: '/ecommerce/productfeature',
        name: 'ProductFeature',
        component: () => import('./components/ecommerce/productfeature/ProductFeature.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Product Feature' }],
        }
    },
    {
        path: '/ecommerce/productlist',
        name: 'ProductList',
        component: () => import('./components/ecommerce/productlist/ProductList.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Product List' }],
        }
    },
    {
        path: '/ecommerce/productoverview',
        name: 'ProductOverview',
        component: () => import('./components/ecommerce/productoverview/ProductOverview.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Product Overview' }],
        }
    },
    {
        path: '/ecommerce/productpage',
        name: 'ProductPage',
        component: () => import('./components/ecommerce/productpage/ProductPage.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Product Page' }],
        }
    },
    {
        path: '/ecommerce/productquickview',
        name: 'ProductQuickview',
        component: () => import('./components/ecommerce/productquickview/ProductQuickView.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Product Quickview' }],
        }
    },
    {
        path: '/ecommerce/promosection',
        name: 'PromoSection',
        component: () => import('./components/ecommerce/promosection/PromoSection.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Promo Section' }],
        }
    },
    {
        path: '/ecommerce/review',
        name: 'Review',
        component: () => import('./components/ecommerce/review/Review.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Review' }],
        }
    },
    {
        path: '/ecommerce/shoppingcart',
        name: 'ShoppingCart',
        component: () => import('./components/ecommerce/shoppingcart/ShoppingCart.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Shopping Cart' }],
        }
    },
    {
        path: '/ecommerce/shoppingcartpage',
        name: 'ShoppingCartPage',
        component: () => import('./components/ecommerce/shoppingcartpage/ShoppingCartPage.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Shopping Cart Pages' }],
        }
    },
    {
        path: '/ecommerce/storefront',
        name: 'StoreFront',
        component: () => import('./components/ecommerce/storefront/StoreFront.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Store Front' }],
        }
    },
    {
        path: '/ecommerce/storenavigation',
        name: 'StoreNavigation',
        component: () => import('./components/ecommerce/storenavigation/StoreNavigation.vue'),
        meta: {
            breadcrumb: [{ parent: 'E-Commerce', label: 'Store Navigation' }],
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition)
            return savedPosition
        else
            return { left: 0, top: 0 };
    }
});

export default router;