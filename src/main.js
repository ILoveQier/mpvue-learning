import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false


App.mpType = 'app' // 当前组件类型为应用

const app = new Vue(App)
app.$mount()