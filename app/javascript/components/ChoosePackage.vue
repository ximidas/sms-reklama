<template>
    <div class="bg-gray-300 w-full">

        <form class="flex xl:hidden p-2 w-full justify-center pb-16">
            <button class="modal-open px-8 rounded-full bg-ice-blue hover:bg-gray-800 text-gray-800 font-bold p-4 uppercase border-ice-blue hover:text-ice-blue hover:border-ice-blue border-t border-b border-r border-l">ОСТАВИТЬ ЗАЯВКУ</button>
        </form>
        <div v-if="showModal1 || showModal2 || showModal3" class="modalOverlay w-full h-full bg-gray-900 opacity-50 z-10"></div>
        <div class="container bg-gray max-w-full mx-auto pt-4">
            <h1 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">
                {{t('pricing')}}
            </h1>
            <p class="text-center text-lg text-gray-700 mt-2 px-6">
                {{t('pricing_sub1')}}
            </p>
            <div class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

            <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
                <div class="relative block flex flex-col md:flex-row items-center">
                    <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
                        <div class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                            <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                                <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                                    100 - 4,999 SMS
                                </h1>
                                <h2 class="text-sm text-gray-500 text-center pb-6"><span class="ml-8 text-3xl font-bold text-ice-blue">0,25</span> {{t('lei')}} / 1 sms</h2>
                                <p class="text-center">{{t('test_package')}}. <br>{{t('on_convertion')}} 1%, {{t('client_price')}} 25 {{t('lei')}}.</p>
                            </div>

                            <div class="flex flex-wrap mt-3 px-6">
                                <ul>
                                    <li class="flex items-center">
                                        <div class=" rounded-full p-2 fill-current text-ice-blue">
                                            <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-md ml-3">{{t('ads_text')}}</span
                                        >
                                    </li>
                                    <li class="flex items-center">
                                        <div
                                                class=" rounded-full p-2 fill-current text-ice-blue"
                                        >
                                            <svg
                                                    class="w-6 h-6 align-middle"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                            >
                                                <path
                                                        d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                ></path>
                                                <polyline
                                                        points="22 4 12 14.01 9 11.01"
                                                ></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-md ml-3"
                                        >{{t('convertion_from')}} ~ <b>1%</b> {{t('up_to')}} <b>3%</b></span
                                        >
                                    </li>

                                </ul>
                            </div>
                            <div class="block flex items-center p-8  uppercase">
                            <button @click="showModal1 = true" class="mt-3 text-lg uppercase font-semibold
	bg-black w-full text-white rounded-lg
	px-6 py-3 block shadow-xl hover:bg-gray-700">
                                {{t('select')}}

                            </button>

                        </div>
                        </div>
                    </div>
                    <vue-tailwind-modal class="z-50" :showing="showModal1" @close="showModal1 = false">

                        <RequestForm :sms_quantity="100"></RequestForm>
                    </vue-tailwind-modal>
                    <div class="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
                        <div class="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
                            {{t('most_popular')}}
                        </div>
                        <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                            <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                                5,000 - 99,999 SMS
                            </h1>
                            <h2 class="text-sm text-gray-500 text-center pb-6"><span class="text-3xl text-ice-blue ml-8 font-bold">0,23</span> {{t('lei')}} / 1 sms</h2>
                            <p class="text-center">{{t('package2')}}. <br>{{t('on_convertion')}} 3%, {{t('client_price')}} 10 {{t('lei')}}.</p>
                        </div>
                        <div class="flex pl-12 justify-start sm:justify-start mt-3">
                            <ul>
                                <li class="flex items-center">
                                    <div class="rounded-full p-2 fill-current text-ice-blue">
                                        <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-md ml-3">{{t('ads_text1')}}</span>
                                </li>
                                <li class="flex items-center">
                                    <div class=" rounded-full p-2 fill-current text-ice-blue">
                                        <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-md ml-3">{{t('convertion_from')}} ~ <b>3%</b> {{t('up_to')}} <b>5%</b></span>
                                </li>
                            </ul>
                        </div>

                        <div class="block flex items-center p-8  uppercase">
                            <button @click="showModal2 = true" class="mt-3 text-lg font-semibold
	bg-black w-full text-white rounded-lg
	px-6 py-3 block shadow-xl hover:bg-gray-700">
                                {{t('select')}}

                            </button>
                            <vue-tailwind-modal :showing="showModal2" @close="showModal2 = false">

                               <RequestForm :sms_quantity="10000"></RequestForm>
                            </vue-tailwind-modal>

                        </div>
                    </div>
                    <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                        <div class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                            <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                                <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                                    100,000 - 1,000,000 SMS
                                </h1>
                                <h2 class="text-sm text-gray-500 text-center ml-8 pb-6"><span class="text-3xl text-ice-blue font-bold">0,20</span> {{t('lei')}} / 1 sms</h2>
                                <p class="text-center">{{t('package3')}}! <br>{{t('on_convertion')}} 5%, {{t('client_price')}} 4 {{current_locale === 'ru' ? t('leu') : t('lei')}}.</p>
                            </div>
                            <div class="flex flex-wrap mt-3 px-6">
                                <ul>
                                    <li class="flex items-center">
                                        <div class=" rounded-full p-2 fill-current text-ice-blue">
                                            <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-md ml-3">{{t('ads_text2')}}</span>
                                    </li>
                                    <li class="flex items-center">
                                        <div
                                                class=" rounded-full p-2 fill-current text-ice-blue"
                                        >
                                            <svg
                                                    class="w-6 h-6 align-middle"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                            >
                                                <path
                                                        d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                ></path>
                                                <polyline
                                                        points="22 4 12 14.01 9 11.01"
                                                ></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-md ml-3"
                                        >{{t('convertion_from')}} ~ <b>5%</b> {{t('up_to')}} <b>7%</b></span
                                        >
                                    </li>
                                </ul>
                            </div>

                            <div class="block flex items-center p-8  uppercase">
                                <button @click="showModal3 = true" class="mt-3 text-lg font-semibold
	bg-black w-full text-white rounded-lg
	px-6 py-3 block shadow-xl hover:bg-gray-700">
                                    {{t('select')}}

                                </button>

                            </div>
                        </div>
                    </div>
                    <vue-tailwind-modal class="z-50" :showing="showModal3" @close="showModal3 = false">

                        <RequestForm :sms_quantity="100000"></RequestForm>
                    </vue-tailwind-modal>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
    import i18n_mixin from "./mixins/i18n_mixin";
    import VueTailwindModal from 'vue-tailwind-modal'
    import RequestForm from "./RequestForm";
    export default {
        props: ['current_locale'],
        components: {
            VueTailwindModal,
            RequestForm,
        },
        mixins: [i18n_mixin],
        data () {
            return {
                showModal1: false,
                showModal2: false,
                showModal3: false,
            }
        },
    }
</script>

<style scoped>

    .modalOverlay {
        top: 0;
        left: 0;
        position: fixed;
    }
</style>