<template>
  <div class="absolute lg:static z-50 -bottom-0 p-[1rem] bg-white -left-0 -right-0 flex justify-between items-center">
    <span @click="prevStep" class="text-[14px] cursor-pointer select-none lg:hidden text-[#9699AA] capitalize">
      go back
    </span>
    <NextStepButton  :text="pageNo !== 4 ? 'next step' : 'confirm'" :color="pageNo !== 4 ? 'denim' : 'light-blue'" :onclick="pageNo !== 4 ? nextStep : confirmSubmit" />
  </div>
</template>

<script>
import NextStepButton from './buttons/NextStepButton.vue'
import { mapState } from 'vuex';

export default {
  components:{NextStepButton},
  methods:{
    nextStep() {
      this.$store.commit('inputs/nextStep', {operation:'next'})
    },
    prevStep() {
      this.$store.commit('inputs/nextStep', {operation:'prev'})
    },
    confirmSubmit() {
      this.$store.commit('inputs/confirmSubmit')
    }
  },
  computed:{
    ...mapState('inputs', ['pageNo'])
  }
}
</script>

<style>

</style>