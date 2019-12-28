import Vue from 'vue'
import App from './App.vue'
import router from './router'

import NUI from '@nsea/n-ui';
import '@nsea/n-ui/lib/styles/n-ui.css'
Vue.use(NUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
