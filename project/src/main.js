import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vueMoment from 'vue-moment'
import vuetify from '@/plugins/vuetify' // path to vuetify export

import { Datetime } from 'vue-datetime'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-datetime/dist/vue-datetime.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(Datetime)
Vue.use(vueMoment)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
