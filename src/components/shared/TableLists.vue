<template>
  <div class="full_container">
      <b-col col lg="11" class="container" v-show="fields.length !== 0 && data.length !== 0">
        <div class="my_title">
          <p>{{ info.title }}</p>
        </div>
          <b-table
             bordered
             :fields ="fields"
             :items="data">
                <template v-if="info.actions" slot="actions" slot-scope="row">
                  <b-button size="sm" class="btn btn-primary btn-xs mr-1" @click="handleClick(row.item, row.index, $event.target)">
                    {{buttonMsg}}
                  </b-button>
                </template>
          </b-table>
      </b-col>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttonMsg: 'View Account'
    }
  },
   methods: {
   handleClick(item, index, button) {
      this.$store.dispatch('viewAccountSearch', item.accountId);
    },
  },
  props: ['data', 'fields', 'info']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.full_container {
  width: calc(100% - 260px);
  position: relative;
}

.my_title p {
  text-transform: uppercase;
  font-size: 18px;
  border-bottom: 4px solid #46a694;
  display: inline-block;
}

table {
  background-image: linear-gradient(to bottom,#ececec 0,#dddddd 100%);
  font-weight: normal;
}


thead {
    font-weight: normal;
    border: 1px solid #d0d0d0;
}

.table-bordered {
  font-weight: normal;
  border: 1px solid #d0d0d0;
}

.my_title {
  margin: 40px 0 15px 0;
  margin-top: 10px;
}

.container {
  margin-left: 8px;
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