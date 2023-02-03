<template>
  <div @click="handlePlanSelect" :class="`flex space-x-3 cursor-pointer md:flex-col md:space-x-0 md:items-start md:space-y-[39px] items-center rounded-lg w-full border ${cardData.type === plan ? 'border-[#483EFF]' : 'border-[#D6D9E6]' }  p-4`">
    <img :src="cardData.icon" :alt="cardData.type">
    <div class="flex flex-col space-y-1">
      <h5 class="text-[16px] font-semibold text-[#022959]">{{ cardData.type }}</h5>
      <span class="text-[14px] text-[#9699AA]">${{ planPeriod ? `${cardData.periodCharges.yearly}/yr` : `${cardData.periodCharges.monthly}/mo` }}</span>
      <span v-if="planPeriod" class="text-[12px] text-[#022959]">{{ cardData.monthFree }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props:['cardData', 'planPeriod'],
  methods:{
    handlePlanSelect() {
      this.$store.commit('inputs/selectPlan', {period:this.cardData.type, charges:this.cardData.periodCharges})
    }
  },
  computed:{
    ...mapState('inputs', ['plan'])
  }
}
</script>

<style>

</style>