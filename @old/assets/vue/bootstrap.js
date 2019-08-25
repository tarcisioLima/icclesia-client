
window._ = require('lodash');

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}



window.axios = require('axios');

// window.axios.defaults.headers.common['Accept'] = '*'
window.axios.defaults.headers.common['Content-Type'] = 'application/json'

if(window.localStorage.getItem('user-token') != null){
    window.axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('user-token');   
}