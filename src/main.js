import Vue from 'vue'
import App from './App.vue'
import router from 'router/index.js'
import store from 'store'
Vue.config.productionTip = false;

import {Drawer,Button, Icon} from 'ant-design-vue';
Vue.component(Icon.name, Icon)
Vue.component(Drawer.name, Drawer)
Vue.component(Button.name, Button)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
