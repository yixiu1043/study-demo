// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.css';

// Import Icons and App Custom Styles
import './css/app.less';
import 'framework7-icons';
import "material-design-icons/iconfont/material-icons.css"
// Import App Component
import App from './app.vue';

import axios from "./http";
Vue.prototype.$axios = axios;

import vueFilters from "@/utils/vueFilters";
for (let key in vueFilters) {
  Vue.filter(key, vueFilters[key]);
}


// Init F7 Vue Plugin
Framework7.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',

  // Register App Component
  components: {
    app: App
  }
});
