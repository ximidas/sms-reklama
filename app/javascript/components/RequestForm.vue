<template>
    <div>
    <div class="modal-content py-4 text-left px-6" v-if="!order">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">{{ t('request') }}</p>
        </div>

        <form class="x-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-black text-sm font-bold mb-2">
                    {{ t('name') }}
                </label>
                <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" :placeholder="t('name')">
            </div>


            <div class="mb-4">
                <label class="block text-black text-sm font-bold mb-2">
                    {{ t('connection') }}
                </label>
                <input v-model="connection" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" :placeholder="t('connection')">
            </div>

            <div class="mb-4">
                <div class="inline-block relative w-64">
                    <vs-select
                            multiple
                            autocomplete
                            class="selectExample"
                            color="#00b8d6"
                            :label="t('choose_cities_or_city')"
                            v-model="select_cities"
                    >
                        <vs-select-item :key="index" :value="getRegionName(region)" :text="getRegionName(region)" v-for="(region,index) in regions" />
                    </vs-select>
                </div>
            </div>

            <div class="mb-4">
                <label class="block text-black text-sm font-bold mb-2">
                    {{ t('sms_quantity') }}
                </label>
                <input v-model.number="sms_quantity" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number">
            </div>
            <div class="mb-4 text-center">

                {{ t('price') }}: <span class="text-ice-blue font-bold" v-model.number="final_price">{{formatPrice((sms_quantity > 4999 && sms_quantity < 99999 ? 0.23 : (sms_quantity > 99999 ? 0.20 : 0.25)) * sms_quantity)}}</span>
                <span class="text-sm text-gray-500">{{ t('lei') }}</span>

            </div>
            <div class="mb-4">
                <label class="block text-black text-sm font-bold mb-2">
                    {{ t('business_describe') }}
                </label>
            <textarea class="w-full shadow-inner bg-gray-100 p-4 border-1" v-model="business_description" :placeholder="t('business_describe_example')" rows="1"></textarea>
            </div>
            <div class="mb-4">
                <label class="block text-black text-sm font-bold mb-2">
                    {{ t('target_audience_describe') }}
                </label>
                <textarea class="w-full shadow-inner bg-gray-100 p-4 border-1" v-model="target_audience" :placeholder="t('target_audience_describe_example')" rows="3"></textarea>
            </div>
            <div class="flex justify-end pt-2">
                <a href="#" class="modal-close px-4 p-3 text-ice-blue hover:text-grey-700">{{ t('close') }}</a>
                <a href="javascript:void(0)" @click="saveOrderRequest()" class="px-4 bg-ice-blue p-3 rounded-full text-white hover:bg-gray-100 hover:text-ice-blue hover:border-ice-blue border-t border-b border-r border-l mr-2">{{ t('send') }}</a>
            </div>
        </form>

    </div>

    <div class="modal-content py-4 text-left px-6" v-if="order">
        <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">{{ t('request_succes') }}</p>
        </div>
    </div>
    </div>
</template>

<script>
    import 'vuesax/dist/vuesax.css'
    import 'material-icons/iconfont/material-icons.css';
    import i18n_mixin from "./mixins/i18n_mixin";
    export default {
        props: ['sms_quantity'],
        mixins: [i18n_mixin],
        data () {
            return {
                regions: null,
                select_cities:[],
                name: null,
                connection: null,
                final_price: null,
                business_description: null,
                target_audience: null,
                order: false,
            }
        },
        mounted() {
            this.$http.get('api/statistics').then(response => {
                this.regions = response.data.regions;
            }); },

        methods: {
            saveOrderRequest() {
                this.$http.post('api/save_order_request', {
                    name: this.name,
                    connection: this.connection,
                    cities: this.select_cities,
                    sms_quantity: this.sms_quantity,
                    price: this.final_price,
                    business_description: this.business_description,
                    target_audience: this.target_audience,
                    type: 'b2c'
                }).then(response => {
                    response.status === 200 ? this.order = true : this.order = false
                });
            },
            getRegionName(region) {
                if(region === 'Кишинёв'){
                    return this.t('chisinau')
                }
                if(region === 'Бельцы'){
                    return this.t('balti')
                }
                if(region === 'Оргеев'){
                    return this.t('orhei')
                }
                if(region === 'Унгены'){
                    return this.t('ungheni')
                }
                if(region === 'Единцы'){
                    return this.t('edinet')
                }
                if(region === 'Дубоссары'){
                    return this.t('dubasari')
                }
                if(region === 'Бессарабка'){
                    return this.t('beasarabca')
                }
                if(region === 'Бендеры'){
                    return this.t('bender')
                }
                if(region === 'Бричаны'){
                    return this.t('briceni')
                }
                if(region === 'Вулканешты'){
                    return this.t('vulcanesti')
                }
                if(region === 'Гагаузия'){
                    return this.t('gagauzia')
                }
                if(region === 'Глодяны'){
                    return this.t('glodean')
                }
                if(region === 'Григориополь'){
                    return this.t('grigoriopol')
                }
                if(region === 'Днестровск'){
                    return this.t('dnestrovsk')
                }
                if(region === 'Дондюшаны'){
                    return this.t('donduseni')
                }
                if(region === 'Дрокия'){
                    return this.t('drochia')
                }
                if(region === 'Кагул'){
                    return this.t('cahul')
                }
                if(region === 'Калараш'){
                    return this.t('calaras')
                }
                if(region === 'Каменка'){
                    return this.t('camenca')
                }
                if(region === 'Кантемир'){
                    return this.t('cantemir')
                }
                if(region === 'Каушаны'){
                    return this.t('causeni')
                }
                if(region === 'Дондюшаны'){
                    return this.t('donduseni')
                }
                if(region === 'Комрат'){
                    return this.t('comrat')
                }
                if(region === 'Криуляны'){
                    return this.t('criuleni')
                }
                if(region === 'Леова'){
                    return this.t('leova')
                }
                if(region === 'Ниспорены'){
                    return this.t('nisporeni')
                }
                if(region === 'Новые Анены'){
                    return this.t('anenii_noi')
                }
                if(region === 'Окница'){
                    return this.t('ocnita')
                }
                if(region === 'Резина'){
                    return this.t('rezina')
                }
                if(region === 'Рыбница'){
                    return this.t('ribnita')
                }
                if(region === 'Рышканы'){
                    return this.t('riscani')
                }
                if(region === 'Слободзея'){
                    return this.t('slobozeia')
                }
                if(region === 'Страшены'){
                    return this.t('straseni')
                }
                if(region === 'Сынджерей'){
                    return this.t('singerei')
                }
                if(region === 'Тараклия'){
                    return this.t('taraklia')
                }
                if(region === 'Теленешты'){
                    return this.t('telenesti')
                }
                if(region === 'Тирасполь'){
                    return this.t('tiraspol')
                }
                if(region === 'Теленешты'){
                    return this.t('telenesti')
                }
                if(region === 'Унгены'){
                    return this.t('ungheni')
                }
                if(region === 'Фалешты'){
                    return this.t('falesti')
                }
                if(region === 'Флорешты'){
                    return this.t('floresti')
                }
                if(region === 'Хынчешты'){
                    return this.t('hincesti')
                }
                if(region === 'Чадыр-Лунга'){
                    return this.t('ceadir_lunga')
                }
                if(region === 'Чимишлия'){
                    return this.t('cimislia')
                }
                if(region === 'Шолданешты'){
                    return this.t('soldanesti')
                }
                if(region === 'Штефан-Водэ'){
                    return this.t('stefan_voda')
                }
                if(region === 'Яловены'){
                    return this.t('ialoveni')
                }
                else{
                    return region
                }
            },
            formatPrice(value) {
                this.final_price = value;
                let val = (value/1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            },
        }
    }
</script>

<style scoped>
    .modal {
        transition: opacity 0.25s ease;
    }
</style>