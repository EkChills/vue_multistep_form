<template>
  <PersonalInfo v-if="pageNo === 1" />
  <SelectPlan v-if="pageNo === 2" />
  <AddOns v-if="pageNo === 3"  />
  <FinishingUp v-if="pageNo === 4"  />
</template>

<script>
import AddOns from './tabs/AddOns.vue'
import PersonalInfo from './tabs/PersonalInfo.vue'
import FinishingUp from './tabs/FinishingUp.vue'
import SelectPlan from './tabs/SelectPlan.vue'


export default {
  components:{
    AddOns,
    PersonalInfo,
    FinishingUp,
    SelectPlan
  },  
  computed:{
    pageNo() {
      console.log(this.$store.getters['inputs/pageNo']);
      return this.$store.getters['inputs/pageNo']
    }
  },
}
</script>

<style>

</style>