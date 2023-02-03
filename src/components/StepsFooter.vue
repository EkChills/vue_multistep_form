<template>
  <div class="absolute lg:static -bottom-0 p-[1rem] bg-white -left-0 -right-0 flex justify-between items-center">
    <span @click="prevStep" class="text-[14px] cursor-pointer select-none lg:hidden text-[#9699AA] capitalize">
      go back
    </span>
    <NextStepButton  :text="'next step'" :color="'denim'" :onclick="nextStep" />
  </div>
</template>

<script>
import NextStepButton from './buttons/NextStepButton.vue'
// import { mapMutations } from 'vuex';

export default {
  components:{NextStepButton},
  methods:{
    nextStep() {
      this.$store.commit('inputs/nextStep', {operation:'next'})
    },
    prevStep() {
      this.$store.commit('inputs/nextStep', {operation:'prev'})
    }
  }
}
</script>

<style>

</style>