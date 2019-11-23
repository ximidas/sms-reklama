<template>
    <div class="text-center">

        <a href="javascript: void(0);" @click="showModal = true" class="text-xs sm:text-base sm:mb-5 hover:text-ice-blue">
            <vue-odometer class="text-ice-blue hover:text-white text-2xl" :value="numbers" :format="'ddd ddd'"></vue-odometer>
        </a>
        <vue-tailwind-modal class="z-50" :showing="showModal" @close="showModal = false">
            <StatisticsModal></StatisticsModal>
        </vue-tailwind-modal>
    </div>
</template>

<script>
    import i18n_mixin from "./mixins/i18n_mixin";
    import VueTailwindModal from 'vue-tailwind-modal';
    import StatisticsModal from "./StatisticsModal";
    import VueOdometer from 'v-odometer/src'; //if not defined import Odometer from 'odometer' in node_modules/v-odometer/src/components/Vue-Odometer
    export default {
        props: ['current_locale'],
        mixins: [i18n_mixin],
        components: {StatisticsModal, VueTailwindModal, VueOdometer},
        data () {
            return {
                numbers: null,
                showModal: false,
            }
        },
        mounted() {
            this.$http.get('api/statistics').then(response => {
                this.numbers = response.data.numbers;
            }); }
    }
</script>

<style scoped>
    .modalOverlay {
        top: 0;
        left: 0;
        position: fixed;
    }
</style>