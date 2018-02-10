import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions/search/account-search';
import * as sharedActions from './shared/actions';
import sidebarItems from './modules/sidebar';
import shared from './shared/sharedFiles';
import search from './modules/search/account-search';
import createLogger from '../plugins/logger';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  actions,
  sharedActions,
  modules: {
    sidebarItems,
    search,
    shared
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

if (module.hot) {
  module.hot.accept([
    './actions/search/account-search',
    './modules/sidebar',
    './shared/actions',
    './modules/search/account-search',
    './shared/sharedFiles',
    '../plugins/logger'
  ], () => {
    store.hotUpdate({
      actions: require('./actions/search/account-search'),
      sidebarItems: require('./modules/sidebar'),
      search: require('./modules/search/account-search'),
      createLogger: require('../plugins/logger'),
      sharedActions: require('./shared/actions'),
      shared: require('./shared/sharedFiles')
    })
  })
}

export default store
