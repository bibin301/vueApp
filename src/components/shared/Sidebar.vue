<template>
  <div class="aside-menu">
   <div class="heading">
        <div>
            <span class="heading-container">
              <i class="fa fa-user"></i>
                {{heading}}
            </span>
              <a style="color:#fff;font-size:1.5em;vertical-align: bottom;"><i class="fa fa-sign-out pull-right" aria-hidden="true"></i></a>
        </div>
    </div>
    <div class="branding">
    	<div class="inner-container">
        	<div style="width: 80%; margin: 0 auto;">
          <b-img src="../../../static/images/logo_white.png" style="width: 100%;" alt="image" />
         </div>
        </div>
    </div>
     <ul>
    	<li v-for="(item, index) in sidebarItems" :key='index'>
        	<div class="menu-item" @click="toggleMenu(index)" :class="{ active: isOpen(index) }">
            <div class="menu-item-inner">
              <i :class = "item.icon_name"></i>
                <span class="title">{{ item.title}}</span>
                </div>
          </div>
        	<div class="menu-item-expand" :class="{ open: isOpen(index), closed: !isOpen(index) }">
            	<div class="inner-container">
                    <ul>
                    	<li v-for="(subItem, subIndex) in item.items" :key='subIndex'>
                       <router-link v-bind:to = "{ path: subItem.path }">
                        <b-row>
                            <b-col col lg="10">
                              <span class="links">{{subItem.title}}</span></b-col>
                                <b-col col lg="2">
                                  <div class="btn-container">
                                    <span class="btn btn-primary btn-xs">...</span>
                                  </div>
                            </b-col>
                        </b-row>
                        </router-link>
                        </li>
                    </ul>
                </div>
            </div>
		</li>
        <li>
            <div class="copyright">© 2018 Kaleidoscope</div>
        </li>
    </ul>
  </div>
</template>
import { mapGetters, mapActions } from 'vuex'

<script>

export default {
  name: 'SideBar',
  data () {
    return {
      heading: 'WELCOME, HARAMBE!',
      activeIndex: 0,
    }
  },
  computed: {
    ...mapGetters({
    sidebarItems: 'allSidebarItems'
  }),
  },
  methods: {
  ...mapActions([]),
    toggleMenu(index) {
        this.activeIndex =  (this.activeIndex === index) ? null :index;
    },
    isOpen(index) {
      return index === this.activeIndex;
    }
  },
  created () {
    this.$store.dispatch('getAllSidebarItems')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.open {
    height: auto;
}

.closed {
	height: 0;
  overflow: hidden;
}

.aside-menu > .heading > div {
    padding: 0px 20px;
    width: auto;
    margin: 0;
}

.heading-container {
 padding-left: 15px;
}

.aside-menu {
  background: #494949 none repeat scroll 0 0;
  bottom: 0;
  box-shadow: -35px 0 20px -35px rgba(0, 0, 0, 0.2);
  float: right;
  min-height: calc(100vh - 0px);
  height: 100%;
  position: relative;
  top: 0;
  width: 20%;
}

.aside-menu ul li .menu-item-expand .inner-container ul li .btn-container {
  float: right;
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff
}

.aside-menu ul li .menu-item-expand .inner-container ul li .btn-container .btn {
  padding: 2px 8px;
  text-decoration: none;
  color: #ffffff
}

.aside-menu ul li .menu-item-expand ul li:hover {
	 border-left: 10px solid #46a694;
}

.menu-item:active {
	 border-left: 10px solid #46a694;
}

.menu-item:hover {
	 border-left: 10px solid #46a694;
}

.active {
  	 border-left: 10px solid #46a694;
}

.aside-menu .heading {
  border-bottom: 1px solid rgba(51,51,51,0.3);
  margin-bottom: 0 !important;
  background: #49a694 none repeat scroll 0 0;
  padding-bottom: 9px;
  padding-top: 9px;
  color: #ffffff;
  padding-left: 15px;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 22px;
  padding: 9px 0;
}

.aside-menu .branding {
  width: 100%;
  height: 125px;
  background: #49a694;
  display: table;
}

.aside-menu .branding .inner-container{
  display: table-cell;
  vertical-align: middle;
  width: 250px;
  margin: 0 auto;
}

.aside-menu ul {
  list-style-type: none;
  padding-left: 0;
}

ul {
  margin-top: 0;
}

.aside-menu .not-active {
  display: none;
}

.aside-menu ul li {
  width: 100%;
  background: #333333;
  color: #ffffff;
  border-bottom: 1px solid #494949;
  cursor: pointer;
}

.aside-menu ul li div.menu-item {
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  padding: 9px 0;
  text-transform: uppercase;
}

.aside-menu ul li div.menu-item div.menu-item-inner {
  padding-left: 30px;
}

.aside-menu ul li div.menu-item-expand {
  background: #494949;
}

.title {
 padding-left: 4px;
 font-size: 13px;
}

.links {
    background: none;
    text-transform: uppercase;
    font-size: 11px;
    line-height: 20px;
    text-decoration: none;
    color: #ffffff;
}

.aside-menu ul li .menu-item-expand .inner-container {
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.aside-menu ul {
  list-style-type: none;
  padding-left: 0;
}

.aside-menu ul li .menu-item-expand .inner-container ul li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  background: none;
  padding: 8px 20px;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 20px;
}

.aside-menu ul li .menu-item-expand .inner-container ul li.last {
  border-bottom: none !important;
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

.copyright {
    bottom: 0;
    position: absolute;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    color: #777777;
    padding: 10px 0;
    height: 40px;
    cursor: text;
}
</style>