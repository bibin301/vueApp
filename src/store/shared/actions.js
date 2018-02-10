import axios from 'axios';
import * as types from './mutation-types';
import config from '../../../config/server';

export const fetchTableData = ({ commit }, path) => {
    axios.get(`${config.HOST}/${path}`)
    .then(response => {
        if (response.status == 200) {
            commit(types.RECEIVE_TABLE_DATA, response.data, 'Table data received successfully')
        }
    })
};

export const resetTableData = ({ commit }, path) => {
    commit(types.RESET_TABLE_DATA);    
};