<template>
  <div class="flex flex-col space-y-1">
    <div class="flex items-center justify-between">
      <label :for="id" class="text-[14px] capitalize text-[#022959]">{{ labelText}}</label>
      <span v-if="inputError[name]" class="text-[14px] font-bold text-[#EE374A] capitalize">this field is required</span>
    </div>
    <input @blur="inputErrorCheck" @change="handleInputChange" :id="id" :name="name" type="text" :value="value" :class="`rounded-md border px-[1rem] py-[11px] ${inputError[name] ? 'border-[#EE374A]' : 'border-[#D6D9E6]'}  placeholder:text-[.9rem] font-semibold`" :placeholder="placeHolderText" >
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props:['labelText', 'placeHolderText', 'name', 'id', 'value'],
  methods:{
    handleInputChange(e) {
      const {name,value} = e.target
      this.$store.commit('inputs/handleChange', {name, value})
    },
    inputErrorCheck() {
      this.$store.commit('inputs/inputErrorCheck')
    }
  },
  computed:{
    ...mapState('inputs', ['inputError'])
  }
}
</script>

<style>

</style>