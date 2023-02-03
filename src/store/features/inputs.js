import { plan } from "@/data";

const initialInput = {
  name: "",
  emailAddress: "",
  phoneNo: "",
  plans: [...plan],
  plan: "",
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
  },
  mutations:{
    nextStep(state, payload) {
      console.log('ran', payload);
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
      const {name, value} = payload
      state[name] = value
    }
  },
  getters: {
    pageNo:(state) => {
      return state.pageNo
    },
  },
};
