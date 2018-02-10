<template>
  <div>
    <div class="row">
      <div class="container">
        <h4>Review Disputes</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="btn-group" role="group">
          <button class="btn btn-success" @click="approveDisputes()"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>Approve</button>
          <button class="btn btn-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>Decline</button>
        </div>
        <p>Selected disputes ID: {{ selectedDisputes }}</p>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Chargeback Type</th>
              <th>Number of Chargebacks</th>
              <th>Total Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <app-dispute v-for="(dispute, index) in disputes"  :key='index' :dispute="dispute" :disputeId="dispute.id" v-model="selectedDisputes"></app-dispute>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import { serverBus } from '../../../main';
  import Dispute from './Dispute.vue';
  export default {
    components: {
      appDispute: Dispute
    },
    data() {
      return {
        selectedDisputes: [],
        disputes: [
          {
            id: 1,
            type: 'Transactions on expired card',
            numOfChargeBack: 2,
            amount: '175.00 USD'
          },
          {
            id: 2,
            type: 'Transactions on cancelled card	',
            numOfChargeBack: 1,
            amount: '1999.00 USD'
          }
        ]
      }
    },
    computed: {

    },
    methods: {
      approveDisputes() {
        console.log('approveDisputes()', this.selectedDisputes);
      }
    }
    /* ,created() {
      serverBus.$on('disputeSelected', (id) => {
          this.selectedDisputes.push(id);
          console.log('serverBus', this.selectedDisputes);
        });
    } */
  }
</script>

<style>

</style>
