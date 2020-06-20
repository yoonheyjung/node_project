import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Datetime } from 'vue-datetime'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-datetime/dist/vue-datetime.css'

Vue.config.productionTip = false

Vue.use(Datetime)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
