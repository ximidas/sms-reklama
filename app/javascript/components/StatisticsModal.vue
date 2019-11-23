<template>
    <div class="modal-content py-4 text-center px-6">
        <!--Title-->
       <!-- <div class="flex justify-center items-center pb-3 text-black">
            <button @click="showCategories = !showCategories" class="modal-open px-8 rounded-full tracking-widest bg-ice-blue hover:bg-gray-800 text-gray-800 font-bold p-4 uppercase border-ice-blue hover:text-ice-blue hover:border-ice-blue border-t border-b border-r border-l">
                {{ t('categories') }}
            </button>
        </div>-->
        <div class="flex justify-center items-center pb-3 text-black">
            <button @click="showRegions = !showRegions" class="modal-open px-8 rounded-full tracking-widest bg-ice-blue hover:bg-gray-800 text-gray-800 font-bold p-4 uppercase border-ice-blue hover:text-ice-blue hover:border-ice-blue border-t border-b border-r border-l">
                {{ t('regions') }}
            </button>
        </div>

        <!--<transition name="fade">
            <div class="flex mb-4" v-if="showCategories">
                <div class="w-1/5 text-center h-12"><p class="text-ice-blue"> {{ t('category') }}:</p> <p class="text-black">111111</p></div>
                <div class="w-1/5 text-center h-12"><p class="text-ice-blue"> {{ t('category') }}:</p> <p class="text-black">111111</p></div>
                <div class="w-1/5 text-center h-12"><p class="text-ice-blue"> {{ t('category') }}:</p> <p class="text-black">111111</p></div>
                <div class="w-1/5 text-center h-12"><p class="text-ice-blue"> {{ t('category') }}:</p> <p class="text-black">111111</p></div>
                <div class="w-1/5 text-center h-12"><p class="text-ice-blue"> {{ t('category') }}:</p> <p class="text-black">111111</p></div>
            </div>
        </transition>-->

        <transition name="fade">
            <div v-if="showRegions">
                <div class="flex mb-4">
                    <div class="w-1/5 text-center h-12" v-for="(statistic, index) in statistics1()">
                        <p class="text-ice-blue">{{getRegionName(statistic[0].region)}}: </p>
                        <p class="text-black">{{statistic[0].count}}</p>
                    </div>
                </div>
                <div class="flex mb-4">
                    <div class="w-1/5 text-center h-12" v-for="(statistic, index) in statistics2()">
                        <p class="text-ice-blue">{{getRegionName(statistic[0].region)}}: </p>
                        <p class="text-black">{{statistic[0].count}}</p>
                    </div>
                </div>
                <div class="flex mb-4">
                    <div class="w-1/5 text-center h-12" v-for="(statistic, index) in statistics3()">
                        <p class="text-ice-blue">{{getRegionName(statistic[0].region)}}: </p>
                        <p class="text-black">{{statistic[0].count}}</p>
                    </div>
                </div>
                <div class="flex mb-4">
                    <div class="w-1/5 text-center h-12" v-for="(statistic, index) in statistics4()">
                        <p class="text-ice-blue">{{getRegionName(statistic[0].region)}}: </p>
                        <p class="text-black">{{statistic[0].count}}</p>
                    </div>
                </div>
                <div class="flex mb-4">
                    <div class="w-1/5 text-center h-12" v-for="(statistic, index) in statistics5()">
                        <p class="text-ice-blue">{{getRegionName(statistic[0].region)}}: </p>
                        <p class="text-black">{{statistic[0].count}}</p>
                    </div>
                </div>
                <div class="flex mb-4">
                    <div class="w-1/5 text-center h-12" v-for="(statistic, index) in statistics6()">
                        <p class="text-ice-blue">{{getRegionName(statistic[0].region)}}: </p>
                        <p class="text-black">{{statistic[0].count}}</p>
                    </div>
                </div>
                <div class="flex mb-4">
                    <div class="w-1/5 text-center h-12" v-for="(statistic, index) in statistics7()">
                        <p class="text-ice-blue">{{getRegionName(statistic[0].region)}}: </p>
                        <p class="text-black">{{statistic[0].count}}</p>
                    </div>
                </div>
            </div>


        </transition>
    </div>
</template>

<script>
    import i18n_mixin from "./mixins/i18n_mixin";
    export default {

        mixins: [i18n_mixin],
        data () {
            return {
                showCategories: false,
                showRegions: false,
                statistics: null,
            }
        },
        methods: {
            statistics1: function () {
                return this.statistics.slice(0, 5)
            },
            statistics2: function () {
                return this.statistics.slice(6, 11)
            },
            statistics3: function () {
                return this.statistics.slice(12, 17)
            },
            statistics4: function () {
                return this.statistics.slice(18, 23)
            },
            statistics5: function () {
                return this.statistics.slice(24, 29)
            },
            statistics6: function () {
                return this.statistics.slice(30, 35)
            },
            statistics7: function () {
                return this.statistics.slice(36, 41)
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
                if(region === 'Бричаны'){
                    return this.t('briceni')
                }
                if(region === 'Бендеры'){
                    return this.t('bender')
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
            }
        },
        mounted() {
            this.$http.get('api/statistics').then(response => {
                this.statistics = response.data.statistics;
            }); },
    }
</script>

<style scoped>
    .modal {
        transition: opacity 0.25s ease;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>