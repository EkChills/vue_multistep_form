<template>
  <div class="flex space-x-3 md:flex-col md:space-x-0 md:items-start space-y-[39px] items-center rounded-lg w-full border border-[#D6D9E6] p-4">
    <img :src="cardData.icon" :alt="cardData.type">
    <div class="flex flex-col space-y-1">
      <h5 class="text-[16px] font-semibold text-[#022959]">{{ cardData.type }}</h5>
      <span class="text-[14px] text-[#9699AA]">{{ cardData.periodCharges.monthly }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['cardData']
}
</script>

<style>

</style>