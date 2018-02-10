
<template>
  <div class="foot-container">
    <!-- <div class="sub-footer">
        <b-container class="bv-example-row"> -->
    <!-- <b-row>
            <b-col cols="1">Home</b-col>
            <b-col cols="1">Login</b-col>
            <b-col cols="1">Contact Us</b-col>
            <b-col cols="1">About Us</b-col>
            <b-col cols="2">Terms and Conditions</b-col>
            <b-col cols="2">Privacy Policy</b-col>
            <b-col cols="2">Data Protection Policy</b-col>
            <b-col cols="1">More</b-col>
          </b-row> -->
    <div class="">
      <ul class="container footer-links">
        <li><a href="/" target="_self">Home</a></li>
        <li><a href="/" target="_self">Login</a></li>
        <li><a href="/contact-us/" target="_self">Contact Us</a></li>
        <li><a href="/about-us/" target="_self">About Us</a></li>
        <li id="terms_and_conditions"><a class="no-wait" href="javascript:void(0);" target="_self">Terms and Conditions</a></li>
        <li><a class="no-wait" href="/static/pdf/Privacy Policy.pdf" target="_blank">Privacy Policy</a></li>
        <li><a class="no-wait" href="/static/pdf/Data protection policy.pdf" target="_blank">Data Protection Policy</a></li>
        <li><a class="expand no-wait" v-on:click="isShow = !isShow">More</a></li>
        <br>
        <div class="product-links" style="visibility: hidden;">
          <li><a class="no-wait" href="https://www.t24blackcard.com/terms-and-conditions/" target="_blank">T24 BlackCard</a></li>
          <li><a class="no-wait" href="https://www.t24payvault.com/terms-and-conditions/" target="_blank">T24 PayVault</a></li>
          <li><a class="no-wait" href="https://www.t24blackshield.com/terms-and-conditions/" target="_blank">T24 BlackShield</a></li>
        </div>
      </ul>
      <hr style="border-top: 1px solid rgba(204, 204, 204, 0.3);">
      <div class="container   foot-copy">
        PSI-Pay Ltd is authorised and regulated by the Financial Conduct Authority (FCA) under the Electronic Money Regulations 2011 (FCA register number 900011) for the issuing of electronic money. <br><br>
        <!-- <div class="slider closed" v-bind:class="{'is-collapsed' : collapsed }">
                  <br>
                  <div v-on:click="isShow = !isShow" class="control">
      click me to toggle (show/hide) HTML element
    </div>
    <div v-show="isShow"  class="content">contents</div>
  </div>-->
        <!-- <div v-show="isShow"  class="content">contents</div>  -->
        <div v-show="isShow">
          The T24 Black Card is a leading prepaid card, designed specifically for the high-net worth, global traveller, coming complete with a host of travel benefits that include travel insurance and priority pass members.<br> Our card can be used globally,
          wherever the Visa acceptance mark is displayed, and can be managed, either here on our cardholder website or through either our T24 Black customer support or IVR services.<br> Through the T24 Black cardholder website you will be able to manage
          your account, access statements and make transfers to other T24 Black cardholders. You will also be able to find guidance and information relating to T24 Black and our card product.<br> If you've recently received your T24 Black Visa Prepaid card
          and are experiencing any difficulty either registering it or retrieving your PIN, please get in touch with the T24 Black customer support team. They can be reached by phone, email or Skype, using the details available within the contact section
          of our site.<br> Should you have any further questions or queries for the T24 Black customer support team please feel free to contact them using the same details where one of our representatives will be on hand to assist.<br>
          <br> Our Brands<br>
          <br> T24 PayVault<br>
          <br> The T24 PayVault Visa Prepaid Card is a provider of dedicated payment solutions for the European market, offering companies a means of streamlining the management of their payroll and other systems. Services T24 PayVault offer range from
          remunerating employees to paying commissions to staff based locally throughout the world.<br> To find out more please visit T24 PayVault<br>
          <br> T24 BlackShield<br>
          <br> The T24 BlackShield Visa Prepaid Card is a payout mechanism for the travel insurance sector, giving insurers a fast and simple means of paying out claims to their customers internationally. The benefit of using one of our prepaid cards is
          that it allows insurers to provide their customers with funds as and when they need them, making the process of obtaining treatment whilst travelling more efficient.<br> To find out more please visit T24 BlackShield<br>
        </div>
        <br/>
        <div class="align_center">
          © 2018 Transact24 Trading Limited
        </div>
      </div>
    </div>
    <!-- </b-container>
      </div> -->
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    name: 'footers',
    data() {
      return {
        isShow: false
      }
    },
    //  data: {
    //     isShow: false
    //   },
    components: {
    },
    computed: mapGetters({
    }),
    methods: {
    },
    created() {
    }
  }
</script>

<style scoped>
  .footer-links {
    list-style: none;
    padding: 15px 0 0 0;
    margin: 0 auto;
    text-align: center;
    display: block;
    color: #fff;
  }
  /* .footer-links li a:hover,
  a,
  a:hover,
  a:active,
  a:focus {
    color: #46a694;
  } */
  .footer-links a:hover{
    color: #46a694;
  }
  .footer-links li {
    list-style: none;
    padding: 2px 10px;
    display: inline;
    line-height: 28px;
  }
  .foot-copy {
    font-size: 0.75em;
    color: #a1a1a1;
    padding: 0 0 30px 0;
  }
  /* .is-collapsed {
  		li:nth-child(n+5) {
  		display: none;
  	}
  } */
</style>

