
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./core/bootstrap');
require('./core/bulma-extensions');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('type-writer', require('./components/TypeWriter.vue'));
Vue.component('life-pie', require('./components/LifePie.vue'));

import headroom from './core/headroom';
const app = new Vue({
    el: '#app',
    mixins: [ headroom ]
});


