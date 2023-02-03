import { plan } from "@/data";
import { addOns } from "@/data";

const initialInput = {
  name: "",
  emailAddress: "",
  inputError:{
    name:false,
    phoneNo:false,
    email:false,
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
      onlineService:'',
      largerStorage:'',
      customizableProfile:''
    }
  },
  mutations:{
    nextStep(state, payload) {
      state.isConfirmed = false
      if(state.name === '') {
        state.inputError.name = true
        return
      }
      if(state.emailAddress === '') {
        state.inputError.email = true
        return
      }
      if(state.phoneNo === '') {
        state.inputError.phoneNo = true
        return
      }
      let nextPage = state.pageNo + 1
      let prevPage = state.pageNo - 1
      if(payload.operation === 'next') {
        if(state.pageNo === 4) {
          return
        }
        state.pageNo = nextPage
      }

      if(payload.operation === 'change') {
        state.pageNo = payload.page
      }

      if(payload.operation === 'prev') {
        if(state.pageNo === 1) {
          return
        }
        state.pageNo = prevPage
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
    }
  },
  getters: {
    pageNo:(state) => {
      return state.pageNo
    },
    getPlanPrice:(state) => {
      return state.planPeriod ? state.planPrice.yearly : state.planPrice.monthly
    }
  },
};
