<template>
  <div
    class="absolute lg:static top-[6.1875rem] flex flex-col space-y-[22px] py-[32px] px-[24px] bg-white left-[1rem] right-[1rem] lg rounded-lg"
  >
    <div class="flex flex-col space-y-[9px]">
      <h3 class="text-[1.5rem] text-[#022959] font-bold">Pick add-ons</h3>
      <p class="text-[1rem] max-w-[18rem] md:max-w-full text-[#9699AA]">
        Add-ons help enhance your gaming experience.
      </p>
    </div>
    <!-- <TextInput :labelText="'name'" :placeHolderText="'e.g. Stephen King'" :id="'name'" :name="'name'" :value="name" />
    <TextInput :labelText="'email address'" :placeHolderText="'e.g. stephenking@lorem.com'" :id="'email'" :value="emailAddress" :name="'emailAddress'" />
    <TextInput :labelText="'phone number'" :placeHolderText="'e.g. +1 234 567 890'" :id="'phoneNo'" :value="phoneNo" :name="'phoneNo'" /> -->
    <div v-for="item,index in addOnsData" :key="index" :class="`flex items-center justify-between border ${addOnsState[item.name] ? 'border-[#483EFF]' : 'border-[#D6D9E6]'} rounded-lg p-[.9rem]`">
      <div class="flex items-center space-x-[1rem]">
        <div class="form-control">
          <label class="label cursor-pointer">
            <input
              type="checkbox"
              :checked="item.name === 'onlineService' ? addOnsState.onlineService : item.name === 'largerStorage' ? addOnsState.largerStorage : addOnsState.customizableProfile"
              class="checkbox checkbox-primary"
              :name="item.name"
              @change="handleInputChange"
            />
          </label>
        </div>
        <div class="flex flex-col space-y-[3px]">
          <h5 class="text-[14px] text-[#022959] font-semibold">{{ item.access }}</h5>
          <p class="text-[12px] text-[#9699AA]">{{ item.feature }}</p>
        </div>
      </div>
      <span class="text-[12px] text-[#483EFF]">{{ planPeriod ? item.periodCharges.yearly : item.periodCharges.monthly }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed:{
    ...mapState('inputs', ['addOnsData', 'addOnsState', 'planPeriod'])
  },
  methods:{
    handleInputChange(e, charges) {
      console.log(charges);
      const {name,value, type, checked} = e.target
      console.log(e);
      this.$store.commit('inputs/handleChange', {name, value, type, checked, charges})
    
  }
}}
</script>

<style></style>
