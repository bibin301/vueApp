import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';

// Compliance Section
import ReviewFlagAccounts from '../components/compliance/ReviewFlagAccounts.vue';
import ReviewSARFiling from '../components/compliance/ReviewSARFiling.vue';
import ReviewDisputes from '../components/compliance/disputes/DisputesList.vue';
import DisputeDetail from '../components/compliance/disputes/DisputeDetail.vue';
import AMSReport from '../components/compliance/AMSReport.vue';
import AccountSearch from '../components/search/AccountSearch.vue';

// e:\vue-2\src\components\Login.vue
import Main from '../components/Main.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Main
    }
    // {
    //   path: '/account-search',
    //   component: AccountSearch,
    // },
    // {
    //   path: '/review-flagged-accounts',
    //   component: ReviewFlagAccounts
    // },
    // {
    //   path: '/review-sar-filing',
    //   component: ReviewSARFiling
    // },
    // {
    //   path: '/review-disputes',
    //   component: ReviewDisputes
    // },
    // {
    //   path: '/review-disputes/:id',
    //   component: DisputeDetail,
    //   name: 'disputeDetail'
    // },
    // {
    //   path: '/ams-report',
    //   component: AMSReport
    // }
  ]
});
