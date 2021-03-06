import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
    router
})
