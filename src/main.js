import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import { BootstrapVue, BootstrapVueIcons, LayoutPlugin,  FormPlugin} from 'bootstrap-vue'
import { MultiSelectPlugin } from '@syncfusion/ej2-vue-dropdowns';
import Vuex from 'vuex'
import store from './store/store.js'

Vue.use(Vuex)

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'ant-design-vue/dist/antd.css';
Vue.use(Antd)

Vue.use(MultiSelectPlugin);

Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)
Vue.use(FormPlugin)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
