/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 import "@babel/polyfill"

require('./bootstrap')

//window.Vue = require('vue')
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate) 

Vue.component('homepage-navigation', require('./components/homepage/HomeNav.vue').default)
Vue.component('general-navbar', require('./components/Navbar.vue').default)

new Vue({
    el: '#app-monada' 
});

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))