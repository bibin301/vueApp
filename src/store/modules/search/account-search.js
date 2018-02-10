import _map from 'lodash/map';
import * as types from '../../mutation-types/search/account-search';
import * as actions from '../../actions/search/account-search';

// initial state
const state = {
  createAccountMsg: '',
  createAccountErrMsg: '',
  cardProductsMsg: '',
  cardProductsErrMsg: '',
  currencyMsg: '',
  currencyErrMsg: '',
  currencies: [],
  cardProducts: [],
  modalInfo: {}
}

// getters
const getters = {
  createAccountSuccess: state => state.createAccountMsg,
  createAccountError: state => state.createAccountErrMsg,
  cardProducts: state => state.cardProducts,
  currencies: state => state.currencies,
  modalInfo: state => state.modalInfo
}


// mutations
const mutations = {
  [types.CREATE_ACCOUNT_SEARCH_SUCCESS] (state, message) {
    state.createAccountMsg = message;
  },
  [types.CREATE_ACCOUNT_SEARCH_ERROR] (state, errMessage) {
    state.createAccountErrMsg = errMessage;
  },
  [types.RECEIVE_CARD_PRODUCTS_SUCCESS] (state, data, message) {
    state.cardProductsMsg = message;
    const object={text: '---', value: ''};
    state.cardProducts = _map(data, obj => Object.assign({}, { text: obj.cardProgramName, value: obj.cardProgramCode }));
    state.cardProducts.unshift(object)
  },
  [types.RECEIVE_CARD_PRODUCTS_ERROR] (state, errMessage) {
    state.cardProductsErrMsg = errMessage;
  },
  [types.RECEIVE_CURRENCIES_SUCCESS] (state, data, message) {
    state.currencyMsg = message;
    const object={text: '---', value: ''};    
    state.currencies = _map(data, obj => Object.assign({}, { text: obj.defaultCurrencyCode, value: obj.currencyCode }));
    state.currencies.unshift(object);
  },
  [types.RECEIVE_CURRENCIES_ERROR] (state, errMessage) {
    state.currencyErrMsg = errMessage;
  },
  [types.SHOW_CALLER_VERIFICATION] (state, accountId) {
    state.modalInfo = {show: true };
  },
}

export default {
  state,
  actions,
  getters,
  mutations
}
