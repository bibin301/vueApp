# t24-ks

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
V-Study meterials:


https://medium.com/wdstack/vue-vuex-getting-started-f78c03d9f65 -vuex

app declearation:


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})



bind

v-bind:title="message"



Conditionals and Loops

<div id="app-3">
  <span v-if="seen">Now you see me</span>
</div>


var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})



Looping:

<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>


var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

conditional:

<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>

v-else-if


<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>

Events:

<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>


var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})


Mapping an Array to Elements with v-for


<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>


v-for with an Object


<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>


new Vue({
  el: '#v-for-object',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
})

<div v-for="(value, key) in object">
  {{ key }}: {{ value }}
</div>



<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }}: {{ value }}
</div>



<!-- method handler -->
<button v-on:click="doThis"></button>

<!-- object syntax (2.4.0+) -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>

<!-- inline statement -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- shorthand -->
<button @click="doThis"></button>

<!-- stop propagation -->
<button @click.stop="doThis"></button>

<!-- prevent default -->
<button @click.prevent="doThis"></button>

<!-- prevent default without expression -->
<form @submit.prevent></form>

<!-- chain modifiers -->
<button @click.stop.prevent="doThis"></button>

<!-- key modifier using keyAlias -->
<input @keyup.enter="onEnter">

<!-- key modifier using keyCode -->
<input @keyup.13="onEnter">

<!-- the click event will be triggered at most once -->
<button v-on:click.once="doThis"></button>

Store
=========

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
  },
  actions: {
  },
  mutations: {
  },
  getters: {
  },  
  modules: {
    
  }
})
export default store

There are 5 objects that make up a store, let’s explore each one

state:
========


This is where you define the data structure of your application. You can also set default or initial state here.


state: {
  projects: [],
  userProfile: {}
}

actions:
==========
Actions are where you define the calls that will commit changes to your store.
 A common example of this would be a call to an api to retrieve data, once it completes you call store.commit()
 to invoke a mutation to actually update the data in the store. Actions are called in your components via dispatch call
 
 actions: {
    LOAD_PROJECT_LIST: function ({ commit }) {
      axios.get('/secured/projects').then((response) => {
        commit('SET_PROJECT_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  }
  
  
  
mutations:
===========
The mutations calls are the only place that the store can be updated.

mutations: {
    SET_PROJECT_LIST: (state, { list }) => {
      state.projects = list
    }
  }
  
  
  getters:
Getters are a way to grab computed data from the store. For example, if you have a project list, one component might only want to show projects that are completed:

getters: {
 completedProjects: state => {
  return state.projects.filter(project => project.completed).length
 }
}

