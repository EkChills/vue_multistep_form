<template>
  <div class="absolute lg:static lg:items-start flex -top-3 -left-0 -right-0 side-background lg:w-[15rem] lg:px-[32px] lg:py-[40px]">
    <div class="mb-[3rem] flex items-center justify-center lg:justify-start space-x-4 mx-auto lg:mx-0 lg:space-x-0 lg:flex-col lg:items-start lg:space-y-[2rem] ">
      <div class="lg:flex  lg:space-x-4 lg:items-center" v-for=" tab,index in tabs" :key="tab.page">
        <span   @click="changePage({operation:'change', page:index+1})" :class="`border  ${pageNo === index + 1 ? 'border-none bg-[#BEE2FD] text-[#022959] ' : 'border-white text-white'} cursor-pointer flex justify-center items-center rounded-full w-[2.1rem] h-[2.1rem]` ">
        <p class="text-[14px] font-bold">
          {{ tab.page }}
        </p>
      
      </span>
      <div class="hidden lg:flex flex-col space-y-[4px]">
        <span class="uppercase text-[12px] text-[#ABBCFF]">{{ tab.step }}</span>
        <span class="text-white font-bold text-[14px]">{{ tab.pageTitle }}</span>
      </div>
      </div>
   
    </div>
  </div>
</template>

<script>
import {  mapState } from 'vuex';

export default {
  computed:{
    ...mapState('inputs', ['tabs', 'pageNo'])
  },
  methods:{
    // ...mapMutations('inputs', ['nextStep']),
    changePage(payload) {
      this.$store.commit('inputs/nextStep', payload)
    }
  }
}
</script>

<style scoped>
  .side-background {
    background-image: url('../assets/images/bg-sidebar-mobile.svg');
    min-height: 172px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  @media(min-width:768px) {
    .side-background {
      background-image: url('../assets/images/bg-sidebar-desktop.svg');
    }
  }

</style>