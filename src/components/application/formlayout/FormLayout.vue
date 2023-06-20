<template>
    <div>
        <div class="block-category-title">Form Layout</div>
        <BlockViewer header="Two Columns and Stacked" :code="block1">
            <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
                <div class="grid">
                    <div class="col-12 lg:col-2">
                        <div class="text-900 font-medium text-xl mb-3">Profile</div>
                        <p class="m-0 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio.</p>
                    </div>
                    <div class="col-12 lg:col-10">
                        <div class="grid formgrid p-fluid">
                            <div class="field mb-4 col-12">
                                <label for="nickname" class="font-medium text-900">Nickname</label>
                                <InputText id="nickname" type="text" />
                            </div>
                            <div class="field mb-4 col-12">
                                <label for="avatar" class="font-medium text-900">Avatar</label>
                                <div class="flex align-items-center">
                                    <img src="images/blocks/avatars/circle/avatar-f-4.png" class="mr-4" />
                                    <FileUpload mode="basic" name="avatar" url="./upload.php" accept="image/*" :maxFileSize="1000000" class="p-button-outlined p-button-plain" chooseLabel="Upload Image"></FileUpload>
                                </div>
                            </div>
                            <div class="field mb-4 col-12">
                                <label for="bio" class="font-medium text-900">Bio</label>
                                <Textarea id="bio" type="text" :rows="5" :autoResize="true"></Textarea>
                            </div>
                            <div class="field mb-4 col-12 md:col-6">
                                <label for="email" class="font-medium text-900">Email</label>
                                <InputText id="email" type="text" />
                            </div>
                            <div class="field mb-4 col-12 md:col-6">
                                <label for="country" class="font-medium text-900">Country</label>
                                <Dropdown id="country" v-model="selectedCountry1" :options="countries" optionLabel="name" :filter="true" filterBy="name" :showClear="true" placeholder="Select a Country">
                                    <template #option="slotProps">
                                        <div class="flex align-items-center">
                                            <img src="images/blocks/flag/flag_placeholder.png" :class="'mr-2 flag flag-' + slotProps.option.code.toLowerCase()" style="width: 18px" />
                                            <div>{{ slotProps.option.name }}</div>
                                        </div>
                                    </template>
                                </Dropdown>
                            </div>
                            <div class="field mb-4 col-12 md:col-6">
                                <label for="city" class="font-medium text-900">City</label>
                                <InputText id="city" type="text" />
                            </div>
                            <div class="field mb-4 col-12 md:col-6">
                                <label for="state" class="font-medium text-900">State</label>
                                <InputText id="state" type="text" />
                            </div>
                            <div class="field mb-4 col-12">
                                <label for="website" class="font-medium text-900">Website</label>
                                <div class="p-inputgroup">
                                    <span class="p-inputgroup-addon">www</span>
                                    <InputText id="website" type="text" />
                                </div>
                            </div>
                            <div class="field mb-4 col-12">
                                <label for="privacy" class="font-medium text-900">Privacy</label>
                                <div class="flex align-items-center">
                                    <Checkbox id="privacy" v-model="checked1" :binary="true"></Checkbox>
                                    <span class="ml-2">Share my data with contacts</span>
                                </div>
                            </div>
                            <div class="col-12">
                                <Button label="Save Changes" class="w-auto mt-3"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Full-Width Card" :code="block2">
            <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
                <div class="text-900 font-medium text-xl mb-3">Profile</div>
                <p class="m-0 mb-4 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio. Non nisi est sit amet. Egestas integer eget aliquet nibh praesent tristique magna.</p>
                <div class="surface-card p-4 shadow-2 border-round">
                    <div class="grid formgrid p-fluid">
                        <div class="field mb-4 col-12">
                            <label for="nickname2" class="font-medium text-900">Nickname</label>
                            <InputText id="nickname2" type="text" />
                        </div>
                        <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="bio2" class="font-medium text-900">Bio</label>
                            <Textarea id="bio2" type="text" :rows="5" :autoResize="true"></Textarea>
                        </div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="avatar2" class="font-medium text-900">Avatar</label>
                            <div class="flex align-items-center">
                                <img src="images/blocks/avatars/circle/avatar-f-4.png" class="mr-4" />
                                <FileUpload id="avatar2" mode="basic" name="avatar" url="./upload.php" accept="image/*" :maxFileSize="1000000" class="p-button-outlined p-button-plain" chooseLabel="Upload Image"></FileUpload>
                            </div>
                        </div>
                        <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="email2" class="font-medium text-900">Email</label>
                            <InputText id="email2" type="text" />
                        </div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="country2" class="font-medium text-900">Country</label>
                            <Dropdown id="country2" v-model="selectedCountry2" :options="countries" optionLabel="name" :filter="true" filterBy="name" :showClear="true" placeholder="Select a Country">
                                <template #option="slotProps">
                                    <div class="flex align-items-center">
                                        <img src="images/blocks/flag/flag_placeholder.png" :class="'mr-2 flag flag-' + slotProps.option.code.toLowerCase()" style="width: 18px" />
                                        <div>{{ slotProps.option.name }}</div>
                                    </div>
                                </template>
                            </Dropdown>
                        </div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="city2" class="font-medium text-900">City</label>
                            <InputText id="city2" type="text" />
                        </div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="state2" class="font-medium text-900">State</label>
                            <InputText id="state2" type="text" />
                        </div>
                        <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
                        <div class="field mb-4 col-12">
                            <label for="website2" class="font-medium text-900">Website</label>
                            <div class="p-inputgroup">
                                <span class="p-inputgroup-addon">www</span>
                                <InputText id="website2" type="text" />
                            </div>
                        </div>
                        <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
                        <div class="field mb-4 col-12">
                            <label for="privacy2" class="font-medium text-900">Privacy</label>
                            <div class="flex align-items-center">
                                <InputSwitch id="privacy2" v-model="checked2"></InputSwitch>
                                <span class="ml-2">Share my data with contacts</span>
                            </div>
                        </div>
                        <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
                        <div class="col-12">
                            <Button label="Save Changes" class="w-auto mt-3"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Invoice Sample" :code="block3">
            <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
                <div class="text-900 font-medium text-xl mb-3">Create Invoice</div>
                <div class="surface-card p-4 shadow-2 border-round p-fluid">
                    <div class="grid formgrid p-fluid">
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="company_name" class="font-medium text-900">Company Name</label>
                            <InputText id="company_name" type="text" />
                        </div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="invoice_id" class="font-medium text-900">Invoice Id</label>
                            <InputText id="invoice_id" type="text" />
                        </div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="customer_name" class="font-medium text-900">Customer Name</label>
                            <InputText id="customer_name" type="text" />
                        </div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="customer_email" class="font-medium text-900">Customer Email</label>
                            <InputText id="customer_email" type="text" />
                        </div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="invoice_date" class="font-medium text-900">Invoice Date</label>
                            <Calendar v-model="date1" id="invoice_date" :showIcon="true"></Calendar>
                        </div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="due_date" class="font-medium text-900">Due Date</label>
                            <Calendar v-model="date2" id="due_date" :showIcon="true"></Calendar>
                        </div>
                        <div class="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="item" class="font-medium text-900">Item</label>
                            <InputText id="item" type="text" />
                        </div>
                        <div class="field mb-4 col-6 md:col-3">
                            <label for="quantity" class="font-medium text-900">Quantity</label>
                            <InputText id="quantity" type="text" />
                        </div>
                        <div class="field mb-4 col-6 md:col-3">
                            <label for="price" class="font-medium text-900">Price</label>
                            <div class="flex align-content-center">
                                <InputNumber mode="currency" currency="USD" id="price" type="text" class="flex-1"></InputNumber>
                                <Button icon="pi pi-trash" class="p-button-danger p-button-text ml-2"></Button>
                            </div>
                        </div>
                        <div class="field mb-4 col-12 md:col-6">
                            <Button icon="pi pi-plus" label="Add Item" class="p-button-secondary p-button-outlined w-auto"></Button>
                        </div>
                        <div class="field mb-4 col-12 md:col-6 text-right">
                            <span class="text-xl text-600 font-medium mr-2">Total</span>
                            <span class="text-xl text-900 font-medium">$59</span>
                        </div>
                        <div class="field mb-4 col-12 flex align-items-center">
                            <Checkbox v-model="checked3" :binary="true"></Checkbox>
                            <span class="ml-2 text-900">Taxable (VAT 18%)</span>
                        </div>
                        <div class="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
                        <div class="field mb-4 col-12">
                            <label for="notes" class="font-medium text-900">Notes</label>
                            <Textarea id="notes" :autoResize="true" :rows="5"></Textarea>
                        </div>
                        <div class="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
                    </div>
                    <Button label="Create Invoice" icon="pi pi-file" class="w-auto"></Button>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Card with Side Navigation" :code="block4" recent>
            <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
                <div class="p-fluid flex flex-column lg:flex-row">
                    <ul class="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-evenly md:justify-content-between lg:justify-content-start mb-5 lg:pr-8 lg:mb-0">
                        <li>
                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-user md:mr-2"></i>
                                <span class="font-medium hidden md:block">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-cog md:mr-2"></i>
                                <span class="font-medium hidden md:block">Account</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-palette md:mr-2"></i>
                                <span class="font-medium hidden md:block">Appearance</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-sun md:mr-2"></i>
                                <span class="font-medium hidden md:block">Accessibility</span>
                            </a>
                        </li>
                        <li>
                            <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
                                <i class="pi pi-bell md:mr-2"></i>
                                <span class="font-medium hidden md:block">Notifications</span>
                            </a>
                        </li>
                    </ul>
                    <div class="surface-card p-5 shadow-2 border-round flex-auto">
                        <div class="text-900 font-semibold text-lg mt-3">Profile</div>
                        <Divider></Divider>
                        <div class="flex gap-5 flex-column-reverse md:flex-row">
                            <div class="flex-auto p-fluid">
                                <div class="mb-4">
                                    <label for="email" class="block font-medium text-900 mb-2">Name</label>
                                    <InputText id="email" type="text" />
                                </div>
                                <div class="mb-4">
                                    <label for="bio" class="block font-medium text-900 mb-2">Bio</label>
                                    <Textarea id="bio" type="text" rows="5" :autoResize="true"></Textarea>
                                </div>
                                <div class="mb-4">
                                    <label for="website" class="block font-medium text-900 mb-2">URL</label>
                                    <div class="p-inputgroup">
                                        <span class="p-inputgroup-addon">https://</span>
                                        <InputText id="website" type="text" />
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label for="state" class="block font-medium text-900 mb-2">Company</label>
                                    <InputText id="state" type="text" />
                                </div>
                                <div>
                                    <Button v-ripple label="Update Profile" class="w-auto"></Button>
                                </div>
                            </div>
                            <div class="flex flex-column align-items-center flex-or">
                                <span class="font-medium text-900 mb-2">Profile Picture</span>
                                <img src="images/blocks/avatars/circle-big/avatar-f-2.png" class="h-10rem w-10rem" />
                                <Button type="button" icon="pi pi-pencil" class="p-button-rounded -mt-4"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    name: 'FormLayout',
    data() {
        return {
            block1: `
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 lg:col-2">
            <div class="text-900 font-medium text-xl mb-3">Profile</div>
            <p class="m-0 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio.</p>
        </div>
        <div class="col-12 lg:col-10">
            <div class="grid formgrid p-fluid">
                <div class="field mb-4 col-12">
                    <label for="nickname" class="font-medium text-900">Nickname</label>
                    <InputText id="nickname" type="text" />
                </div>
                <div class="field mb-4 col-12">
                    <label for="avatar" class="font-medium text-900">Avatar</label>
                    <div class="flex align-items-center">
                        <img src="images/blocks/avatars/circle/avatar-f-4.png" class="mr-4" />
                        <FileUpload mode="basic" name="avatar" url="./upload.php" accept="image/*" :maxFileSize="1000000" class="p-button-outlined p-button-plain" chooseLabel="Upload Image"></FileUpload>
                    </div>
                </div>
                <div class="field mb-4 col-12">
                    <label for="bio" class="font-medium text-900">Bio</label>
                    <Textarea id="bio" type="text" :rows="5" :autoResize="true"></Textarea>
                </div>
                <div class="field mb-4 col-12 md:col-6">
                    <label for="email" class="font-medium text-900">Email</label>
                    <InputText id="email" type="text" />
                </div>
                <div class="field mb-4 col-12 md:col-6">
                    <label for="country" class="font-medium text-900">Country</label>
                    <Dropdown id="country" v-model="selectedCountry1" :options="countries" optionLabel="name" :filter="true" filterBy="name" :showClear="true" placeholder="Select a Country">
                        <template #option="slotProps">
                            <div class="flex align-items-center">
                                <img src="images/blocks/flag/flag_placeholder.png" :class="'mr-2 flag flag-' + slotProps.option.code.toLowerCase()" style="width:18px"/>
                                <div>{{slotProps.option.name}}</div>
                            </div>
                        </template>
                    </Dropdown>
                </div>
                <div class="field mb-4 col-12 md:col-6">
                    <label for="city" class="font-medium text-900">City</label>
                    <InputText id="city" type="text" />
                </div>
                <div class="field mb-4 col-12 md:col-6">
                    <label for="state" class="font-medium text-900">State</label>
                    <InputText id="state" type="text" />
                </div>
                <div class="field mb-4 col-12">
                    <label for="website" class="font-medium text-900">Website</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">www</span>
                        <InputText id="website" type="text" />
                    </div>
                </div>
                <div class="field mb-4 col-12">
                    <label for="privacy" class="font-medium text-900">Privacy</label>
                    <div class="flex align-items-center">
                        <Checkbox id="privacy" v-model="checked1" :binary="true"></Checkbox>
                        <span class="ml-2">Share my data with contacts</span>
                    </div>
                </div>
                <div class="col-12">
                    <Button label="Save Changes" class="w-auto mt-3"></Button>
                </div>
            </div>
        </div>
    </div>
</div>`,
            block2: `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-xl mb-3">Profile</div>
    <p class="m-0 mb-4 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio. Non nisi est sit amet.
        Egestas integer eget aliquet nibh praesent tristique magna.</p>
    <div class="surface-card p-4 shadow-2 border-round">
        <div class="grid formgrid p-fluid">
            <div class="field mb-4 col-12">
                <label for="nickname2" class="font-medium text-900">Nickname</label>
                <InputText id="nickname2" type="text" />
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="bio2" class="font-medium text-900">Bio</label>
                <Textarea id="bio2" type="text" :rows="5" :autoResize="true"></Textarea>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="avatar2" class="font-medium text-900">Avatar</label>
                <div class="flex align-items-center">
                    <img src="images/blocks/avatars/circle/avatar-f-4.png" class="mr-4" />
                    <FileUpload id="avatar2" mode="basic" name="avatar" url="./upload.php" accept="image/*" :maxFileSize="1000000" class="p-button-outlined p-button-plain" chooseLabel="Upload Image"></FileUpload>
                </div>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="email2" class="font-medium text-900">Email</label>
                <InputText id="email2" type="text" />
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="country2" class="font-medium text-900">Country</label>
                <Dropdown id="country2 v-model="selectedCountry2" :options="countries" optionLabel="name" :filter="true" filterBy="name" :showClear="true" placeholder="Select a Country">
                    <template #option="slotProps">
                        <div class="flex align-items-center">
                            <img src="images/blocks/flag/flag_placeholder.png" :class="'mr-2 flag flag-' + slotProps.option.code.toLowerCase()" style="width:18px"/>
                            <div>{{slotProps.option.name}}</div>
                        </div>
                    </template>
                </Dropdown>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="city2" class="font-medium text-900">City</label>
                <InputText id="city2" type="text" />
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="state2" class="font-medium text-900">State</label>
                <InputText id="state2" type="text" />
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12">
                <label for="website2" class="font-medium text-900">Website</label>
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">www</span>
                    <InputText id="website2" type="text" />
                </div>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="field mb-4 col-12">
                <label for="privacy2" class="font-medium text-900">Privacy</label>
                <div class="flex align-items-center">
                    <InputSwitch id="privacy2" v-model="checked2"></InputSwitch>
                    <span class="ml-2">Share my data with contacts</span>
                </div>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
            <div class="col-12">
                <Button label="Save Changes" class="w-auto mt-3"></Button>
            </div>
        </div>
    </div>
</div>`,
            block3: `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-xl mb-3">Create Invoice</div>
    <div class="surface-card p-4 shadow-2 border-round p-fluid">
        <div class="grid formgrid p-fluid">
            <div class="field mb-4 col-12 md:col-6">
                <label for="company_name" class="font-medium text-900">Company Name</label>
                <InputText id="company_name" type="text" />
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="invoice_id" class="font-medium text-900">Invoice Id</label>
                <InputText id="invoice_id" type="text" />
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="customer_name" class="font-medium text-900">Customer Name</label>
                <InputText id="customer_name" type="text" />
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="customer_email" class="font-medium text-900">Customer Email</label>
                <InputText id="customer_email" type="text" />
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="invoice_date" class="font-medium text-900">Invoice Date</label>
                <Calendar id="invoice_date" :showIcon="true"></Calendar>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="due_date" class="font-medium text-900">Due Date</label>
                <Calendar id="due_date" :showIcon="true"></Calendar>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
            <div class="field mb-4 col-12 md:col-6">
                <label for="item" class="font-medium text-900">Item</label>
                <InputText id="item" type="text" />
            </div>
            <div class="field mb-4 col-6 md:col-3">
                <label for="quantity" class="font-medium text-900">Quantity</label>
                <InputText id="quantity" type="text" />
            </div>
            <div class="field mb-4 col-6 md:col-3">
                <label for="price" class="font-medium text-900">Price</label>
                <div class="flex align-content-center">
                    <InputNumber mode="currency" currency="USD" id="price" type="text" class="flex-1"></InputNumber>
                    <Button icon="pi pi-trash" class="p-button-danger p-button-text ml-2"></Button>
                </div>
            </div>
            <div class="field mb-4 col-12 md:col-6">
                <Button icon="pi pi-plus" label="Add Item" class="p-button-secondary p-button-outlined w-auto"></Button>
            </div>
            <div class="field mb-4 col-12 md:col-6 text-right">
                <span class="text-xl text-600 font-medium mr-2">Total</span>
                <span class="text-xl text-900 font-medium">$59</span>
            </div>
            <div class="field mb-4 col-12 flex align-items-center">
                <Checkbox v-model="checked3" :binary="true"></Checkbox>
                <span class="ml-2 text-900">Taxable (VAT 18%)</span>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
            <div class="field mb-4 col-12">
                <label for="notes" class="font-medium text-900">Notes</label>
                <Textarea id="notes" :autoResize="true" ::rows="5"></Textarea>
            </div>
            <div class="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
        </div>
        <Button label="Create Invoice" icon="pi pi-file" class="w-auto"></Button>
    </div>
</div>`,
            block4: `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="p-fluid flex flex-column lg:flex-row">
        <ul class="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-evenly md:justify-content-between lg:justify-content-start mb-5 lg:pr-8 lg:mb-0">
            <li>
                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
                    <i class="pi pi-user md:mr-2"></i>
                    <span class="font-medium hidden md:block">Profile</span>
                </a>
            </li>
            <li>
                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
                    <i class="pi pi-cog md:mr-2"></i>
                    <span class="font-medium hidden md:block">Account</span>
                </a>
            </li>
            <li>
                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
                    <i class="pi pi-palette md:mr-2"></i>
                    <span class="font-medium hidden md:block">Appearance</span>
                </a>
            </li>
            <li>
                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
                    <i class="pi pi-sun md:mr-2"></i>
                    <span class="font-medium hidden md:block">Accessibility</span>
                </a>
            </li>
            <li>
                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-800 hover:surface-hover transition-duration-150 transition-colors p-ripple">
                    <i class="pi pi-bell md:mr-2"></i>
                    <span class="font-medium hidden md:block">Notifications</span>
                </a>
            </li>
        </ul>
        <div class="surface-card p-5 shadow-2 border-round flex-auto">
            <div class="text-900 font-semibold text-lg mt-3">Profile</div>
            <Divider></Divider>
            <div class="flex gap-5 flex-column-reverse md:flex-row">
                <div class="flex-auto p-fluid">
                    <div class="mb-4">
                        <label for="email" class="block font-medium text-900 mb-2">Name</label>
                        <InputText id="email" type="text" />
                    </div>
                    <div class="mb-4">
                        <label for="bio" class="block font-medium text-900 mb-2">Bio</label>
                        <Textarea id="bio" type="text" rows="5" :autoResize="true"></Textarea>
                    </div>
                    <div class="mb-4">
                        <label for="website" class="block font-medium text-900 mb-2">URL</label>
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">https://</span>
                            <InputText id="website" type="text" />
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="state" class="block font-medium text-900 mb-2">Company</label>
                        <InputText id="state" type="text" />
                    </div>
                    <div>
                        <Button v-ripple label="Update Profile" class="w-auto"></Button>
                    </div>
                </div>
                <div class="flex flex-column align-items-center flex-or">
                    <span class="font-medium text-900 mb-2">Profile Picture</span>
                    <img src="images/blocks/avatars/circle-big/avatar-f-2.png" class="h-10rem w-10rem" />
                    <Button type="button" icon="pi pi-pencil" class="p-button-rounded -mt-4"></Button>
                </div>
            </div>
        </div>
    </div>
</div>`,
            checked1: false,
            checked2: false,
            checked3: false,
            selectedCountry1: null,
            selectedCountry2: null,
            countries: [
                { name: 'Australia', code: 'AU' },
                { name: 'Brazil', code: 'BR' },
                { name: 'China', code: 'CN' },
                { name: 'Egypt', code: 'EG' },
                { name: 'France', code: 'FR' },
                { name: 'Germany', code: 'DE' },
                { name: 'India', code: 'IN' },
                { name: 'Japan', code: 'JP' },
                { name: 'Spain', code: 'ES' },
                { name: 'United States', code: 'US' }
            ],
            date1: null,
            date2: null
        };
    }
};
</script>
