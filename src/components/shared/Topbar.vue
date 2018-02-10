<template>
<div class="header_container">
    <div class="container">
        <b-navbar toggleable="md" type="dark" variant="">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-img src="/static/images/t24prepaid_logo.png" />
                </b-navbar-nav>
                    <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-nav-item v-for="(item,index) in navItems" :key="index" v-bind:href="item.path" class="nav-item">{{item.title}}</b-nav-item>
                        <img src="/static/images/ico-user.png" />
                    </b-nav-form>
                    <b-nav-item-dropdown text="" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</div>
</template>


<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'topbar',
    data () {
      return {
        navItems: [{
          title: 'LOGIN',
          path: '/login'
        },
        {
          title: 'REGISTER CARD',
          path: '/register-card'
        },
        {
          title: 'FORGOTTEN DETAILS',
          path: '/forgotten-details'
        },
        {
          title: 'CONTACT US',
          path: '/contact-us'
        }
        ]
      }
    },
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

