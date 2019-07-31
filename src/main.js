import Vue from 'vue'
import App from './App.vue'
// 定义一个全局事件总线对象
Vue.prototype.$globalEventBus = new Vue()
/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})
