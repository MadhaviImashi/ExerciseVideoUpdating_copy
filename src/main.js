import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons, LayoutPlugin,  FormPlugin} from 'bootstrap-vue'
import { MultiSelectPlugin } from '@syncfusion/ej2-vue-dropdowns';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(MultiSelectPlugin);

Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)
Vue.use(FormPlugin)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
