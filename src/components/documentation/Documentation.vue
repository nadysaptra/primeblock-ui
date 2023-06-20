<template>
    <div class="text-900 documentation">
        <h1 class="text-4xl mt-0 mb-3">Documentation</h1>
        <p class="mb-3 line-height-3">PrimeBlocks for Vue consists of copy paste ready UI blocks crafted with PrimeFlex where theming and interactivity is provided by PrimeVue.</p>

        <h3>Compatibility</h3>
        <p>PrimeBlocks library is requires either PrimeVue v2.5.0+ for Vue 2 or v3.6.2+ for Vue 3.</p>

        <h3 class="text-xl mb-3">What is a Block?</h3>
        <p class="mb-3 line-height-3">A UI block is a set of html elements styled with the <a href="https://www.primefaces.org/primeflex" class="text-blue-500 no-underline hover:underline">PrimeFlex</a> CSS utility library. A block can also contain PrimeVue components in addition to regular elements.
            The blocks are designed to be used easily by simply moving the block code to your own application. This is achieved by
            defining the styling in the markup without using a custom css declaration. In cases where a block requires interactivity such as toggling the visibility of a menu or a sidebar, <i>v-styleclass</i> directive of PrimeVue manages the events and animations.</p>

        <h3 class="text-xl mb-3">Theming</h3>
        <p class="mb-3 line-height-3">Blocks utilize color classes for background, text color, border color and pseudo states. Color values are derived from the PrimeVue theme being used so that a block can seamlesslly integrate with your application. For example
            <i>bg-blue-500</i> class retrieves the background color using the <i>--blue-500</i> CSS variables from PrimeVue. See <a href="https://www.primefaces.org/primevue/colors" class="text-blue-500 no-underline hover:underline">PrimeVue colors palettes</a> for more information.
        </p>

        <h2 class="text-2xl mb-3">Setup</h2>
        <h3 class="text-xl mb-3">PrimeFlex</h3>
        <p class="mb-3 line-height-3">PrimeFlex v3.1+ needs to be installed to begin with.</p>

<pre v-code><code>
npm install primeflex --save

</code></pre>

        <p class="line-height-3">Next step is adding the primeflex.css to your application, if you are using Vue-CLI the recommended locations would be the either App.vue or main.js.</p>

        <p><b>App.vue</b></p>
<pre v-code><code>
&lt;template&gt;&lt;/template&gt;
&lt;script&gt;&lt;/script&gt;

&lt;style lang="scss"&gt;
@import "~primeflex/primeflex.css";
&lt;/style&gt;

</code></pre>

        <p>Alternative option for import would be <b>main.js</b>.</p>

<pre v-code.script><code>
import "primeflex/primeflex.css";

</code></pre>

        <h3 class="text-xl mb-3">v-styleclass directive</h3>
        <p class="mb-3 line-height-3">Many of the blocks like a navbar may require interactivity for opening or hiding a menu. A handy directive called <i>v-styleclass</i> is available via PrimeVue to bring interactivity easily.
            The directive adds a click event to its host and manages the enter/leave animation of a target.</p>

        <h3 class="text-xl mb-3">Font Settings</h3>
        <p class="mb-3 line-height-3">PrimeBlocks use the font derived from the PrimeVue theme being used, you may still use them with a font of your choice however to have the same look
        when a block is copied to your own page, add the config below to your application.</p>

<pre v-code.css><code>
body {
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

</code></pre>

        <h3 class="text-xl mb-3">Run the Samples</h3>
        <p class="mb-3 line-height-3">PrimeBlocks are distributed as an Vue CLI project, download the file from PrimeStore, extract the contents of the zip file and execute the following commands to run the application at <i>http://localhost:8080</i>.</p>

<pre v-code.script><code>
npm install
npm run serve

</code></pre>

        <h3 class="text-xl mb-3">Try a Block</h3>
        <p class="mb-3 line-height-3">That's it, now you can use the copy icon of a block demo and paste it to your application to get started. Please note that, a block may use PrimeVue components as well so make sure those components are imported.</p>

        <h3 class="text-xl mb-3">Production Size</h3>
        <p class="mb-3 line-height-3">When using a utility CSS library like PrimeFlex, it is likely to use only a set of classes from the library leaving the rest of the library as unused.
        To avoid including the unused part in your application, it is strongly recommended to use a tool like PurgeCSS that analyzes your code and generates an optimized primeflex file that only contains the utilities you've used.</p>

    </div>
</template>

<script>
export default {
    name: 'Documentation'
}
</script>

<style scoped>
i {
    background-color: var(--surface-card);
    color: #2196f3;
    font-family: Monaco,courier,monospace;
    font-style: normal;
    font-size: 12px;
    font-weight: 500;
    padding: 2px 4px;
    letter-spacing: .5px;
    border-radius: 3px;
    font-weight: 600;
    margin: 0 2px;
}
</style>
