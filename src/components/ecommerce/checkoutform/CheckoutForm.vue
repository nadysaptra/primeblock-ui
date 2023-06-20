<template>
    <div>
        <div class="block-category-title">Checkout Forms</div>
        <BlockViewer header="2 Columns" :code="block1" :recent="true">
            <div class="surface-50 px-4 py-8 md:px-6 lg:px-8">
                <div class="grid -mr-3 -ml-3">
                    <div class="col-12 lg:col-8 p-4">
                        <div class="surface-card grid formgrid p-fluid border-round shadow-2 p-4">
                            <div class="col-12 mb-4 flex flex-column lg:flex-row align-items-center justify-content-between">
                                <div class="text-900 font-medium text-xl">Contact Information</div>
                                <div class="mt-3 lg:mt-0">
                                    <span class="text-600 mr-2">Already have an account?</span>
                                    <a tabindex="0" class="cursor-pointer text-900 hover:text-primary transition-duration-150">Login</a>
                                </div>
                            </div>
                            <div class="col-12 field mb-0">
                                <label for="email-1" class="text-900 font-medium mb-3">Email</label>
                                <input id="email-1" type="text" class="p-inputtext w-full mb-3">
                                <div class="flex align-items-center">
                                    <Checkbox name="checkbox-1" v-model="checked1" :binary="true" class="text-900" id="checkbox-1"></Checkbox>
                                    <label id="checkbox-1" class="text-900 ml-2">Email me with news and offers</label>
                                </div>
                            </div>
                            <Divider class="w-full px-2"></Divider>
                            <div class="col-12 mt-4 lg:mt-0 mb-4">
                                <div class="text-900 font-medium text-xl">Shipping</div>
                            </div>
                            <div class="col-12 field mb-0">
                                <label for="country2" class="text-900 font-medium mb-3">Country</label>
                                <input id="country2" type="text" class="p-inputtext w-full mb-3">
                            </div>
                            <div class="col-12 lg:col-6 field mb-0">
                                <label for="name2" class="text-900 font-medium mb-3">Name</label>
                                <input id="name2" type="text" class="p-inputtext w-full mb-3">
                            </div>
                            <div class="col-12 lg:col-6 field mb-0">
                                <label for="surname2" class="text-900 font-medium mb-3">Surname</label>
                                <input id="surname2" type="text" class="p-inputtext w-full mb-3">
                            </div>
                            <div class="col-12 field mb-0">
                                <label for="address3" class="text-900 font-medium mb-3">Apartment, Suite, etc.</label>
                                <input id="address3" type="text" class="p-inputtext w-full mb-3">
                            </div>
                            <div class="col-12 lg:col-6 field mb-0">
                                <label for="pc2" class="text-900 font-medium mb-3">Postal Code</label>
                                <input id="pc2" type="text" class="p-inputtext w-full mb-3">
                            </div>
                            <div class="col-12 lg:col-6 field mb-0">
                                <label for="city2" class="text-900 font-medium mb-3">City</label>
                                <input id="city2" type="text" class="p-inputtext w-full mb-3">
                            </div>
                            <div class="col-12 field mb-0">
                                <label for="phone" class="text-900 font-medium mb-3">Phone</label>
                                <input id="phone" type="text" class="p-inputtext w-full mb-3">
                            </div>
                            <Divider class="w-full px-2"></Divider>
                            <div class="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2">Shipping Method</div>
                            <div class="col-12 flex flex-column lg:flex-row">
                                <div class="flex justify-content-between p-3 border-round border-1 surface-border w-full mr-3 hover:border-primary cursor-pointer" @click="selectedValue = 'UPS'" :class="{'border-primary surface-50': selectedValue === 'UPS'}">
                                    <div class="mr-3 lg:mr-0">
                                        <div class="text-900 font-bold mb-2">UPS</div>
                                        <span class="text-600">Delivery: Tomorrow</span>
                                    </div>
                                    <div class="flex justify-content-between align-items-center">
                                        <span class="text-primary mr-2">$9.00</span>
                                        <RadioButton name="ups" value="UPS" v-model="selectedValue"></RadioButton>
                                    </div>
                                </div>
                                <div class="flex justify-content-between p-3 mt-3 lg:mt-0 border-round border-1 surface-border w-full hover:border-primary cursor-pointer" @click="selectedValue = 'FedEx'" :class="{'border-primary surface-50': selectedValue === 'FedEx'}">
                                    <div class="mr-3 lg:mr-0">
                                        <div class="text-900 font-bold mb-2">FedEx</div>
                                        <span class="text-600">Delivery: Next Week</span>
                                    </div>
                                    <div class="flex justify-content-between align-items-center">
                                        <span class="text-primary mr-2">$1.00</span>
                                        <RadioButton name="fedex" value="FedEx" v-model="selectedValue"></RadioButton>
                                    </div>
                                </div>        
                            </div>
                            <Divider class="w-full px-2"></Divider>
                            <div class="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2">Payment</div>
                            <div class="col-12 mb-4">
                                <div class="p-3 border-1 border-round-top surface-border" @click="selectedValue2 === 'paypal'" :class="{'border-primary surface-50': selectedValue2 === 'paypal'}">
                                    <RadioButton name="paypal" value="paypal" v-model="selectedValue2" inputId="paypal"></RadioButton>
                                    <label for="paypal" class="text-900 ml-3">PayPal</label>
                                </div>
                                <div class="p-3 border-x-1 surface-border" @click="selectedValue2 === 'creditcard'" :class="{'border-primary surface-50': selectedValue2 === 'creditcard'}">
                                    <RadioButton name="creditCard" value="creditcard" v-model="selectedValue2" inputId="creditCard"></RadioButton>
                                    <label for="creditCard" class="text-900 ml-3">Credit Card</label>
                                </div>
                                <div class="p-3 border-1 border-round-bottom surface-border" @click="selectedValue2 === 'bank'" :class="{'border-primary surface-50': selectedValue2 === 'bank'}">
                                    <RadioButton name="bank" value="bank" v-model="selectedValue2" inputId="bank"></RadioButton>
                                    <label for="bank" class="text-900 ml-3">Online Bank Transfer</label>
                                </div>
                            </div>
                            <div class="col-12 field mb-4">
                                <form ref="form1" class="relative">
                                    <label for="cc" class="text-900 font-medium mb-3 block">Card Number</label>
                                    <InputMask mask="9999-9999-9999-9999" v-model="cc" placeholder="9999-9999-9999-9999" style="margin-right: .5em" />
                                    <InlineMessage v-if="cc !== null && cc.length !== 16 && cc.length !== 0" class="block absolute w-full z-1" severity="error">Not a valid credit card number</InlineMessage>
                                </form>
                            </div>
                            <div class="col-12 lg:col-6 field mb-4">
                                <form ref="form2" class="relative">
                                    <label for="exp" class="text-900 font-medium mb-3 block">Expiry Date</label>
                                    <InputMask mask="99/99" v-model="exp" placeholder="99/99" slotChar="MM/YY" style="margin-right: .5em" />
                                    <InlineMessage v-if="exp.length !== 4 && exp.length !== 0" class="block absolute w-full z-1" severity="error">Not a valid expiry date</InlineMessage>
                                </form>
                            </div>
                            <div class="col-12 lg:col-6 field mb-4">
                                <form ref="form3" class="relative">
                                    <label for="cvc" class="text-900 font-medium mb-3 block">CVC</label>
                                    <InputMask mask="999" v-model="cvc" placeholder="999" style="margin-right: .5em" />
                                    <InlineMessage v-if="cc.length !== 0 && cc.length !== 3" class="block absolute w-full z-1" severity="error">Not a valid CVC</InlineMessage>
                                </form>
                            </div>
                            <div class="col-12 field mb-0">
                                <label for="holderName" class="text-900 font-medium mb-3">Cardholder Name</label>
                                <input id="holderName" type="text" class="p-inputtext w-full mb-3">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 lg:col-4 p-4">
                        <div class="surface-card border-round shadow-2 p-5">
                            <div class="flex justify-content-between align-items-center border-bottom-1 pb-3 surface-border">
                                <span class="text-900 font-medium text-lg lg:text-xl"><i class="pi pi-shopping-cart text-xl mr-2"></i>Your Order (1)</span>
                                <a tabindex="0" class="text-600 font-medium cursor-pointer hover:text-primary">Edit Cart</a>
                            </div>
                            <div class="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-2 mt-3 border-bottom-1 surface-border">
                                <img src="images/blocks/ecommerce/checkoutform/checkoutform-1-1.png" class="w-8rem h-8rem flex-shrink-0 mb-3" />
                                <div class="flex-auto lg:ml-3">
                                    <div class="flex align-items-center justify-content-between mb-3">
                                        <span class="text-900 font-medium">Product Title</span>
                                        <span class="text-900 font-bold">$123.00</span>
                                    </div>
                                    <div class="text-600 text-sm mb-3">Black | Large</div>
                                    <div class="flex flex-auto justify-content-between align-items-center">
                                        <InputNumber :showButtons="true" buttonLayout="horizontal" spinnerMode="horizontal" :min="0" inputClass="w-2rem text-center py-2 px-1 border-transparent" v-model="quantities1[0]" 
                                            class="border-1 surface-border border-round" decrementButtonClass="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonClass="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></InputNumber>
                                        <Button icon="pi pi-trash" class="text-600 p-button-text p-button-rounded"></Button>
                                    </div>
                                </div>
                            </div>
                            <div class="py-2 mt-3 border-bottom-1 surface-border">
                                <div class="flex justify-content-between align-items-center mb-3">
                                    <span class="text-900">Subtotal</span>
                                    <span class="text-900">$12.00</span>
                                </div>
                                <div class="flex justify-content-between align-items-center mb-3">
                                    <span class="text-900">Shipping</span>
                                    <span class="text-900">Free</span>
                                </div>
                                <div class="flex justify-content-between align-items-center mb-3">
                                    <span class="text-900">Total</span>
                                    <span class="text-900 font-bold">$12.00</span>
                                </div>
                            </div>
                            <div class="py-2 mt-3 border-bottom-1 surface-border">
                                <div class="text-900 font-medium mb-2">Save Your Account</div>
                                <div class="text-600 text-sm line-height-3 mb-2">Create an exclusive account for easy shopping and experience for your upcoming visits.</div>
                                <Password v-model="value3" :toggleMask="true" inputClass="w-full" class="w-full mb-2"></Password>
                            </div>
                            <Button class="p-button-primary w-full mt-3" label="Place Order"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Multi-Step" :code="block2" :recent="true">
            <div class="surface-section">
                <div class="grid grid-nogutter">
                    <div class="col-12 lg:col-6 h-full px-4 py-8 md:px-6 lg:px-8">
                        <ul class="flex list-none flex-wrap p-0 mb-6">
                            <li class="flex align-items-center text-primary mr-2">Cart <i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                            <li class="flex align-items-center text-500 mr-2">Information<i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                            <li class="flex align-items-center text-500 mr-2">Shipping<i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                            <li class="flex align-items-center text-500 mr-2">Payment</li>
                        </ul>
                        <div class="grid formgrid">
                            <div class="col-12 field mb-6">
                                <span class="text-900 text-2xl block font-medium mb-5">Contact Information</span>
                                <input id="email" placeholder="Email" type="text" class="p-inputtext w-full mb-4">
                                <div class="flex align-items-center">
                                    <Checkbox name="checkbox-2" v-model="checked2" :binary="true" class="text-900" id="checkbox-2"></Checkbox>
                                    <label id="checkbox-2" class="text-900 ml-2">Email me with news and offers</label>
                                </div>
                            </div>
                            <div class="col-12 field mb-4">
                                <span class="text-900 text-2xl block font-medium mb-5">Shipping</span>
                                <Dropdown :options="cities" v-model="selectedCity" placeholder="Country / Region" optionLabel="name" :showClear="true" class="w-full"></Dropdown>
                            </div>
                            <div class="col-12 lg:col-6 field mb-4">
                                <input id="name" placeholder="Name" type="text" class="p-inputtext w-full">
                            </div>
                            <div class="col-12 lg:col-6 field mb-4">
                                <input id="lastname" placeholder="Last Name" type="text" class="p-inputtext w-full">
                            </div>
                            <div class="col-12 field mb-4">
                                <input id="address" placeholder="Address" type="text" class="p-inputtext w-full">
                            </div>
                            <div class="col-12 field mb-4">
                                <input id="address2" placeholder="Apartment, suite, etc" type="text" class="p-inputtext w-full">
                            </div>
                            <div class="col-12 lg:col-6 field mb-4">
                                <input id="pc" placeholder="Postal Code" type="text" class="p-inputtext w-full">
                            </div>
                            <div class="col-12 lg:col-6 field mb-4">
                                <input id="city" placeholder="City" type="text" class="p-inputtext w-full">
                            </div>
                            <div class="col-12 lg:col-6 field mb-4">
                                <div class="flex align-items-center">
                                    <Checkbox name="checkbox-3" v-model="checked3" :binary="true" class="text-900" id="checkbox-3"></Checkbox>
                                    <label id="checkbox-3" class="text-900 ml-2">Save for next purchase</label>
                                </div>
                            </div>
                            <div class="col-12 flex flex-column lg:flex-row justify-content-center align-items-center lg:justify-content-end mt-6">
                                <Button class="p-button-text mt-3 lg:mt-0 w-full lg:w-auto lg:px-6 flex-order-2 lg:flex-order-1 lg:mr-4" label="Return to Cart"></Button>
                                <Button class="p-button-primary w-full lg:w-auto lg:px-6 flex-order-1 lg:flex-order-2" label="Continue to Shipping"></Button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 lg:col-6 px-4 py-8 md:px-6 lg:px-8 surface-50">
                        <div class="border-bottom-1 pb-3 surface-border">
                            <span class="text-900 font-medium text-xl">Your Cart</span>
                        </div>
                        <div class="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-2 mt-3 border-bottom-1 surface-border">
                            <img src="images/blocks/ecommerce/checkoutform/checkoutform-1-2.png" class="w-8rem h-8rem flex-shrink-0 mb-3" />
                            <div class="flex-auto lg:ml-3">
                                <div class="flex align-items-center justify-content-between mb-3">
                                    <span class="text-900 font-medium">Product Name</span>
                                    <span class="text-900 font-bold">$123.00</span>
                                </div>
                                <div class="text-600 text-sm mb-3">Black | Large</div>
                                <div class="flex flex-auto justify-content-between align-items-center">
                                    <InputNumber :showButtons="true" buttonLayout="horizontal" spinnerMode="horizontal" :min="0" inputClass="w-2rem text-center py-2 px-1 border-transparent" v-model="quantities1[0]" 
                                        class="border-1 surface-border border-round" decrementButtonClass="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonClass="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></InputNumber>
                                    <Button icon="pi pi-trash" class="p-button-text p-button-rounded"></Button>
                                </div>
                            </div>
                        </div>
                        <div class="py-2 mt-3 border-bottom-1 surface-border">
                            <div class="p-inputgroup mb-3">
                                <InputText type="text" v-model="value4" placeholder="Promo code" class="w-full" />         
                                <Button label="Apply" :disabled="!value4"></Button>
                            </div>
                        </div>
                        <div class="py-2 mt-3">
                            <div class="flex justify-content-between align-items-center mb-3">
                                <span class="text-900 font-medium">Subtotal</span>
                                <span class="text-900">$123.00</span>
                            </div>
                            <div class="flex justify-content-between align-items-center mb-3">
                                <span class="text-900 font-medium">Shipping</span>
                                <span class="text-primary font-bold">Free</span>
                            </div>
                            <div class="flex justify-content-between align-items-center mb-3">
                                <span class="text-900 font-bold">Total</span>
                                <span class="text-900 font-medium text-xl">$123.00</span>
                            </div>
                        </div>
                        <div class="py-2 mt-3 bg-yellow-100 flex align-items-center justify-content-center">
                            <img src="images/blocks/ecommerce/checkoutform/checkoutform-1-3.png" class="mr-2" alt="Country Flag"><span class="text-black-alpha-90 font-medium">No additional duties or taxes.</span>
                        </div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Formless" :code="block3" :recent="true">
            <div class="surface-50 px-4 py-8 md:px-6 lg:px-8">
                <div class="text-900 font-medium text-3xl mb-5">Your order is almost done</div>
                <div class="grid -mr-3 -ml-3">
                    <div class="col-12 lg:col-9 p-3">
                        <div class="px-0 py-4 lg:px-4 surface-card border-round shadow-2">
                            <div class="flex">
                                <div class="flex flex-column align-items-center ml-3" style="width:2rem">
                                    <span class="bg-green-500 text-0 flex align-items-center justify-content-center border-circle" style="min-width:3rem; min-height: 3rem">
                                        <i class="pi pi-directions"></i>
                                    </span>
                                    <div class="h-full border-dashed border-1 border-green-500" style="min-height: 12rem"></div>
                                </div>
                                <div class="ml-0 lg:ml-5 p-2 flex-auto">
                                    <div class="mb-3">
                                        <span class="text-900 text-xl block ml-2">Address</span>
                                    </div>
                                    <div class="grid flex-column lg:flex-row">
                                        <div class="col p-3">
                                            <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150" @click="selectedAddress = address1" :class="{'border-primary': selectedAddress === address1}">
                                                <div class="flex justify-content-between mb-3">
                                                    <span class="text-900 text-xl font-medium">Home</span>
                                                    <span class="text-600 font-medium"><i class="pi pi-pencil mr-2"></i>Edit</span>
                                                </div>
                                                <span class="inline-block text-600 mb-3">Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands</span>
                                                <span class="inline-block text-600"><i class="pi pi-mobile mr-2"></i>+123456789</span>
                                            </div>
                                        </div>
                                        <div class="col p-3">
                                            <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150" @click="selectedAddress = address2" :class="{'border-primary': selectedAddress === address2}">
                                                <div class="flex justify-content-between mb-3">
                                                    <span class="text-900 text-xl font-medium">Office</span>
                                                    <span class="text-600 font-medium"><i class="pi pi-pencil mr-2"></i>Edit</span>
                                                </div>
                                                <span class="inline-block text-600 mb-3">Jacob Obrechtstraat 5, 1072 KC Amsterdam The Netherlands</span>
                                                <span class="inline-block text-600"><i class="pi pi-mobile mr-2"></i>+123456789</span>
                                            </div>
                                        </div>
                                        <div class="col-12 lg:col-3 p-3">
                                            <div class="flex h-full flex-column justify-content-center align-items-center text-center py-5 border-round border-1 surface-border surface-100 cursor-pointer hover:border-primary transition-duration-150">
                                                <span class="text-600 border-circle border-2 w-2rem h-2rem flex align-items-center justify-content-center"><i class="pi pi-fw pi-plus"></i></span>
                                                <span class="text-600 mt-3">Add New Address</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="flex flex-column align-items-center ml-3" style="width:2rem">
                                    <span class="bg-green-500 text-0 flex align-items-center justify-content-center border-circle" style="min-width:3rem; min-height: 3rem">
                                        <i class="pi pi-image"></i>
                                    </span>
                                    <div class="h-full border-dashed border-1 surface-border" style="min-height: 12rem"></div>
                                </div>
                                <div class="ml-0 lg:ml-5 p-2 flex-auto">
                                    <div class="mb-3">
                                        <span class="text-900 text-xl block ml-2">Cart</span>
                                    </div>
                                    <div class="p-2 flex flex-column lg:flex-row flex-wrap lg:align-items-center">
                                        <img src="images/blocks/ecommerce/checkoutform/checkoutform-1-4.png" class="w-8rem h-8rem mb-3 lg:mb-0 flex-shrink-0" alt="product"/>
                                        <div class="flex-auto lg:ml-3">
                                            <div class="flex align-items-center justify-content-between mb-3">
                                                <span class="text-900 font-medium">Product Name</span>
                                                <span class="text-900 font-medium">$123.00</span>
                                            </div>
                                            <div class="text-600 text-sm mb-3">White</div>
                                            <div class="flex flex-auto justify-content-between align-items-center">
                                                <InputNumber :showButtons="true" buttonLayout="horizontal" :min="0" inputClass="w-2rem text-center p-0 border-none surface-50" v-model="quantities1[0]" 
                                                    class="border-none border-round" decrementButtonClass="surface-50 p-button-text text-600 hover:text-primary" incrementButtonClass="p-button-text surface-50 text-600 hover:text-primary py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></InputNumber>
                                                <span class="text-600 cursor-pointer"><i class="pi pi-trash mr-2"></i>Delete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="flex flex-column align-items-center ml-3" style="width:2rem">
                                    <span class="bg-gray-300 text-0 flex align-items-center justify-content-center border-circle" style="min-width:3rem; min-height: 3rem">
                                        <i class="pi pi-credit-card"></i>
                                    </span>
                                </div>
                                <div class="ml-0 lg:ml-5 p-2 flex-auto">
                                    <div class="mb-3">
                                        <span class="text-900 text-xl block ml-2">Payment Method</span>
                                    </div>
                                    <div class="grid flex-column lg:flex-row">
                                        <div class="col p-3">
                                            <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150" @click="selectedCard = card1" :class="{'border-primary': selectedCard === card1}">
                                                <img src="images/blocks/ecommerce/checkoutform/checkoutform-1-5.png" class="w-6rem" alt="Visa">
                                                <span class="inline-block text-900 text-lg lg:text-xl mt-3">**** **** **** 1234</span>
                                                <div class="flex justify-content-between align-items-center mt-3">
                                                    <span class="inline-block text-600 text-sm">Cardholder Name</span>
                                                    <span class="inline-block text-600 text-sm text-right">Expiry Date</span>
                                                </div>
                                                <div class="flex justify-content-between align-items-center mt-3">
                                                    <span class="inline-block text-900 font-bold">John  Warden</span>
                                                    <span class="inline-block text-900 font-bold">12/25</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col p-3">
                                            <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150" @click="selectedCard = card2" :class="{'border-primary': selectedCard === card2}">
                                                <img src="images/blocks/ecommerce/checkoutform/checkoutform-1-5.png" class="w-6rem" alt="Visa">
                                                <span class="inline-block text-900 text-lg lg:text-xl mt-3">**** **** **** 1234</span>
                                                <div class="flex justify-content-between align-items-center mt-3">
                                                    <span class="inline-block text-600 text-sm">Cardholder Name</span>
                                                    <span class="inline-block text-600 text-sm text-right">Expiry Date</span>
                                                </div>
                                                <div class="flex justify-content-between align-items-center mt-3">
                                                    <span class="inline-block text-900 font-bold">John  Warden</span>
                                                    <span class="inline-block text-900 font-bold">12/25</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 lg:col-3 p-3">
                                            <div class="flex h-full flex-column justify-content-center align-items-center py-5 border-round border-1 surface-border surface-100 cursor-pointer hover:border-primary transition-duration-150">
                                                <span class="text-600 border-circle border-2 w-2rem h-2rem flex align-items-center justify-content-center"><i class="pi pi-fw pi-plus"></i></span>
                                                <span class="text-600 mt-3 text-center">Add New Credit Card</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 lg:col-3 p-3">
                        <div class="surface-card p-4 border-round shadow-2">
                            <div class="border-bottom-1 surface-border pb-4">
                                <span class="text-900 text-xl block">Order Summary</span>
                            </div>
                            <div class="border-bottom-1 surface-border my-3 py-2">
                                <div class="flex justify-content-between mb-3">
                                    <span class="text-900">Price</span>
                                    <span class="text-900">$123.00</span>
                                </div>
                                <div class="flex justify-content-between mb-3">
                                    <span class="text-900">Delivery</span>
                                    <span class="text-green-500">Free</span>
                                </div>
                                <div class="flex justify-content-between mb-3">
                                    <span class="text-900">Discount</span>
                                    <span class="text-900">$12.00</span>
                                </div>
                            </div>
                            <div class="border-bottom-1 surface-border my-3 py-2">
                                <div class="flex justify-content-between mb-3">
                                    <span class="text-900 font-medium">Total</span>
                                    <span class="text-900 font-bold">$111.00</span>
                                </div>
                            </div>
                            <Button class="surface-400 border-none hover:bg-primary w-full mt-3" :disabled="!selectedCard" label="Place Order"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedValue: '',
            selectedValue2: '',
            date1: null,
            quantities1:[1, 1, 1],
            quantities2:[1, 1],
            value3: null,
            value4: null,
            checked1: true,
            checked2: true,
            checked3: true,
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            selectedCity: null,
            selectedAddress: 'Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands',
            selectedCard: '**** **** **** 1234',
            card1: '**** **** **** 1234',
            card2: '**** **** **** 1235',
            address1: 'Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands',
            address2: 'Jacob Obrechtstraat 6, 1071 KC Amsterdam The Netherlands',
            selectedDelivery: 'UPS',
            selectedPayment: 'Credit Card',
            ccRegex: RegExp(/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/),
            cc: '',
            cvc: '',
            cvcRegex: RegExp(/^[0-9]{3,4}$/),
            exp: '',
            expRegex: RegExp(/[0-9]{2}\/[0-9]{2}$/),
            block1: `
<div class="surface-50 px-4 py-8 md:px-6 lg:px-8">
    <div class="grid -mr-3 -ml-3">
        <div class="col-12 lg:col-8 p-4">
            <div class="surface-card grid formgrid p-fluid border-round shadow-2 p-4">
                <div class="col-12 mb-4 flex flex-column lg:flex-row align-items-center justify-content-between">
                    <div class="text-900 font-medium text-xl">Contact Information</div>
                    <div class="mt-3 lg:mt-0">
                        <span class="text-600 mr-2">Already have an account?</span>
                        <a tabindex="0" class="cursor-pointer text-900 hover:text-primary transition-duration-150">Login</a>
                    </div>
                </div>
                <div class="col-12 field mb-0">
                    <label for="email-1" class="text-900 font-medium mb-3">Email</label>
                    <input id="email-1" type="text" class="p-inputtext w-full mb-3">
                    <div class="flex align-items-center">
                        <Checkbox name="checkbox-1" v-model="checked1" :binary="true" class="text-900" id="checkbox-1"></Checkbox>
                        <label id="checkbox-1" class="text-900 ml-2">Email me with news and offers</label>
                    </div>
                </div>
                <Divider class="w-full px-2"></Divider>
                <div class="col-12 mt-4 lg:mt-0 mb-4">
                    <div class="text-900 font-medium text-xl">Shipping</div>
                </div>
                <div class="col-12 field mb-0">
                    <label for="country2" class="text-900 font-medium mb-3">Country</label>
                    <input id="country2" type="text" class="p-inputtext w-full mb-3">
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                    <label for="name2" class="text-900 font-medium mb-3">Name</label>
                    <input id="name2" type="text" class="p-inputtext w-full mb-3">
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                    <label for="surname2" class="text-900 font-medium mb-3">Surname</label>
                    <input id="surname2" type="text" class="p-inputtext w-full mb-3">
                </div>
                <div class="col-12 field mb-0">
                    <label for="address3" class="text-900 font-medium mb-3">Apartment, Suite, etc.</label>
                    <input id="address3" type="text" class="p-inputtext w-full mb-3">
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                    <label for="pc2" class="text-900 font-medium mb-3">Postal Code</label>
                    <input id="pc2" type="text" class="p-inputtext w-full mb-3">
                </div>
                <div class="col-12 lg:col-6 field mb-0">
                    <label for="city2" class="text-900 font-medium mb-3">City</label>
                    <input id="city2" type="text" class="p-inputtext w-full mb-3">
                </div>
                <div class="col-12 field mb-0">
                    <label for="phone" class="text-900 font-medium mb-3">Phone</label>
                    <input id="phone" type="text" class="p-inputtext w-full mb-3">
                </div>
                <Divider class="w-full px-2"></Divider>
                <div class="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2">Shipping Method</div>
                <div class="col-12 flex flex-column lg:flex-row">
                    <div class="flex justify-content-between p-3 border-round border-1 surface-border w-full mr-3 hover:border-primary cursor-pointer" @click="selectedValue = 'UPS'" :class="{'border-primary surface-50': selectedValue === 'UPS'}">
                        <div class="mr-3 lg:mr-0">
                            <div class="text-900 font-bold mb-2">UPS</div>
                            <span class="text-600">Delivery: Tomorrow</span>
                        </div>
                        <div class="flex justify-content-between align-items-center">
                            <span class="text-primary mr-2">$9.00</span>
                            <RadioButton name="ups" value="UPS" v-model="selectedValue"></RadioButton>
                        </div>
                    </div>
                    <div class="flex justify-content-between p-3 mt-3 lg:mt-0 border-round border-1 surface-border w-full hover:border-primary cursor-pointer" @click="selectedValue = 'FedEx'" :class="{'border-primary surface-50': selectedValue === 'FedEx'}">
                        <div class="mr-3 lg:mr-0">
                            <div class="text-900 font-bold mb-2">FedEx</div>
                            <span class="text-600">Delivery: Next Week</span>
                        </div>
                        <div class="flex justify-content-between align-items-center">
                            <span class="text-primary mr-2">$1.00</span>
                            <RadioButton name="fedex" value="FedEx" v-model="selectedValue"></RadioButton>
                        </div>
                    </div>        
                </div>
                <Divider class="w-full px-2"></Divider>
                <div class="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2">Payment</div>
                <div class="col-12 mb-4">
                    <div class="p-3 border-1 border-round-top surface-border" @click="selectedValue2 === 'paypal'" :class="{'border-primary surface-50': selectedValue2 === 'paypal'}">
                        <RadioButton name="paypal" value="paypal" v-model="selectedValue2" inputId="paypal"></RadioButton>
                        <label for="paypal" class="text-900 ml-3">PayPal</label>
                    </div>
                    <div class="p-3 border-x-1 surface-border" @click="selectedValue2 === 'creditcard'" :class="{'border-primary surface-50': selectedValue2 === 'creditcard'}">
                        <RadioButton name="creditCard" value="creditcard" v-model="selectedValue2" inputId="creditCard"></RadioButton>
                        <label for="creditCard" class="text-900 ml-3">Credit Card</label>
                    </div>
                    <div class="p-3 border-1 border-round-bottom surface-border" @click="selectedValue2 === 'bank'" :class="{'border-primary surface-50': selectedValue2 === 'bank'}">
                        <RadioButton name="bank" value="bank" v-model="selectedValue2" inputId="bank"></RadioButton>
                        <label for="bank" class="text-900 ml-3">Online Bank Transfer</label>
                    </div>
                </div>
                <div class="col-12 field mb-4">
                    <form ref="form1" class="relative">
                        <label for="cc" class="text-900 font-medium mb-3 block">Card Number</label>
                        <InputMask mask="9999-9999-9999-9999" v-model="cc" placeholder="9999-9999-9999-9999" style="margin-right: .5em" />
                        <InlineMessage v-if="cc !== null && cc.length !== 16 && cc.length !== 0" class="block absolute w-full z-1" severity="error">Not a valid credit card number</InlineMessage>
                    </form>
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <form ref="form2" class="relative">
                        <label for="exp" class="text-900 font-medium mb-3 block">Expiry Date</label>
                        <InputMask mask="99/99" v-model="exp" placeholder="99/99" slotChar="MM/YY" style="margin-right: .5em" />
                        <InlineMessage v-if="exp.length !== 4 && exp.length !== 0" class="block absolute w-full z-1" severity="error">Not a valid expiry date</InlineMessage>
                    </form>
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <form ref="form3" class="relative">
                        <label for="cvc" class="text-900 font-medium mb-3 block">CVC</label>
                        <InputMask mask="999" v-model="cvc" placeholder="999" style="margin-right: .5em" />
                        <InlineMessage v-if="cc.length !== 0 && cc.length !== 3" class="block absolute w-full z-1" severity="error">Not a valid CVC</InlineMessage>
                    </form>
                </div>
                <div class="col-12 field mb-0">
                    <label for="holderName" class="text-900 font-medium mb-3">Cardholder Name</label>
                    <input id="holderName" type="text" class="p-inputtext w-full mb-3">
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-4">
            <div class="surface-card border-round shadow-2 p-5">
                <div class="flex justify-content-between align-items-center border-bottom-1 pb-3 surface-border">
                    <span class="text-900 font-medium text-lg lg:text-xl"><i class="pi pi-shopping-cart text-xl mr-2"></i>Your Order (1)</span>
                    <a tabindex="0" class="text-600 font-medium cursor-pointer hover:text-primary">Edit Cart</a>
                </div>
                <div class="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-2 mt-3 border-bottom-1 surface-border">
                    <img src="images/blocks/ecommerce/checkoutform/checkoutform-1-1.png" class="w-8rem h-8rem flex-shrink-0 mb-3" />
                    <div class="flex-auto lg:ml-3">
                        <div class="flex align-items-center justify-content-between mb-3">
                            <span class="text-900 font-medium">Product Title</span>
                            <span class="text-900 font-bold">$123.00</span>
                        </div>
                        <div class="text-600 text-sm mb-3">Black | Large</div>
                        <div class="flex flex-auto justify-content-between align-items-center">
                            <InputNumber :showButtons="true" buttonLayout="horizontal" spinnerMode="horizontal" :min="0" inputClass="w-2rem text-center py-2 px-1 border-transparent" v-model="quantities1[0]" 
                                class="border-1 surface-border border-round" decrementButtonClass="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonClass="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></InputNumber>
                            <Button icon="pi pi-trash" class="text-600 p-button-text p-button-rounded"></Button>
                        </div>
                    </div>
                </div>
                <div class="py-2 mt-3 border-bottom-1 surface-border">
                    <div class="flex justify-content-between align-items-center mb-3">
                        <span class="text-900">Subtotal</span>
                        <span class="text-900">$12.00</span>
                    </div>
                    <div class="flex justify-content-between align-items-center mb-3">
                        <span class="text-900">Shipping</span>
                        <span class="text-900">Free</span>
                    </div>
                    <div class="flex justify-content-between align-items-center mb-3">
                        <span class="text-900">Total</span>
                        <span class="text-900 font-bold">$12.00</span>
                    </div>
                </div>
                <div class="py-2 mt-3 border-bottom-1 surface-border">
                    <div class="text-900 font-medium mb-2">Save Your Account</div>
                    <div class="text-600 text-sm line-height-3 mb-2">Create an exclusive account for easy shopping and experience for your upcoming visits.</div>
                    <Password v-model="value3" :toggleMask="true" inputClass="w-full" class="w-full mb-2"></Password>
                </div>
                <Button class="p-button-primary w-full mt-3" label="Place Order"></Button>
            </div>
        </div>
    </div>
</div>`,
            block2: `
<div class="surface-section">
    <div class="grid grid-nogutter">
        <div class="col-12 lg:col-6 h-full px-4 py-8 md:px-6 lg:px-8">
            <ul class="flex list-none flex-wrap p-0 mb-6">
                <li class="flex align-items-center text-primary mr-2">Cart <i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li class="flex align-items-center text-500 mr-2">Information<i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li class="flex align-items-center text-500 mr-2">Shipping<i class="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li class="flex align-items-center text-500 mr-2">Payment</li>
            </ul>
            <div class="grid formgrid">
                <div class="col-12 field mb-6">
                    <span class="text-900 text-2xl block font-medium mb-5">Contact Information</span>
                    <input id="email" placeholder="Email" type="text" class="p-inputtext w-full mb-4">
                    <div class="flex align-items-center">
                        <Checkbox name="checkbox-2" v-model="checked2" :binary="true" class="text-900" id="checkbox-2"></Checkbox>
                        <label id="checkbox-2" class="text-900 ml-2">Email me with news and offers</label>
                    </div>
                </div>
                <div class="col-12 field mb-4">
                    <span class="text-900 text-2xl block font-medium mb-5">Shipping</span>
                    <Dropdown :options="cities" v-model="selectedCity" placeholder="Country / Region" optionLabel="name" :showClear="true" class="w-full"></Dropdown>
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <input id="name" placeholder="Name" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <input id="lastname" placeholder="Last Name" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 field mb-4">
                    <input id="address" placeholder="Address" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 field mb-4">
                    <input id="address2" placeholder="Apartment, suite, etc" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <input id="pc" placeholder="Postal Code" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <input id="city" placeholder="City" type="text" class="p-inputtext w-full">
                </div>
                <div class="col-12 lg:col-6 field mb-4">
                    <div class="flex align-items-center">
                        <Checkbox name="checkbox-3" v-model="checked3" :binary="true" class="text-900" id="checkbox-3"></Checkbox>
                        <label id="checkbox-3" class="text-900 ml-2">Save for next purchase</label>
                    </div>
                </div>
                <div class="col-12 flex flex-column lg:flex-row justify-content-center align-items-center lg:justify-content-end mt-6">
                    <Button class="p-button-text mt-3 lg:mt-0 w-full lg:w-auto lg:px-6 flex-order-2 lg:flex-order-1 lg:mr-4" label="Return to Cart"></Button>
                    <Button class="p-button-primary w-full lg:w-auto lg:px-6 flex-order-1 lg:flex-order-2" label="Continue to Shipping"></Button>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-6 px-4 py-8 md:px-6 lg:px-8 surface-50">
            <div class="border-bottom-1 pb-3 surface-border">
                <span class="text-900 font-medium text-xl">Your Cart</span>
            </div>
            <div class="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-2 mt-3 border-bottom-1 surface-border">
                <img src="images/blocks/ecommerce/checkoutform/checkoutform-1-2.png" class="w-8rem h-8rem flex-shrink-0 mb-3" />
                <div class="flex-auto lg:ml-3">
                    <div class="flex align-items-center justify-content-between mb-3">
                        <span class="text-900 font-medium">Product Name</span>
                        <span class="text-900 font-bold">$123.00</span>
                    </div>
                    <div class="text-600 text-sm mb-3">Black | Large</div>
                    <div class="flex flex-auto justify-content-between align-items-center">
                        <InputNumber :showButtons="true" buttonLayout="horizontal" spinnerMode="horizontal" :min="0" inputClass="w-2rem text-center py-2 px-1 border-transparent" v-model="quantities1[0]" 
                            class="border-1 surface-border border-round" decrementButtonClass="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonClass="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></InputNumber>
                        <Button icon="pi pi-trash" class="p-button-text p-button-rounded"></Button>
                    </div>
                </div>
            </div>
            <div class="py-2 mt-3 border-bottom-1 surface-border">
                <div class="p-inputgroup mb-3">
                    <InputText type="text" v-model="value4" placeholder="Promo code" class="w-full" />         
                    <Button label="Apply" :disabled="!value4"></Button>
                </div>
            </div>
            <div class="py-2 mt-3">
                <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900 font-medium">Subtotal</span>
                    <span class="text-900">$123.00</span>
                </div>
                <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900 font-medium">Shipping</span>
                    <span class="text-primary font-bold">Free</span>
                </div>
                <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900 font-bold">Total</span>
                    <span class="text-900 font-medium text-xl">$123.00</span>
                </div>
            </div>
            <div class="py-2 mt-3 bg-yellow-100 flex align-items-center justify-content-center">
                <img src="images/blocks/ecommerce/checkoutform/checkoutform-1-3.png" class="mr-2" alt="Country Flag"><span class="text-black-alpha-90 font-medium">No additional duties or taxes.</span>
            </div>
        </div>
    </div>
</div>`,
            block3: `
<div class="surface-50 px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-3xl mb-5">Your order is almost done</div>
    <div class="grid -mr-3 -ml-3">
        <div class="col-12 lg:col-9 p-3">
            <div class="px-0 py-4 lg:px-4 surface-card border-round shadow-2">
                <div class="flex">
                    <div class="flex flex-column align-items-center ml-3" style="width:2rem">
                        <span class="bg-green-500 text-0 flex align-items-center justify-content-center border-circle" style="min-width:3rem; min-height: 3rem">
                            <i class="pi pi-directions"></i>
                        </span>
                        <div class="h-full border-dashed border-1 border-green-500" style="min-height: 12rem"></div>
                    </div>
                    <div class="ml-0 lg:ml-5 p-2 flex-auto">
                        <div class="mb-3">
                            <span class="text-900 text-xl block ml-2">Address</span>
                        </div>
                        <div class="grid flex-column lg:flex-row">
                            <div class="col p-3">
                                <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150" @click="selectedAddress = address1" :class="{'border-primary': selectedAddress === address1}">
                                    <div class="flex justify-content-between mb-3">
                                        <span class="text-900 text-xl font-medium">Home</span>
                                        <span class="text-600 font-medium"><i class="pi pi-pencil mr-2"></i>Edit</span>
                                    </div>
                                    <span class="inline-block text-600 mb-3">Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands</span>
                                    <span class="inline-block text-600"><i class="pi pi-mobile mr-2"></i>+123456789</span>
                                </div>
                            </div>
                            <div class="col p-3">
                                <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150" @click="selectedAddress = address2" :class="{'border-primary': selectedAddress === address2}">
                                    <div class="flex justify-content-between mb-3">
                                        <span class="text-900 text-xl font-medium">Office</span>
                                        <span class="text-600 font-medium"><i class="pi pi-pencil mr-2"></i>Edit</span>
                                    </div>
                                    <span class="inline-block text-600 mb-3">Jacob Obrechtstraat 5, 1072 KC Amsterdam The Netherlands</span>
                                    <span class="inline-block text-600"><i class="pi pi-mobile mr-2"></i>+123456789</span>
                                </div>
                            </div>
                            <div class="col-12 lg:col-3 p-3">
                                <div class="flex h-full flex-column justify-content-center align-items-center text-center py-5 border-round border-1 surface-border surface-100 cursor-pointer hover:border-primary transition-duration-150">
                                    <span class="text-600 border-circle border-2 w-2rem h-2rem flex align-items-center justify-content-center"><i class="pi pi-fw pi-plus"></i></span>
                                    <span class="text-600 mt-3">Add New Address</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex flex-column align-items-center ml-3" style="width:2rem">
                        <span class="bg-green-500 text-0 flex align-items-center justify-content-center border-circle" style="min-width:3rem; min-height: 3rem">
                            <i class="pi pi-image"></i>
                        </span>
                        <div class="h-full border-dashed border-1 surface-border" style="min-height: 12rem"></div>
                    </div>
                    <div class="ml-0 lg:ml-5 p-2 flex-auto">
                        <div class="mb-3">
                            <span class="text-900 text-xl block ml-2">Cart</span>
                        </div>
                        <div class="p-2 flex flex-column lg:flex-row flex-wrap lg:align-items-center">
                            <img src="images/blocks/ecommerce/checkoutform/checkoutform-1-4.png" class="w-8rem h-8rem mb-3 lg:mb-0 flex-shrink-0" alt="product"/>
                            <div class="flex-auto lg:ml-3">
                                <div class="flex align-items-center justify-content-between mb-3">
                                    <span class="text-900 font-medium">Product Name</span>
                                    <span class="text-900 font-medium">$123.00</span>
                                </div>
                                <div class="text-600 text-sm mb-3">White</div>
                                <div class="flex flex-auto justify-content-between align-items-center">
                                    <InputNumber :showButtons="true" buttonLayout="horizontal" :min="0" inputClass="w-2rem text-center p-0 border-none surface-50" v-model="quantities1[0]" 
                                        class="border-none border-round" decrementButtonClass="surface-50 p-button-text text-600 hover:text-primary" incrementButtonClass="p-button-text surface-50 text-600 hover:text-primary py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></InputNumber>
                                    <span class="text-600 cursor-pointer"><i class="pi pi-trash mr-2"></i>Delete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex flex-column align-items-center ml-3" style="width:2rem">
                        <span class="bg-gray-300 text-0 flex align-items-center justify-content-center border-circle" style="min-width:3rem; min-height: 3rem">
                            <i class="pi pi-credit-card"></i>
                        </span>
                    </div>
                    <div class="ml-0 lg:ml-5 p-2 flex-auto">
                        <div class="mb-3">
                            <span class="text-900 text-xl block ml-2">Payment Method</span>
                        </div>
                        <div class="grid flex-column lg:flex-row">
                            <div class="col p-3">
                                <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150" @click="selectedCard = card1" :class="{'border-primary': selectedCard === card1}">
                                    <img src="images/blocks/ecommerce/checkoutform/checkoutform-1-5.png" class="w-6rem" alt="Visa">
                                    <span class="inline-block text-900 text-lg lg:text-xl mt-3">**** **** **** 1234</span>
                                    <div class="flex justify-content-between align-items-center mt-3">
                                        <span class="inline-block text-600 text-sm">Cardholder Name</span>
                                        <span class="inline-block text-600 text-sm text-right">Expiry Date</span>
                                    </div>
                                    <div class="flex justify-content-between align-items-center mt-3">
                                        <span class="inline-block text-900 font-bold">John  Warden</span>
                                        <span class="inline-block text-900 font-bold">12/25</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col p-3">
                                <div class="flex flex-column border-round border-1 surface-border p-4 cursor-pointer hover:border-primary transition-duration-150" @click="selectedCard = card2" :class="{'border-primary': selectedCard === card2}">
                                    <img src="images/blocks/ecommerce/checkoutform/checkoutform-1-5.png" class="w-6rem" alt="Visa">
                                    <span class="inline-block text-900 text-lg lg:text-xl mt-3">**** **** **** 1234</span>
                                    <div class="flex justify-content-between align-items-center mt-3">
                                        <span class="inline-block text-600 text-sm">Cardholder Name</span>
                                        <span class="inline-block text-600 text-sm text-right">Expiry Date</span>
                                    </div>
                                    <div class="flex justify-content-between align-items-center mt-3">
                                        <span class="inline-block text-900 font-bold">John  Warden</span>
                                        <span class="inline-block text-900 font-bold">12/25</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 lg:col-3 p-3">
                                <div class="flex h-full flex-column justify-content-center align-items-center py-5 border-round border-1 surface-border surface-100 cursor-pointer hover:border-primary transition-duration-150">
                                    <span class="text-600 border-circle border-2 w-2rem h-2rem flex align-items-center justify-content-center"><i class="pi pi-fw pi-plus"></i></span>
                                    <span class="text-600 mt-3 text-center">Add New Credit Card</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-3 p-3">
            <div class="surface-card p-4 border-round shadow-2">
                <div class="border-bottom-1 surface-border pb-4">
                    <span class="text-900 text-xl block">Order Summary</span>
                </div>
                <div class="border-bottom-1 surface-border my-3 py-2">
                    <div class="flex justify-content-between mb-3">
                        <span class="text-900">Price</span>
                        <span class="text-900">$123.00</span>
                    </div>
                    <div class="flex justify-content-between mb-3">
                        <span class="text-900">Delivery</span>
                        <span class="text-green-500">Free</span>
                    </div>
                    <div class="flex justify-content-between mb-3">
                        <span class="text-900">Discount</span>
                        <span class="text-900">$12.00</span>
                    </div>
                </div>
                <div class="border-bottom-1 surface-border my-3 py-2">
                    <div class="flex justify-content-between mb-3">
                        <span class="text-900 font-medium">Total</span>
                        <span class="text-900 font-bold">$111.00</span>
                    </div>
                </div>
                <Button class="surface-400 border-none hover:bg-primary w-full mt-3" :disabled="!selectedCard" label="Place Order"></Button>
            </div>
        </div>
    </div>
</div>`
        }
    }
}
</script>