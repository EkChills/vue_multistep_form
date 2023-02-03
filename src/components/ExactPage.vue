<template>
  <PersonalInfo v-if="pageNo === 1 && isConfirmed === false" />
  <SelectPlan v-if="pageNo === 2 && isConfirmed === false" />
  <AddOns v-if="pageNo === 3 && isConfirmed === false"  />
  <FinishingUp v-if="pageNo === 4 && isConfirmed === false"  />
  <ThankYou v-if="isConfirmed" />
</template>

<script>
import AddOns from './tabs/AddOns.vue'
import PersonalInfo from './tabs/PersonalInfo.vue'
import FinishingUp from './tabs/FinishingUp.vue'
import SelectPlan from './tabs/SelectPlan.vue'
import ThankYou from './tabs/ThankYou.vue'
import { mapState } from 'vuex'


export default {
  components:{
    AddOns,
    PersonalInfo,
    FinishingUp,
    SelectPlan,
    ThankYou
  },  
  computed:{
    pageNo() {
      console.log(this.$store.getters['inputs/pageNo']);
      return this.$store.getters['inputs/pageNo']
    },
    ...mapState('inputs', ['isConfirmed'])
  },
}
</script>

<style>

</style>