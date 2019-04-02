import Vue from 'vue'
import App from './app.vue'
import store from './store/store'
import Fly from 'flyio/dist/npm/wx'
Vue.config.productionTip = false


App.mpType = 'app' // 当前组件类型为应用

// 将store对象放置Vue的原型上，为的是每个实例都可以引用
Vue.prototype.$store = store
Vue.prototype.getRoute = function() {
  return this.$mp.query.index
}
const fly = new Fly
Vue.prototype.$fly = fly
const app = new Vue(App)
app.$mount()