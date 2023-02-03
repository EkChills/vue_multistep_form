<template>
  <div class="absolute lg:static top-[6.1875rem]  flex flex-col space-y-[22px] py-[32px] px-[24px] bg-white left-[1rem] right-[1rem] lg rounded-lg">
    <div class="flex flex-col space-y-[9px] ">
      <h3 class="capitalize text-[1.5rem] text-[#022959] font-bold">Finishing up</h3>
      <p class="text-[1rem] max-w-[18rem] md:max-w-full text-[#9699AA]">Double-check everything looks OK before confirming.</p>
    </div>
    <!-- <TextInput :labelText="'name'" :placeHolderText="'e.g. Stephen King'" :id="'name'" :name="'name'" :value="name" />
    <TextInput :labelText="'email address'" :placeHolderText="'e.g. stephenking@lorem.com'" :id="'email'" :value="emailAddress" :name="'emailAddress'" />
    <TextInput :labelText="'phone number'" :placeHolderText="'e.g. +1 234 567 890'" :id="'phoneNo'" :value="phoneNo" :name="'phoneNo'" /> -->
    <div class="flex flex-col space-y-[12px] p-[1rem] bg-[#F8F9FF] rounded-lg">
      <div class="flex items-center justify-between">
        <div class="flex flex-col space-y-[5px]">
          <span class="text-[14px] font-semibold capitalize">{{ plan }} ({{ planPeriod ? 'yearly' : 'monthly' }})</span>
          <span class="text-[14px] text-[#9699AA] underline capitalize">change</span>
        </div>
        <span class="text-[14px] text-[#022959]">{{ getPlanPrice }}</span>
      </div>
      <hr>
      <div class="flex items-center justify-between">
        <span class="text-[#9699AA] text-[14px]">Online service</span>
        <span class="text-[14px] text-[#022959]">{{  }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed:{
    ...mapState('inputs', ['plan', 'planPeriod', 'addOnsState' ]),
   ...mapGetters('inputs', ['getPlanPrice']) 
  }
}
</script>

<style>

</style>