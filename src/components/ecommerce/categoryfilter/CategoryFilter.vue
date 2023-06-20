<template>
    <div class="block-category-title text-900">Category Filters</div>
    <BlockViewer header="Sidebar" :code="block1" :recent="true">
        <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
            <div class="text-900 font-bold text-3xl text-center">Category Title</div>
            <p class="text-600 font-normal text-xl text-center">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
            <Divider class="w-full"></Divider>
            <div class="flex flex-wrap lg:flex-nowrap">
                <div class="col-fixed lg:col-2 mr-4 flex p-0 flex-column w-full lg:w-3">
                    <div class="flex flex-column p-0">
                        <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Denim</a>
                        <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Sweaters</a>
                        <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">T-Shirt</a>
                        <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Pants & Shorts</a>
                        <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Outwear</a>
                        <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Shoes</a>
                        <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Accessories</a>
                    </div>
                    <Divider class="w-full m-0 p-0"></Divider>

                    <Accordion :multiple="true" class="-mb-1 mt-3" :activeIndex="[0,1,2,3]">
                        <AccordionTab :header="'Brand (' + (selectedBrand_1.length !== 0 ? selectedBrand_1.length : '0') + ')'">
                            <div class="ransition-all transition-duration-400 transition-ease-in-out">
                                <div class="mb-3">
                                    <span class="p-input-icon-right w-full">
                                        <i class="pi pi-search"></i>
                                        <InputText placeholder="Search" class="w-full" />
                                    </span>
                                </div>
                                <div class="flex w-full justify-content-between">
                                    <div class="field-checkbox">
                                        <Checkbox value="Alfred" id="alfred" v-model="selectedBrand_1"></Checkbox>
                                        <label for="alfred" class="text-900">Alfred</label>
                                    </div>
                                    <Badge value="42" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                                </div>
                                <div class="flex w-full justify-content-between">
                                    <div class="field-checkbox">
                                        <Checkbox value="Hyper" id="hyper" v-model="selectedBrand_1"></Checkbox>
                                        <label for="hyper" class="text-900">Hyper</label>
                                    </div>
                                    <Badge value="18" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                                </div>
                                <div class="flex w-full justify-content-between">
                                    <div class="field-checkbox">
                                        <Checkbox value="Bastion" id="bastion" v-model="selectedBrand_1"></Checkbox>
                                        <label for="bastion" class="text-900">Bastion</label>
                                    </div>
                                    <Badge value="7" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                                </div>
                                <div class="flex w-full justify-content-between">
                                    <div class="field-checkbox">
                                        <Checkbox value="Peak" id="peak" v-model="selectedBrand_1"></Checkbox>
                                        <label for="peak" class="text-900">Peak</label>
                                    </div>
                                    <Badge value="36" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                                </div>
                                <a tabindex="0" class="block cursor-pointer my-3 text-primary font-medium">Show all...</a>
                            </div>
                        </AccordionTab>
                        <AccordionTab header="Price Range">
                            <div class="transition-all transition-duration-400 transition-ease-in-out">
                                <Slider v-model="rangeValues" :range="true" class="mt-3 mx-auto" style="{'max-width':'93%'}"></Slider>
                                <div class="flex my-4">
                                    <InputNumber placeholder="$10" v-model="rangeValues[0]" :min="10" inputClass="w-full mr-3"></InputNumber>
                                    <InputNumber placeholder="$10000" :max="10000" v-model="rangeValues[1]" inputClass="w-full"></InputNumber>
                                </div>
                            </div>
                        </AccordionTab>
                        <AccordionTab :header="'Color (' + selectedColors.length + ')'">
                            <div class="transition-all transition-duration-400 transition-ease-in-out">
                                <div class="grid mb-3">
                                    <div class="col-4 flex flex-column align-items-center">
                                        <div class="w-3rem h-3rem border-circle bg-gray-900 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedColors.indexOf('Black') == -1 ? selectedColors.push('Black') : selectedColors.splice(selectedColors.indexOf('Black'), 1)">
                                            <i class="pi pi-check text-2xl text-white" v-if="selectedColors.indexOf('Black') !== -1"></i>
                                        </div>
                                        <p class="text-900 text-center mt-1">Black</p>
                                    </div>
                                    <div class="col-4 flex flex-column align-items-center">
                                        <div class="w-3rem h-3rem border-circle bg-orange-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedColors.indexOf('Orange') == -1 ? selectedColors.push('Orange') : selectedColors.splice(selectedColors.indexOf('Orange'), 1)">
                                            <i class="pi pi-check text-2xl text-white" v-if="selectedColors.indexOf('Orange') !== -1"></i>
                                        </div>
                                        <p class="text-900 text-center mt-1">Orange</p>
                                    </div>
                                    <div class="col-4 flex flex-column align-items-center">
                                        <div class="w-3rem h-3rem border-circle bg-indigo-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedColors.indexOf('Indigo') == -1 ? selectedColors.push('Indigo') : selectedColors.splice(selectedColors.indexOf('Indigo'), 1)">
                                            <i class="pi pi-check text-2xl text-white" v-if="selectedColors.indexOf('Indigo') !== -1"></i>
                                        </div>
                                        <p class="text-900 text-center mt-1">Indigo</p>
                                    </div>
                                    <div class="col-4 flex flex-column align-items-center">
                                        <div class="w-3rem h-3rem border-circle bg-gray-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedColors.indexOf('Gray') == -1 ? selectedColors.push('Gray') : selectedColors.splice(selectedColors.indexOf('Gray'), 1)">
                                            <i class="pi pi-check text-2xl text-white" v-if="selectedColors.indexOf('Gray') !== -1"></i>
                                        </div>
                                        <p class="text-900 text-center mt-1">Gray</p>
                                    </div>
                                    <div class="col-4 flex flex-column align-items-center">
                                        <div class="w-3rem h-3rem border-circle bg-cyan-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedColors.indexOf('Cyan') == -1 ? selectedColors.push('Cyan') : selectedColors.splice(selectedColors.indexOf('Cyan'), 1)">
                                            <i class="pi pi-check text-2xl text-white" v-if="selectedColors.indexOf('Cyan') !== -1"></i>
                                        </div>
                                        <p class="text-900 text-center mt-1">Cyan</p>
                                    </div>
                                    <div class="col-4 flex flex-column align-items-center">
                                        <div class="w-3rem h-3rem border-circle bg-pink-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedColors.indexOf('Pink') == -1 ? selectedColors.push('Pink') : selectedColors.splice(selectedColors.indexOf('Pink'), 1)">
                                            <i class="pi pi-check text-2xl text-white" v-if="selectedColors.indexOf('Pink') !== -1"></i>
                                        </div>
                                        <p class="text-900 text-center mt-1">Pink</p>
                                    </div>
                                </div>
                            </div>
                        </AccordionTab>
                        <AccordionTab header="Size">
                            <div class="transition-all transition-duration-400 transition-ease-in-out">
                                <Galleria :value="sizes" :responsiveOptions="responsiveOptions" containerClass="h-full" :numVisible="2"
                                    :showThumbnails="false" :showIndicators="true"> 
                                    <template #item="slotProps">
                                        <div class="flex flex-wrap w-full h-auto overflow-hidden justify-content-center" style="column-gap: 5px; row-gap: 5px;">
                                            <div v-ripple class="w-4rem h-2rem text-900 flex justify-content-center align-items-center text-sm cursor-pointer border-round p-ripple"
                                                v-for="size of slotProps.item.page" :key="size" @click="selectedSizes1.indexOf(size.value) == -1 ? selectedSizes1.push(size.value) : selectedSizes1.splice(selectedSizes1.indexOf(size.value.toString()), 1)"
                                                :class="{'surface-100': selectedSizes1.indexOf(size.value) == -1, 'bg-blue-200': selectedSizes1.indexOf(size.value) !== -1}">
                                                {{size.value}}
                                            </div>
                                        </div>                           
                                    </template>
                                </Galleria>
                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
                <div class="w-full border-2 border-dashed surface-border surface-section mt-3 lg:mt-0" style="min-height:25rem;"></div>
            </div>
        </div>
    </BlockViewer>

    <BlockViewer header="Horizontal Expandable" :code="block2" :recent="true">
        <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
            <div class="text-900 font-bold text-3xl">Category Title</div>
            <div class="grid grid-nogutter">
                <div class="col-12 p-0 mt-5 flex flex-column lg:flex-row align-items-center mb-4">
                    <Button class="p-button-rounded bg-gray-900 text-white px-5 lg:mr-4 sm w-full lg:w-auto border-none" label="Filters" :icon="openDropdown ? 'ml-3 pi pi-chevron-down' : 'ml-3 pi pi-chevron-up'" iconPos="right" 
                        v-styleclass="{ selector: '.filter-container', enterClass:'hidden', enterActiveClass:'slidedown', leaveToClass:'hidden', leaveActiveClass:'slideup' }" @click="openDropdown = !openDropdown"></Button>
                    <div class="grid flex-column lg:flex-row w-full h-full">
                        <div class="col-12 lg:col flex align-items-center flex-wrap" style="column-gap: 5px; row-gap:5px;">
                            <Chip v-for="filter of selectedFilters" :key="filter" :label="filter" removable class="mr-3 h-auto px-4 mt-3 lg:mt-0" removeIcon="pi pi-times" :style="{'border-radius':'50px'}"
                                @click="selectedFilters.splice(selectedFilters.indexOf(filter.toString()), 1) && selectedBrands.splice(selectedBrands.indexOf(filter), 1) && selectedSizes2.splice(selectedSizes2.indexOf(filter), 1)"></Chip>
                            <a v-ripple v-if="selectedFilters.length > 0 || selectedColors2 !== 0" tabindex="0" class="text-900 cursor-pointer text-center px-3 py-2 mt-3 lg:mt-0 border-1 border-200 lg:border-none inline-block hover:bg-primary hover:border-primary transition-duration-150 p-ripple" style="border-radius:50px; max-width: 7rem;" @click="selectedBrands = []; selectedFilters = []; selectedColors2 = 0; selectedSizes2 = [];">Clear All</a>
                        </div>
                    </div>
                </div>
                <div class="filter-container col-12 overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <div class="grid grid-nogutter flex-column lg:flex-row">
                        <div class="flex-auto lg:flex-1 col mt-0 lg:mt-2 mr-0 lg:mr-4 p-4 flex-column border-1 surface-border border-round">
                            <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">Brand ({{selectedBrands.length}})</a>
                            <div class="flex flex-column">
                                <div class="mb-3">
                                    <span class="p-input-icon-right w-full">
                                        <i class="pi pi-search"></i>
                                        <InputText placeholder="Search" class="w-full" />
                                    </span>
                                </div>
                                <div class="flex w-full justify-content-between">
                                    <div class="field-checkbox">
                                        <Checkbox value="Alfred" id="alfred2" v-model="selectedFilters" @change="selectedBrands.indexOf('Alfred') === -1 ? selectedBrands.push('Alfred') : selectedBrands.splice(selectedBrands.indexOf('Alfred'), 1)"></Checkbox>
                                        <label for="alfred2" class="text-900">Alfred</label>
                                    </div>
                                    <Badge value="42" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                                </div>
                                <div class="flex w-full justify-content-between">
                                    <div class="field-checkbox">
                                        <Checkbox value="Hyper" id="hyper2" v-model="selectedFilters" @change="selectedBrands.indexOf('Hyper') === -1 ? selectedBrands.push('Hyper') : selectedBrands.splice(selectedBrands.indexOf('Hyper'), 1)"></Checkbox>
                                        <label for="hyper2" class="text-900">Hyper</label>
                                    </div>
                                    <Badge value="18" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                                </div>
                                <div class="flex w-full justify-content-between">
                                    <div class="field-checkbox">
                                        <Checkbox value="Bastion" id="bastion2" v-model="selectedFilters" @change="selectedBrands.indexOf('Bastion') === -1 ? selectedBrands.push('Bastion') : selectedBrands.splice(selectedBrands.indexOf('Bastion'), 1)"></Checkbox>
                                        <label for="bastion2" class="text-900">Bastion</label>
                                    </div>
                                    <Badge value="7" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                                </div>
                                <div class="flex w-full justify-content-between">
                                    <div class="field-checkbox">
                                        <Checkbox value="Peak" id="peak2" v-model="selectedFilters" @change="selectedBrands.indexOf('Peak') === -1 ? selectedBrands.push('Peak') : selectedBrands.splice(selectedBrands.indexOf('Peak'), 1)"></Checkbox>
                                        <label for="peak2" class="text-900">Peak</label>
                                    </div>
                                    <Badge value="36" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                                </div>
                                <a tabindex="0" class="cursor-pointer text-primary font-medium mb-3">Show all...</a>
                            </div>
                        </div>
                        <div class="flex-auto lg:flex-1 col mt-4 lg:mt-2 lg:mr-4 p-4 flex-column border-1 surface-border border-round">
                            <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">Color ({{selectedColors2}})</a>
                            <div class="grid mb-3">
                                <div class="col-4 flex flex-column align-items-center">
                                    <div class="w-3rem h-3rem border-circle bg-gray-900 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedFilters.indexOf('Black') === -1 ? selectedFilters.push('Black') & selectedColors2++ : selectedFilters.splice(selectedFilters.indexOf('Black'), 1) && selectedColors2 --">
                                        <i class="pi pi-check text-2xl text-white" v-if="selectedFilters.indexOf('Black') !== -1"></i>
                                    </div>
                                    <p class="text-900 text-center mt-1">Black</p>
                                </div>
                                <div class="col-4 flex flex-column align-items-center">
                                    <div class="w-3rem h-3rem border-circle bg-orange-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedFilters.indexOf('Orange') === -1 ? selectedFilters.push('Orange') & selectedColors2++ : selectedFilters.splice(selectedFilters.indexOf('Orange'), 1) && selectedColors2 --">
                                        <i class="pi pi-check text-2xl text-white" v-if="selectedFilters.indexOf('Orange') !== -1"></i>
                                    </div>
                                    <p class="text-900 text-center mt-1">Orange</p>
                                </div>
                                <div class="col-4 flex flex-column align-items-center">
                                    <div class="w-3rem h-3rem border-circle bg-indigo-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedFilters.indexOf('Indigo') === -1 ? selectedFilters.push('Indigo') & selectedColors2++ : selectedFilters.splice(selectedFilters.indexOf('Indigo'), 1) && selectedColors2 --">
                                        <i class="pi pi-check text-2xl text-white" v-if="selectedFilters.indexOf('Indigo') !== -1"></i>
                                    </div>
                                    <p class="text-900 text-center mt-1">Indigo</p>
                                </div>
                                <div class="col-4 flex flex-column align-items-center">
                                    <div class="w-3rem h-3rem border-circle bg-gray-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedFilters.indexOf('Gray') === -1 ? selectedFilters.push('Gray') & selectedColors2++ : selectedFilters.splice(selectedFilters.indexOf('Gray'), 1) && selectedColors2 --">
                                        <i class="pi pi-check text-2xl text-white" v-if="selectedFilters.indexOf('Gray') !== -1"></i>
                                    </div>
                                    <p class="text-900 text-center mt-1">Gray</p>
                                </div>
                                <div class="col-4 flex flex-column align-items-center">
                                    <div class="w-3rem h-3rem border-circle bg-cyan-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedFilters.indexOf('Cyan') === -1 ? selectedFilters.push('Cyan') & selectedColors2++ : selectedFilters.splice(selectedFilters.indexOf('Cyan'), 1) && selectedColors2 --">
                                        <i class="pi pi-check text-2xl text-white" v-if="selectedFilters.indexOf('Cyan') !== -1"></i>
                                    </div>
                                    <p class="text-900 text-center mt-1">Cyan</p>
                                </div>
                                <div class="col-4 flex flex-column align-items-center">
                                    <div class="w-3rem h-3rem border-circle bg-pink-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedFilters.indexOf('Pink') === -1 ? selectedFilters.push('Pink') & selectedColors2++ : selectedFilters.splice(selectedFilters.indexOf('Pink'), 1) && selectedColors2 --">
                                        <i class="pi pi-check text-2xl text-white" v-if="selectedFilters.indexOf('Pink') !== -1"></i>
                                    </div>
                                    <p class="text-900 text-center mt-1">Pink</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex-auto lg:flex-1 col mt-4 lg:mt-2 p-4 border-1 surface-border border-round">
                            <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">Size ({{selectedSizes2.length}})</a>
                            <Galleria :value="sizes" :responsiveOptions="responsiveOptions" containerClass="h-full" :numVisible="2"
                                :showThumbnails="false" :showIndicators="true"> 
                                <template #item="slotProps">
                                    <div class="flex flex-wrap justify-content-between w-full h-full mb-5 overflow-hidden" style="column-gap: 5px; row-gap: 5px;">
                                        <div v-ripple class="w-5rem h-3rem text-900 flex justify-content-center align-items-center text-sm cursor-pointer border-round p-ripple" 
                                            v-for="size of slotProps.item.page" :key="size" @click="selectedSizes2.indexOf(size.value) == -1 ? selectedSizes2.push(size.value) && selectedFilters.push(size.value) : selectedSizes2.splice(selectedSizes2.indexOf(size.value.toString()), 1) && selectedFilters.splice(selectedFilters.indexOf(size.value.toString()), 1)" 
                                            :class="{'surface-100': selectedFilters.indexOf(size.value) === -1, 'bg-blue-200': selectedFilters.indexOf(size.value) !== -1}">{{size.value}}</div>
                                    </div>
                                </template>
                            </Galleria>
                        </div>
                    </div>
                </div>
                <Divider class="w-full"></Divider>
                <div class="col-12 border-2 border-dashed surface-border surface-section" style="min-height: 25rem;"></div>
            </div>
        </div>
    </BlockViewer>

    <BlockViewer header="Dropdown" :code="block3" :recent="true">
        <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
            <div class="flex justify-content-between flex-wrap">
                <div class="flex align-items-center mb-3 md:mb-0">
                    <div class="text-900 font-bold text-3xl">Category Title </div>
                    <Badge value="76" class="ml-3 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                </div>
                <div>
                    <Button icon="pi pi-sort-alt" class="p-button-outlined p-button-secondary w-7rem p-2" iconPos="right" label="Sort By" @click="$refs.menu.toggle($event)"></Button>
                    <Menu ref="menu" :popup="true" :model="items"></Menu>
                </div>

            </div>
            <p class="text-600 text-xl">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
            <Divider class="w-full"></Divider>
            <div class="grid grid-nogutter align-items-center">
                <MultiSelect :options="brands" v-model="selectedBrands2" placeholder="Brand" optionLabel="name" :filter="true" class="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full lg:w-18rem mr-0 lg:mr-4 text-900"></MultiSelect>
                <MultiSelect :options="colors" v-model="selectedColors" placeholder="Color" optionLabel="name" :filter="true" class="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full lg:w-18rem mr-0 lg:mr-4 text-900">
                    <template #value="slotProps">
                        <div v-for="color of slotProps.selectedColors" :key="color">
                            <div class="w-3rem h-3rem border-circle cursor-pointer border-none"></div>
                            <div>{{color.name}}</div>
                        </div>
                    </template>
                    <template #option="slotProps">
                        <div class="flex align-items-center">
                            <div :class="'w-2rem h-2rem border-circle ' + slotProps.option.class + ' cursor-pointer border-none'"></div>
                            <div class="text-900 ml-2">{{slotProps.option.name}}</div>
                        </div>
                    </template>
                </MultiSelect>         
                <MultiSelect :options="prices" v-model="selectedPrice2" placeholder="Price" optionLabel="range" :filter="true" class="flex-auto lg:flex-1 mb-3 lg:mt-0 lg:col w-full lg:w-18rem mr-0 lg:mr-4 text-900"></MultiSelect>
                <ToggleButton v-model="checked1" onLabel="Sustainable" offLabel="Unsustainable" onIcon="pi pi-check" offIcon="pi pi-times" class="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-12rem" ></ToggleButton>
                <ToggleButton v-model="checked2" onLabel="Sale" offLabel="Not Sale" onIcon="pi pi-check" offIcon="pi pi-times" class="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-9rem" ></ToggleButton>
                <a v-ripple tabindex="0" class="cursor-pointer flex align-items-center mb-3 lg:mt-0 text-900 p-ripple">Clear All</a>
                <div class="col-12 border-2 border-dashed surface-border surface-section h-30rem mt-2"></div>
            </div>
        </div>
    </BlockViewer>
</template>

<script>
export default {
    data() {
        return {
            brands:  [
                {name: 'Alfred'},
                {name: 'Hyper'},
                {name: 'Peak'},
                {name: 'Bastion'},
            ],
            colors: [
                {name: 'Black', class:'bg-gray-500'},
                {name: 'Orange', class:'bg-orange-500'},
                {name: 'Indigo', class:'bg-indigo-500'},
                {name: 'Pink', class:'bg-pink-500'},
            ],
            prices: [
                {range: '$10 - $100'},
                {range: '$101 - $200'},
                {range: '$201 - $300'},
                {range: '$301 - $400'},
            ],
            selectedBrands: ['Alfred', 'Hyper'],
            selectedBrands2: [
                {name: 'Alfred'},
                {name: 'Hyper'}
            ],
            selectedBrands3: [
                {name: 'Alfred'}
            ],
            selectedBrand_1: [],
            items: [
                {label: 'Color'},
                {label: 'Size'},
                {label: 'Price'}
            ],
            selectedPrice1: null,
            selectedPrice2: null,
        
            selectedColors: [],
            selectedColors2: 1,
            selectedFilters: ['Alfred', 'Hyper', 'Black'],
            sizes: [
                {page: [
                    {value: '28x28'},
                    {value: '28x30'},
                    {value: '28x32'},
                    {value: '28x34'},
                    {value: '29x28'},
                    {value: '29x30'},
                    {value: '29x32'},
                    {value: '29x34'},
                    {value: '30x28'},
                    {value: '30x30'},
                    {value: '30x32'},
                    {value: '30x34'},
                    {value: '31x28'},
                    {value: '31x30'},
                    {value: '31x32'},
                    {value: '31x34'},
                ]},
                {page: [
                    {value: '32x28'},
                    {value: '32x30'},
                    {value: '32x32'},
                    {value: '32x34'},
                    {value: '33x28'},
                    {value: '33x30'},
                    {value: '33x32'},
                    {value: '33x34'},
                    {value: '34x28'},
                    {value: '34x30'},
                    {value: '34x32'},
                    {value: '34x34'},
                    {value: '35x28'},
                    {value: '35x30'},
                    {value: '35x32'},
                    {value: '35x34'},
                ]},
                {page: [
                    {value: '28x28'},
                    {value: '28x30'},
                    {value: '28x32'},
                    {value: '28x34'},
                    {value: '29x28'},
                    {value: '29x30'},
                    {value: '29x32'},
                    {value: '29x34'},
                    {value: '30x28'},
                    {value: '30x30'},
                    {value: '30x32'},
                    {value: '30x34'},
                    {value: '31x28'},
                    {value: '31x30'},
                    {value: '31x32'},
                    {value: '31x34'},
                ]},
            ],
            selectedSizes1: [],
            selectedSizes2: [],  
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '768px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '560px',
                    numVisible: 1,
                    numScroll: 1
                }
            ],
            rangeValues: [20,80],
            checked1: true,
            checked2: false,
            openDropdown: true,
            block1: `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-3xl text-center">Category Title</div>
    <p class="text-600 font-normal text-xl text-center">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
    <Divider class="w-full"></Divider>
    <div class="flex flex-wrap lg:flex-nowrap">
        <div class="col-fixed lg:col-2 mr-4 flex p-0 flex-column w-full lg:w-3">
            <div class="flex flex-column p-0">
                <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Denim</a>
                <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Sweaters</a>
                <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">T-Shirt</a>
                <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Pants & Shorts</a>
                <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Outwear</a>
                <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Shoes</a>
                <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">Accessories</a>
            </div>
            <Divider class="w-full m-0 p-0"></Divider>

            <Accordion :multiple="true" class="-mb-1 mt-3" :activeIndex="[0,1,2,3]">
                <AccordionTab :header="'Brand (' + (selectedBrand_1.length !== 0 ? selectedBrand_1.length : '0') + ')'">
                    <div class="transition-all transition-duration-400 transition-ease-in-out">
                        <div class="mb-3">
                            <span class="p-input-icon-right w-full">
                                <i class="pi pi-search"></i>
                                <InputText placeholder="Search" class="w-full" />
                            </span>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <Checkbox value="Alfred" id="alfred" v-model="selectedBrand_1"></Checkbox>
                                <label for="alfred" class="text-900">Alfred</label>
                            </div>
                            <Badge value="42" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <Checkbox value="Hyper" id="hyper" v-model="selectedBrand_1"></Checkbox>
                                <label for="hyper" class="text-900">Hyper</label>
                            </div>
                            <Badge value="18" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <Checkbox value="Bastion" id="bastion" v-model="selectedBrand_1"></Checkbox>
                                <label for="bastion" class="text-900">Bastion</label>
                            </div>
                            <Badge value="7" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <Checkbox value="Peak" id="peak" v-model="selectedBrand_1"></Checkbox>
                                <label for="peak" class="text-900">Peak</label>
                            </div>
                            <Badge value="36" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                        </div>
                        <a tabindex="0" class="block cursor-pointer my-3 text-primary font-medium">Show all...</a>
                    </div>
                </AccordionTab>
                <AccordionTab header="Price Range">
                    <div class="transition-all transition-duration-400 transition-ease-in-out">
                        <Slider v-model="rangeValues" :range="true" class="mt-3 mx-auto" style="{'max-width':'93%'}"></Slider>
                        <div class="flex my-4">
                            <InputNumber placeholder="$10" v-model="rangeValues[0]" :min="10" inputClass="w-full mr-3"></InputNumber>
                            <InputNumber placeholder="$10000" :max="10000" v-model="rangeValues[1]" inputClass="w-full"></InputNumber>
                        </div>
                    </div>
                </AccordionTab>
                <AccordionTab :header="'Color (' + selectedColors.length + ')'">
                    <div class="transition-all transition-duration-400 transition-ease-in-out">
                        <div class="grid mb-3">
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-gray-900 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedColors.indexOf('Black') == -1 ? selectedColors.push('Black') : selectedColors.splice(selectedColors.indexOf('Black'), 1)">
                                    <i class="pi pi-check text-2xl text-white" v-if="selectedColors.indexOf('Black') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Black</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-orange-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedColors.indexOf('Orange') == -1 ? selectedColors.push('Orange') : selectedColors.splice(selectedColors.indexOf('Orange'), 1)">
                                    <i class="pi pi-check text-2xl text-white" v-if="selectedColors.indexOf('Orange') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Orange</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-indigo-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedColors.indexOf('Indigo') == -1 ? selectedColors.push('Indigo') : selectedColors.splice(selectedColors.indexOf('Indigo'), 1)">
                                    <i class="pi pi-check text-2xl text-white" v-if="selectedColors.indexOf('Indigo') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Indigo</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-gray-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedColors.indexOf('Gray') == -1 ? selectedColors.push('Gray') : selectedColors.splice(selectedColors.indexOf('Gray'), 1)">
                                    <i class="pi pi-check text-2xl text-white" v-if="selectedColors.indexOf('Gray') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Gray</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-cyan-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedColors.indexOf('Cyan') == -1 ? selectedColors.push('Cyan') : selectedColors.splice(selectedColors.indexOf('Cyan'), 1)">
                                    <i class="pi pi-check text-2xl text-white" v-if="selectedColors.indexOf('Cyan') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Cyan</p>
                            </div>
                            <div class="col-4 flex flex-column align-items-center">
                                <div class="w-3rem h-3rem border-circle bg-pink-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedColors.indexOf('Pink') == -1 ? selectedColors.push('Pink') : selectedColors.splice(selectedColors.indexOf('Pink'), 1)">
                                    <i class="pi pi-check text-2xl text-white" v-if="selectedColors.indexOf('Pink') !== -1"></i>
                                </div>
                                <p class="text-900 text-center mt-1">Pink</p>
                            </div>
                        </div>
                    </div>
                </AccordionTab>
                <AccordionTab :header="'Size (' + selectedSizes1.length + ')'">
                    <div class="transition-all transition-duration-400 transition-ease-in-out">
                        <Galleria :value="sizes" :responsiveOptions="responsiveOptions" containerClass="h-full" :numVisible="2"
                            :showThumbnails="false" :showIndicators="true"> 
                            <template #item="slotProps">
                                <div class="flex flex-wrap w-full h-auto overflow-hidden justify-content-center" style="column-gap: 5px; row-gap: 5px;">
                                    <div v-ripple class="w-4rem h-2rem text-900 flex justify-content-center align-items-center text-sm cursor-pointer border-round p-ripple"
                                        v-for="size of slotProps.item.page" :key="size" @click="selectedSizes1.indexOf(size.value) == -1 ? selectedSizes1.push(size.value) : selectedSizes1.splice(selectedSizes1.indexOf(size.value.toString()), 1)"
                                        :class="{'surface-100': selectedSizes1.indexOf(size.value) == -1, 'bg-blue-200': selectedSizes1.indexOf(size.value) !== -1}">
                                        {{size.value}}
                                    </div>
                                </div>                           
                            </template>
                        </Galleria>
                    </div>
                </AccordionTab>
            </Accordion>
        </div>
        <div class="w-full border-2 border-dashed surface-border surface-section mt-3 lg:mt-0" style="min-height:25rem;"></div>
    </div>
</div>`,
            block2: `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-3xl">Category Title</div>
    <div class="grid grid-nogutter">
        <div class="col-12 p-0 mt-5 flex flex-column lg:flex-row align-items-center mb-4">
            <Button class="p-button-rounded bg-gray-900 text-white px-5 lg:mr-4 sm w-full lg:w-auto border-none" label="Filters" :icon="openDropdown ? 'ml-3 pi pi-chevron-down' : 'ml-3 pi pi-chevron-up'" iconPos="right" 
                v-styleclass="{ selector: '.filter-container', enterClass:'hidden', enterActiveClass:'slidedown', leaveToClass:'hidden', leaveActiveClass:'slideup' }" @click="openDropdown = !openDropdown"></Button>
            <div class="grid flex-column lg:flex-row w-full h-full">
                <div class="col-12 lg:col flex align-items-center flex-wrap" style="column-gap: 5px; row-gap:5px;">
                    <Chip v-for="filter of selectedFilters" :key="filter" :label="filter" removable class="mr-3 h-auto px-4 mt-3 lg:mt-0" removeIcon="pi pi-times" :style="{'border-radius':'50px'}"
                        @click="selectedFilters.splice(selectedFilters.indexOf(filter.toString()), 1) && selectedBrands.splice(selectedBrands.indexOf(filter), 1) && selectedSizes2.splice(selectedSizes2.indexOf(filter), 1)"></Chip>
                    <a v-ripple v-if="selectedFilters.length > 0 || selectedColors2 !== 0" tabindex="0" class="text-900 cursor-pointer text-center px-3 py-2 mt-3 lg:mt-0 border-1 border-200 lg:border-none inline-block hover:bg-primary hover:border-primary transition-duration-150 p-ripple" style="border-radius:50px; max-width: 7rem;" @click="selectedBrands = []; selectedFilters = []; selectedColors2 = 0; selectedSizes2 = [];">Clear All</a>
                </div>
            </div>
        </div>
        <div class="filter-container col-12 overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
            <div class="grid grid-nogutter flex-column lg:flex-row">
                <div class="flex-auto lg:flex-1 col mt-0 lg:mt-2 mr-0 lg:mr-4 p-4 flex-column border-1 surface-border border-round">
                    <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">Brand ({{selectedBrands.length}})</a>
                    <div class="flex flex-column">
                        <div class="mb-3">
                            <span class="p-input-icon-right w-full">
                                <i class="pi pi-search"></i>
                                <InputText placeholder="Search" class="w-full" />
                            </span>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <Checkbox value="Alfred" id="alfred2" v-model="selectedFilters" @change="selectedBrands.indexOf('Alfred') == -1 ? selectedBrands.push('Alfred') : selectedBrands.splice(selectedBrands.indexOf('Alfred'), 1)"></Checkbox>
                                <label for="alfred2" class="text-900">Alfred</label>
                            </div>
                            <Badge value="42" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <Checkbox value="Hyper" id="hyper2" v-model="selectedFilters" @change="selectedBrands.indexOf('Hyper') == -1 ? selectedBrands.push('Hyper') : selectedBrands.splice(selectedBrands.indexOf('Hyper'), 1)"></Checkbox>
                                <label for="hyper2" class="text-900">Hyper</label>
                            </div>
                            <Badge value="18" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <Checkbox value="Bastion" id="bastion2" v-model="selectedFilters" @change="selectedBrands.indexOf('Bastion') == -1 ? selectedBrands.push('Bastion') : selectedBrands.splice(selectedBrands.indexOf('Bastion'), 1)"></Checkbox>
                                <label for="bastion2" class="text-900">Bastion</label>
                            </div>
                            <Badge value="7" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                        </div>
                        <div class="flex w-full justify-content-between">
                            <div class="field-checkbox">
                                <Checkbox value="Peak" id="peak2" v-model="selectedFilters" @change="selectedBrands.indexOf('Peak') == -1 ? selectedBrands.push('Peak') : selectedBrands.splice(selectedBrands.indexOf('Peak'), 1)"></Checkbox>
                                <label for="peak2" class="text-900">Peak</label>
                            </div>
                            <Badge value="36" class="mr-2 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
                        </div>
                        <a tabindex="0" class="cursor-pointer text-primary font-medium mb-3">Show all...</a>
                    </div>
                </div>
                <div class="flex-auto lg:flex-1 col mt-4 lg:mt-2 lg:mr-4 p-4 flex-column border-1 surface-border border-round">
                    <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">Color ({{selectedColors2}})</a>
                    <div class="grid mb-3">
                        <div class="col-4 flex flex-column align-items-center">
                            <div class="w-3rem h-3rem border-circle bg-gray-900 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedFilters.indexOf('Black') === -1 ? selectedFilters.push('Black') & selectedColors2++ : selectedFilters.splice(selectedFilters.indexOf('Black'), 1) && selectedColors2 --">
                                <i class="pi pi-check text-2xl text-white" v-if="selectedFilters.indexOf('Black') !== -1"></i>
                            </div>
                            <p class="text-900 text-center mt-1">Black</p>
                        </div>
                        <div class="col-4 flex flex-column align-items-center">
                            <div class="w-3rem h-3rem border-circle bg-orange-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedFilters.indexOf('Orange') === -1 ? selectedFilters.push('Orange') & selectedColors2++ : selectedFilters.splice(selectedFilters.indexOf('Orange'), 1) && selectedColors2 --">
                                <i class="pi pi-check text-2xl text-white" v-if="selectedFilters.indexOf('Orange') !== -1"></i>
                            </div>
                            <p class="text-900 text-center mt-1">Orange</p>
                        </div>
                        <div class="col-4 flex flex-column align-items-center">
                            <div class="w-3rem h-3rem border-circle bg-indigo-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedFilters.indexOf('Indigo') === -1 ? selectedFilters.push('Indigo') & selectedColors2++ : selectedFilters.splice(selectedFilters.indexOf('Indigo'), 1) && selectedColors2 --">
                                <i class="pi pi-check text-2xl text-white" v-if="selectedFilters.indexOf('Indigo') !== -1"></i>
                            </div>
                            <p class="text-900 text-center mt-1">Indigo</p>
                        </div>
                        <div class="col-4 flex flex-column align-items-center">
                            <div class="w-3rem h-3rem border-circle bg-gray-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedFilters.indexOf('Gray') === -1 ? selectedFilters.push('Gray') & selectedColors2++ : selectedFilters.splice(selectedFilters.indexOf('Gray'), 1) && selectedColors2 --">
                                <i class="pi pi-check text-2xl text-white" v-if="selectedFilters.indexOf('Gray') !== -1"></i>
                            </div>
                            <p class="text-900 text-center mt-1">Gray</p>
                        </div>
                        <div class="col-4 flex flex-column align-items-center">
                            <div class="w-3rem h-3rem border-circle bg-cyan-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedFilters.indexOf('Cyan') === -1 ? selectedFilters.push('Cyan') & selectedColors2++ : selectedFilters.splice(selectedFilters.indexOf('Cyan'), 1) && selectedColors2 --">
                                <i class="pi pi-check text-2xl text-white" v-if="selectedFilters.indexOf('Cyan') !== -1"></i>
                            </div>
                            <p class="text-900 text-center mt-1">Cyan</p>
                        </div>
                        <div class="col-4 flex flex-column align-items-center">
                            <div class="w-3rem h-3rem border-circle bg-pink-500 cursor-pointer border-none flex justify-content-center align-items-center" @click="selectedFilters.indexOf('Pink') === -1 ? selectedFilters.push('Pink') & selectedColors2++ : selectedFilters.splice(selectedFilters.indexOf('Pink'), 1) && selectedColors2 --">
                                <i class="pi pi-check text-2xl text-white" v-if="selectedFilters.indexOf('Pink') !== -1"></i>
                            </div>
                            <p class="text-900 text-center mt-1">Pink</p>
                        </div>
                    </div>
                </div>
                <div class="flex-auto lg:flex-1 col mt-4 lg:mt-2 p-4 border-1 surface-border border-round">
                    <a tabindex="0" class="cursor-pointer text-900 font-medium mb-3 flex justify-content-between w-full hover:text-primary transition-duration-150">Size ({{selectedSizes2.length}})</a>
                    <Galleria :value="sizes" :responsiveOptions="responsiveOptions" containerClass="h-full" :numVisible="2"
                        :showThumbnails="false" :showIndicators="true"> 
                        <template #item="slotProps">
                            <div class="flex flex-wrap justify-content-between w-full h-full mb-5 overflow-hidden" style="column-gap: 5px; row-gap: 5px;">
                                <div v-ripple class="w-5rem h-3rem text-900 flex justify-content-center align-items-center text-sm cursor-pointer border-round p-ripple" 
                                    v-for="size of slotProps.item.page" :key="size" @click="selectedSizes2.indexOf(size.value) == -1 ? selectedSizes2.push(size.value) && selectedFilters.push(size.value) : selectedSizes2.splice(selectedSizes2.indexOf(size.value.toString()), 1) && selectedFilters.splice(selectedFilters.indexOf(size.value.toString()), 1)" 
                                    :class="{'surface-100': selectedFilters.indexOf(size.value) == -1, 'bg-blue-200': selectedFilters.indexOf(size.value) !== -1}">{{size.value}}</div>
                            </div>
                        </template>
                    </Galleria>
                </div>
            </div>
        </div>
        <Divider class="w-full"></Divider>
        <div class="col-12 border-2 border-dashed surface-border surface-section" style="min-height: 25rem;"></div>
    </div>
</div>`,
            block3: `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex justify-content-between flex-wrap">
        <div class="flex align-items-center mb-3 md:mb-0">
            <div class="text-900 font-bold text-3xl">Category Title </div>
            <Badge value="76" class="ml-3 bg-gray-200 text-gray-900 p-0 border-circle"></Badge>
        </div>
        <div>
            <Button icon="pi pi-sort-alt" class="p-button-outlined p-button-secondary w-7rem p-2" iconPos="right" label="Sort By" @click="$refs.menu.toggle($event)"></Button>
            <Menu ref="menu" :popup="true" :model="items"></Menu>
        </div>

    </div>
    <p class="text-600 text-xl">Nullam faucibus, sem et bibendum finibus, sapien ipsum congue felis, sit amet pretium ex nisl ut eros.</p>
    <Divider class="w-full"></Divider>
    <div class="grid grid-nogutter align-items-center">
        <MultiSelect :options="brands" v-model="selectedBrands2" placeholder="Brand" optionLabel="name" :filter="true" class="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full lg:w-18rem mr-0 lg:mr-4 text-900"></MultiSelect>
        <MultiSelect :options="colors" v-model="selectedColors" placeholder="Color" optionLabel="name" :filter="true" class="flex-auto lg:flex-1 mb-3 lg:mt-0 w-full lg:w-18rem mr-0 lg:mr-4 text-900">
            <template #value="slotProps">
                <div v-for="color of slotProps.selectedColors" :key="color">
                    <div class="w-3rem h-3rem border-circle cursor-pointer border-none"></div>
                    <div>{{color.name}}</div>
                </div>
            </template>
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <div :class="'w-2rem h-2rem border-circle ' + slotProps.option.class + ' cursor-pointer border-none'"></div>
                    <div class="text-900 ml-2">{{slotProps.option.name}}</div>
                </div>
            </template>
        </MultiSelect>         
        <MultiSelect :options="prices" v-model="selectedPrice2" placeholder="Price" optionLabel="range" :filter="true" class="flex-auto lg:flex-1 mb-3 lg:mt-0 lg:col w-full lg:w-18rem mr-0 lg:mr-4 text-900"></MultiSelect>
        <ToggleButton v-model="checked1" onLabel="Sustainable" offLabel="Unsustainable" onIcon="pi pi-check" offIcon="pi pi-times" class="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-12rem" ></ToggleButton>
        <ToggleButton v-model="checked2" onLabel="Sale" offLabel="Not Sale" onIcon="pi pi-check" offIcon="pi pi-times" class="mb-3 lg:mt-0 mr-4 flex-shrink-0 w-9rem" ></ToggleButton>
        <a v-ripple tabindex="0" class="cursor-pointer flex align-items-center mb-3 lg:mt-0 text-900 p-ripple">Clear All</a>
        <div class="col-12 border-2 border-dashed surface-border surface-section h-30rem mt-2"></div>
    </div>
</div>`,
        }
    }
}
</script>