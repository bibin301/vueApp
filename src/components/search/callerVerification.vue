<template>
<div>
  <b-modal v-model="modalShow" centered>
    <div class="my_title">
          <p>{{ message }}</p>
    </div>
    <p class="my-4">Vertically centered modal!</p>
  </b-modal>
</div>
</template>
import { mapGetters, mapActions } from 'vuex';

<script>
export default {
  props: ['modalShow'],
  data () {
    return {
      message: 'Caller Verification'
    }
  },
   methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.my_title p {
  text-transform: uppercase;
  font-size: 18px;
  border-bottom: 4px solid #46a694;
  display: inline-block;
}

.my_title {
  margin: 40px 0 15px 0;
  margin-top: 10px;
}

.btn-primary {
  border-radius: 3px;
  background-image: linear-gradient(to bottom,#009688 0,#007a6c 100%);
  background-repeat: repeat-x;
  border: 0 solid;
}

.btn-xs {
  font-size: 12px;
  padding: 3px 10px;
}
</style>