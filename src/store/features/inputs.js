import { plan } from "@/data";
import { addOns } from "@/data";

const initialInput = {
  name: "",
  emailAddress: "",
  inputError:{
    name:false,
    phoneNo:false,
    emailAddress:false,
  },
  phoneNo: "",
  plans: [...plan],
  plan: "",
  planPeriod:false,
  addOnsState:{
    onlineService:false,
    largerStorage:false,
    customizableProfile:false,
  },
  selectedAddOns:[],
  isConfirmed:false
};

export default {
  namespaced: true,
  state:{
    ...initialInput,
    pageNo: 1,
    tabs: [
      { page: 1, step: "step 1", pageTitle: "your info" },
      { page: 2, step: "step 2", pageTitle: "select plan" },
      { page: 3, step: "step 3", pageTitle: "add-ons" },
      { page: 4, step: "step 4", pageTitle: "summary" },
    ],
    addOnsData:[...addOns],
    planPrice:'',
    addOnPrice:{
      onlineService:0,
      largerStorage:0,
      customizableProfile:0
    },
    totalPayment:0
  },
  mutations:{
    
    nextStep(state, payload) {
            let nextPage = state.pageNo + 1
      let prevPage = state.pageNo - 1
      state.isConfirmed = false
      if(state.name === '') {
        state.inputError.name = true
        return
      }
      if(state.emailAddress === '') {
        state.inputError.emailAddress = true
        return
      }
      if(state.phoneNo === '') {
        state.inputError.phoneNo = true
        return
      }
      if(payload.operation === 'prev') {
        if(state.pageNo === 1) {
          return
        }
        state.pageNo = prevPage
      }

     if(state.pageNo > 1) {
      if(state.plan === '') {
        console.log('wasnt passed')
        return
      }
     }

      if(payload.operation === 'next') {
        if(state.pageNo === 4) {
          return
        }
        state.pageNo = nextPage
      }

      if(payload.operation === 'change') {
        state.pageNo = payload.page
      }

    
    
    },
    handleChange:(state, payload) => {
      const {name, value, type, checked} = payload
      if(name === 'onlineService' || name ===  'largerStorage'|| name === 'customizableProfile') {
        state.addOnsState[name] = checked
        return
      }
      state[name] = type === 'checkbox' ? checked : value
      
    },
    selectPlan:(state, payload) => {
      state.plan = payload.period
      state.planPrice = payload.charges
    },
    setAddOnPrice:(state, payload) => {
      state.addOnPrice[payload.name] = payload.charges
    },
    confirmSubmit:(state) => {
      state.isConfirmed = true
    },
    inputErrorCheck:(state) => {
      state.inputError = {
        name:false,
        emailAddress:false,
        phoneNo:false
      }
      if(state.name === '') {
        state.inputError.name = true
      }
      if(state.emailAddress === '') {
        state.inputError.emailAddress = true
      }
      if(state.phoneNo === '') {
        state.inputError.phoneNo = true
      }
    }
  },
  getters: {
    pageNo:(state) => {
      return state.pageNo
    },
    getPlanPrice:(state) => {
      return state.planPeriod ? state.planPrice.yearly : state.planPrice.monthly
    },
    getTotalPayment:(state, getters) => {
      const {onlineService, largerStorage, customizableProfile} = state.addOnPrice
      return +onlineService + Number(largerStorage) + Number(customizableProfile) + Number(getters.getPlanPrice)
    }
  },
};
