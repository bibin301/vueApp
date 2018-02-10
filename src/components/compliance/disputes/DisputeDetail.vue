<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h4>REVIEW DISPUTED TRANSACTIONS ON EXPIRED CARDS</h4>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="btn-group" role="group">
          <button class="btn btn-success" @click="approveDisputeTransaction()"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>Approve</button>
          <button class="btn btn-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>Decline</button>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Track Number</th>
              <th>Account ID</th>
              <th>UIN</th>
              <th>Settlement Date</th>
              <th>Settlement Amount</th>
              <th>Chargeback Amount</th>
              <th>Merchant</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactions">
              <td><input type="checkbox" name="selectedTransactions" :id="transaction.id" :value="transaction.id" v-model="checkedTransactions"></td>
              <td>{{ transaction.trackNumber }}</td>
              <td>{{ transaction.accountID }}</td>
              <td>{{ transaction.uin }}</td>
              <td>{{ transaction.settlementDate }}</td>
              <td>{{ transaction.amount }}</td>
              <td>{{ transaction.chargebackAmount }}</td>
              <td>{{ transaction.merchant }}</td>
              <td>{{ transaction.status }}</td>
            </tr>
          </tbody>
        </table>
        <p>Current Dispute ID: {{ $route.params.id }}</p>
        <hr>
        <p>Selected Transactions: {{ checkedTransactions }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkedTransactions: [],
        transactions: [
          {
            id: 1,
            trackNumber: '123450',
            accountID: 'ACCOUNT3242356HHFAL01',
            uin: '22344788211',
            settlementDate:	'2016-09-22 12:55:07 UTC-5',
            amount: '100.00 USD',
            chargebackAmount:	'85.00 USD',
            merchant: 'McDonald\'s Washington D.C.',
            status: 'Pending'
          },
          {
            id: 2,
            trackNumber: '657844',
            accountID: 'ACCOUNT9835464FAKH02',
            uin: '74898712321',
            settlementDate:	'2016-11-09 12:55:07 UTC-5',
            amount: '99.00 USD',
            chargebackAmount:	'90.00 USD',
            merchant: 'Trump International Hotel Washington, D.C.',
            status: 'Pending'
          }
        ]
      }
    },
    computed: {

    },
    methods: {
      approveDisputeTransaction() {
        console.log('approveDisputeTransaction', this.checkedTransactions);
      }
    }
  }
</script>

<style>

</style>

