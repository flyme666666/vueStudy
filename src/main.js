import Vue from 'vue'
import App from './App.vue'
import '../plugins/element.js'
import axios from 'axios'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI);

Vue.prototype.axios = axios //请求
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
