import { createStore } from 'vuex'
const store = createStore({
  state:{
    selectedTeeth: ''
  },
  mutations: {
    SelectedTeeth: (state, teeth) => {
      console.log(teeth);
      state.selectedTeeth = teeth;
    }
  },
  actions: {
    selectedTeeth({ commit }, id) {
        commit("SelectedTeeth", id);
    }
  }  
});
export default store