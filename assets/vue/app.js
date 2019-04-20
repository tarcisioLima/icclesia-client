/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 import "@babel/polyfill";

require('./bootstrap');

window.Vue = require('vue');

Vue.component('test-component', require('./components/Test.vue').default);
Vue.component('general-navbar', require('./components/Navbar.vue').default);

new Vue({
    el: '#app-monada' 
});

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))