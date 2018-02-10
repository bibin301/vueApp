import * as types from '../../mutation-types/sidebar';
import * as actions from '../../actions/sidebar';

// initial state
const state = {
  all: [],
  sideBarMsg: '',
  sideBarErrMsg: ''
}

// getters
const getters = {
  allSidebarItems: state => state.all
}


// mutations
const mutations = {
  [types.RECEIVE_SIDEBAR_ITEMS_SUCCESS] (state, data, message) {
    state.all = data;
    state.sideBarMsg = message;
  },
  [types.RECEIVE_SIDEBAR_ITEMS_ERROR] (state, errMessage) {
    state.sideBarErrMsg = errMessage;
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
