import Vue from 'vue'
import App from './App.vue'
import router from 'router/index.js'
import store from 'store/index.js'

Vue.config.productionTip = false;


var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

import {Drawer,Button, Icon} from 'ant-design-vue';
Vue.component(Icon.name, Icon)
Vue.component(Drawer.name, Drawer)
Vue.component(Button.name, Button)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
