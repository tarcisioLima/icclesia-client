
import "@babel/polyfill"

require('./bootstrap')

import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate) 

Vue.component('homepage-navigation', require('./components/homepage/HomeNav.vue').default)
Vue.component('general-navbar', require('./components/Navbar.vue').default)

//Homepage
Vue.component('home-login-modal', require('./components/homepage/Login.vue').default)
Vue.component('home-register-modal', require('./components/homepage/Register.vue').default)

//Publication
Vue.component('post-list', require('./components/publication/PostList.vue').default)

new Vue({
    el: '#app-icclesia' 
});


