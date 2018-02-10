import axios from 'axios';
import * as types from '../../mutation-types/sidebar';
import config from '../../../../config/server';

export const getAllSidebarItems = ({ commit }) => {
    axios.get(`${config.HOST}/sidebar`)
    .then(response => {
        if (response.status == 200) {
            commit(types.RECEIVE_SIDEBAR_ITEMS_SUCCESS, response.data, 'Side bar data received successfully')
        }
    })
    .catch(error =>{
        commit(types.RECEIVE_SIDEBAR_ITEMS_ERROR, 'Network Error');                 
    })
};