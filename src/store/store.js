import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    checkedDisputes: []
  },
  actions: {

  },
  getters: {
    getCheckDisputes() {
      return this.checkedDisputes;
    }
  },
  mutations: {

  }
});
