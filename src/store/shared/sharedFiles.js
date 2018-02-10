import _map from 'lodash/map';
import _assign from 'lodash/assign';
import _head from 'lodash/head';
import _upperCase from 'lodash/upperCase';
import _concat from 'lodash/concat';
import * as types from './mutation-types'
import * as actions from './actions';

// initial state
const state = {
  tableData: [],
  tableFields: [],
  tableInfo: {},
  getTableDataMsg: '',
}

// getters
const getters = {
    data: state => state.tableData,
    fields: state => state.tableFields,
    info: state => state.tableInfo
}

// mutations
const mutations = {
  [types.RECEIVE_TABLE_DATA] (state, data, message) {
    const action = { key: 'actions', label: 'ACTIONS'};
    state.tableData = data;
    state.tableFields = _concat(_head(_map(data, obj => _map(Object.keys(obj), item => _assign({ key: item,
    label: _upperCase(item) })))), action);
    state.getTableDataMsg = message;
    state.tableInfo= { title: 'Account Search Results', actions: true };
  },
  [types.RESET_TABLE_DATA] (state) {
    state.tableData = [];
    state.tableFields = [];
    state.getTableDataMsg = '';
    state.tableInfo= {};
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
