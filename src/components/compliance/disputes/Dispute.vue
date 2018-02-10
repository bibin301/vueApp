<template>
  <tr>
    <td><input type="checkbox" name="selectedDisputes" :value="disputeId" v-model="checked" @change="onChange"></td>
    <td>{{ dispute.type }}</td>
    <td>{{ dispute.numOfChargeBack }}</td>
    <td>{{ dispute.amount }}</td>
    <td><router-link tag="button" :to="{ name: 'disputeDetail', params: { id: dispute.id }}" class="btn btn-primary">View Disputes</router-link></td>
  </tr>
</template>

<script>
import { serverBus } from '../../../main';
export default {
  props: ['value', 'disputeId', 'dispute'],
  data() {
    return {
      checkedDispute: ''
    }
  },
  computed: {
	  checked: {
      get () {
        // console.log('get', this.value);
        return this.value;
      },
      set (disputeId) {
        // console.log('set', disputeId);
        this.checkedDispute = disputeId;
      }
    }
  },
  methods: {
    onChange: function(e) {
      this.$emit('input', this.checkedDispute);
    },
    disputeSelected(id, event) {
      console.log(id, this.checkedDisputes);
      serverBus.$emit('disputeSelected', id);
    }
  }
}
</script>

<style>

</style>
