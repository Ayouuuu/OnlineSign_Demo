import Vue from 'vue'
import App from './App.vue'
import './plugins/tailwild.css'

import { Toast } from 'vant';
Vue.use(Toast);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
