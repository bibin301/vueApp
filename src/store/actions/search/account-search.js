import axios from 'axios';
import * as types from '../../mutation-types/search/account-search';
import config from '../../../../config/server';
import { fetchTableData } from '../../shared/actions';

export const createAccountSearch = (store, values) => axios.post(`${config.HOST}/account-search`, values)
    .then(response => {
        if (response.status == 201) {
            fetchTableData(store, 'account-search-results');
            store.commit(types.CREATE_ACCOUNT_SEARCH_SUCCESS, 'Data Added Successfully');
            return response;
        }
    })


export const viewAccountSearch = ({ commit }, accountId) => {
    commit(types.SHOW_CALLER_VERIFICATION, accountId)    
}

export const fetchCardProductData = ({ commit }) => axios.get(`${config.HOST}/cardProducts`)
    .then(response => {
        if (response.status == 200) {
            commit(types.RECEIVE_CARD_PRODUCTS_SUCCESS, response.data, 'Card Products received successfully')
        }
    })


export const fetchCurrencies = ({ commit }) => axios.get(`${config.HOST}/currencies`)
    .then(response => {
        if (response.status == 200) {
            commit(types.RECEIVE_CURRENCIES_SUCCESS, response.data, 'Currencies received successfully')
        }
    })
