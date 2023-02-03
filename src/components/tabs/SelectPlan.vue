<template>
  <div
    class="absolute lg:static top-[6.1875rem] flex flex-col space-y-[22px] py-[32px] px-[24px] bg-white left-[1rem] right-[1rem] lg rounded-lg"
  >
    <div class="flex flex-col space-y-[9px]">
      <h3 class="capitalize text-[1.5rem] text-[#022959] font-bold">
        Select your plan
      </h3>
      <p class="text-[1rem] max-w-[18rem] md:max-w-full text-[#9699AA]">
        You have the option of monthly or yearly billing.
      </p>
    </div>
    <!-- <TextInput :labelText="'name'" :placeHolderText="'e.g. Stephen King'" :id="'name'" :name="'name'" :value="name" />
    <TextInput :labelText="'email address'" :placeHolderText="'e.g. stephenking@lorem.com'" :id="'email'" :value="emailAddress" :name="'emailAddress'" />
    <TextInput :labelText="'phone number'" :placeHolderText="'e.g. +1 234 567 890'" :id="'phoneNo'" :value="phoneNo" :name="'phoneNo'" /> -->
    <div
      class="flex flex-col md:flex-row md:items-center md:space-x-[18px] space-y-[12px]"
    >
      <PlansCard v-for="card in plans" :key="card" :cardData="{ ...card }" />
    </div>
    <div class="flex space-x-[1rem] items-center bg-[#F8F9FF] rounded-lg justify-center py-[13px]">
      <span :class="`text-[14px] font-semibold capitalize`">monthly</span>
      <input type="checkbox" class="toggle toggle-md" checked />
      <span :class="`text-[14px] font-semibold capitalize`">yearly</span>
    </div>
  </div>
</template>

<script>
import PlansCard from "../cards/PlansCards.vue";
import { mapState } from "vuex";

export default {
  components: { PlansCard },
  computed: {
    ...mapState("inputs", ["plans"]),
  },
};
</script>

<style></style>
