<template>
    <div class="full_container">
        <div class="heading">
            <i class="fa fa-user icon"></i> 
            {{message}}
        </div>
        <div class="form">
            <b-form>
                <div class="left-side-form">
                    <ul class= "list">
                        <li class="list-items">
                            <b-form-group label="UIN:" label-for="uin">
                                <b-form-input type="text"
                                              class="form-control input-sm"
                                              v-model="uin"
                                              name="uin"
                                              v-validate="'alpha_num|min:6|max:16'"
                                              :class="{'input': true, 'is-danger': errors.has('uin') }"
                                              placeholder="UIN">
                                </b-form-input>
                            </b-form-group>
                            <i v-show="errors.has('uin')" class="fa fa-warning"></i>
                            <span v-show="errors.has('uin')" class="help-error">
                                {{ errors.first('uin') }}
                            </span>
                        </li>
                        <li class="list-items">
                            <b-form-group label="ACCOUNT ID:" label-for="accountId">
                                <b-form-input type="text"
                                              v-model="accountId"
                                              class="form-control input-sm"
                                              name="accountId"
                                              v-validate="'alpha_num|min:1|max:35'"
                                              :class="{'input': true, 'is-danger': errors.has('accountId') }"
                                              placeholder="ACCOUNT ID">
                                </b-form-input>
                            </b-form-group>
                            <i v-show="errors.has('accountId')" class="fa fa-warning"></i>
                            <span v-show="errors.has('accountId')" class="help-error">
                                {{ errors.first('accountId') }}
                            </span>
                        </li>
                        <li class="list-items">
                            <b-form-group label="LAST NAME:" label-for="lastName">
                                <b-form-input type="text"
                                              v-model="lastName"
                                              class="form-control input-sm"
                                              name="lastName"
                                              v-validate="'alpha_num|min:1|max:20'"
                                              :class="{'input': true, 'is-danger': errors.has('lastName') }"
                                              placeholder="LAST NAME">
                                </b-form-input>
                            </b-form-group>
                            <i v-show="errors.has('lastName')" class="fa fa-warning"></i>
                            <span v-show="errors.has('lastName')" class="help-error">
                                {{ errors.first('lastName') }}
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="right-side-form">
                    <ul class= "list">
                        <li class="list-items">
                            <b-form-group label="DEFAULT CURRENCY:" label-for="defaultCurrency">
                                <b-form-select v-model="defaultCurrency"
                                                class="form-control input-sm"
                                               :class="{'input': true, 'is-danger': errors.has('defaultCurrency') }"
                                               name="defaultCurrency"
                                               :options="currencies">
                               </b-form-select>
                            </b-form-group>
                            <i v-show="errors.has('defaultCurrency')" class="fa fa-warning"></i>
                            <span v-show="errors.has('defaultCurrency')" class="help-error">
                                {{ errors.first('defaultCurrency') }}
                            </span>
                        </li>
                        <li class="list-items">
                            <b-form-group label="CARD PRODUCT:" label-for="cardProduct">
                                <b-form-select v-model="cardProduct"
                                                class="form-control input-sm"
                                               :class="{'input': true, 'is-danger': errors.has('cardProduct') }"
                                               name="cardProduct"
                                               :options="cardProducts">
                                </b-form-select>
                            </b-form-group>
                            <i v-show="errors.has('cardProduct')" class="fa fa-warning"></i>
                            <span v-show="errors.has('cardProduct')" class="help-error">
                                {{ errors.first('cardProduct') }}
                            </span>
                        </li>
                        <li class="list-items">
                            <b-form-group label="LAST 4 OF PAN:" label-for="lastPan">
                                <b-form-input type="text"
                                              v-model="lastPan"
                                              class="form-control input-sm"
                                              name="lastPan"
                                              v-validate="'numeric|max:4'"
                                              :class="{'input': true, 'is-danger': errors.has('lastPan') }"
                                              placeholder="LAST 4 OF PAN">
                                </b-form-input>
                            </b-form-group>
                            <i v-show="errors.has('lastPan')" class="fa fa-warning"></i>
                            <span v-show="errors.has('lastPan')" class="help-error">
                                {{ errors.first('lastPan') }}
                            </span>
                        </li>
                    </ul>
                </div>
                    <div style="float:right; margin-right: 30px; margin-bottom: 8px">
                        <b-button 
                                  @click.stop="handleSubmit"
                                  class="btn btn-primary btn-xs"
                                  style="margin-top: 15px;float: right;"
                                  variant="primary">
                            <i class="fa fa-search"></i>
                            {{ buttonMsg }}
                        </b-button>
                    </div>
                <b-col col lg="12">
                        <b-alert :show="dismissCountDown"
                                  v-if="errMsg !== ''"
                                  dismissible
                                  variant="danger"
                                  @dismissed="errMsg=''">
                                    {{ errMsg }}
                        </b-alert>
                    </b-col>
            </b-form>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import _filter from 'lodash/filter';
import _pick from 'lodash/pick';

export default {
  name: 'TopBar',
  data () {
    return {
      message: 'Account Search',
      dismissCountDown: 5,
      buttonMsg: 'SEARCH',
      uin: '',
      errMsg: '',
      accountId: '',
      lastName: '',
      defaultCurrency: '',
      cardProduct: '',
      lastPan: ''
    }
  },
  computed: {
      ...mapGetters({
    createAccountMsg: 'createAccountSuccess',
    createAccountErrMsg: 'createAccountError',
    currencies: 'currencies',
    cardProducts: 'cardProducts'
  })
  },
   methods: {
    handleSubmit(e) {
      e.preventDefault();
      const object = Object.assign({}, {
                uin: this.uin,
                accountId: this.accountId,
                lastName: this.lastName,
                defaultCurrency: this.defaultCurrency,
                cardProduct: this.cardProduct,
                lastPan: this.lastPan });
        const values= _filter(Object.values(_pick(object, ['uin', 'accountId', 'lastName', 'lastPan'])), obj => obj !== '');
        console.log(values)
        if (values.length > 0) {
            this.$store.dispatch('createAccountSearch', object)
        } else {
            this.errMsg = 'Please specify one of the search criteria, UIN/Account ID/LastName/Last 4 of PAN'
        }
    }
  },
  components: {
    },
   watch : {
        createAccountMsg:function(val) {
            if (val !== '')  { 
                this.uin= '';
                this.accountId= '';
                this.lastName= '';
                this.defaultCurrency='';
                this.cardProduct='';
                this.lastPan='';
                this.$validator.reset(); 
            };
        }
    },
    created() {
      this.$store.dispatch('fetchCurrencies');
      this.$store.dispatch('fetchCardProductData');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.full_container {
  display: block;
  background: #494949 none repeat scroll 0 0;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  height: 400px;
  width: 35%;
  float: left;
  min-height: calc(100vh - 20%);
  position: relative;
}

.form {
 width: 100%; 
 padding-top: 15px;   
}

.left-side-form {
width: 45%; 
float:left; 
margin-right: 15px; 
margin-left: 15px;
}

.alert-danger {
    color: #923838;
    background-color: #edcfcf;
    border-color: #ddb6b6;
}

.right-side-form {
width: 45%; 
float:left; 
margin-right: 15px;
}

.heading {
text-transform: uppercase;
font-size: 14px;
line-height: 22px;
padding: 9px 0;
background: #333333;
color: #ffffff;
padding-left: 15px;
margin-bottom: 5px;
}

.list {
    list-style-type: none; 
    padding-left: 0;
}

.list-items {
    font-size: 10px; 
    color: #49a694;
    margin-bottom: 12px;
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

.fa.fa-warning {
color: #EF4836;
font-size: 12px;
}

.form-group {
   margin-bottom: 2px;
}

.help-error {
color: #EF4836;
font-size: 12px;
}

.is-danger {
border: 1px solid #f00;
}

.icon {
  font-size: 18px;
}

select.form-control:not([size]):not([multiple]) {
    height: 30px;
}
</style>