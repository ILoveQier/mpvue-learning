import Vue from 'vue'
import App from './app.vue'
import store from './store/store'
Vue.config.productionTip = false


App.mpType = 'app' // 当前组件类型为应用

// 将store对象放置Vue的原型上，为的是每个实例都可以引用
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()