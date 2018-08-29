require('./bootstrap');

window.Vue = require('vue');

const config = require('./config');

import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, config.socket_url);

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    sockets: {
        connect: function () {
            console.log('connected to socket.io')
        },
    },
    el: '#app'
});