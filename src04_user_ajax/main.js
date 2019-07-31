import Vue from 'vue'
import App from './App.vue'
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})
