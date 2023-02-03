<template>
  <div class="absolute lg:static top-[6.1875rem]  flex flex-col space-y-[22px] py-[32px] px-[24px] bg-white left-[1rem] right-[1rem] lg rounded-lg">
    <div class="flex flex-col space-y-[9px] ">
      <h3 class="capitalize text-[1.5rem] text-[#022959] font-bold">personal info</h3>
      <p class="text-[1rem] max-w-[15rem] md:max-w-full text-[#9699AA]">Please provide your name, email address, and phone number.</p>
    </div>
    <TextInput :labelText="'name'" :placeHolderText="'e.g. Stephen King'" :id="'name'" :name="'name'" :value="name" />
    <TextInput :labelText="'email address'" :placeHolderText="'e.g. stephenking@lorem.com'" :id="'email'" :value="emailAddress" :name="'emailAddress'" />
    <TextInput :labelText="'phone number'" :placeHolderText="'e.g. +1 234 567 890'" :id="'phoneNo'" :value="phoneNo" :name="'phoneNo'" />
  </div>
</template>

<script>
import TextInput from '../inputs/TextInput.vue'
import { mapState } from 'vuex';

export default {
  components:{
    TextInput
  },
  computed:{
    ...mapState('inputs', ['name', 'emailAddress', 'phoneNo'])
  }
}
</script>

<style>

</style>