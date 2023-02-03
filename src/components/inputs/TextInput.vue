<template>
  <div class="flex flex-col space-y-1">
    <label :for="id" class="text-[14px] capitalize text-[#022959]">{{ labelText}}</label>
    <input @change="handleInputChange" :id="id" :name="name" type="text" :value="value" class="rounded-md border px-[1rem] py-[11px] border-[#D6D9E6] placeholder:text-[.9rem] font-semibold" :placeholder="placeHolderText" >
  </div>
</template>

<script>
export default {
  props:['labelText', 'placeHolderText', 'name', 'id', 'value'],
  methods:{
    handleInputChange(e) {
      const {name,value} = e.target
      this.$store.commit('inputs/handleChange', {name, value})
    }
  }
}
</script>

<style>

</style>