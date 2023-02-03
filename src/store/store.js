import { createStore } from "vuex";
import inputs from "./features/inputs";

const store = createStore({
  modules:{
    inputs:inputs
  }
})

export default store