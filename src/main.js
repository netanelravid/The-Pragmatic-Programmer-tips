import Vue from 'vue';

import App from './App.vue';

if (PRODUCTION) {
  Vue.config.productionTip = false;
  Vue.config.devtools = false;
}

new Vue({
  el: '#app',
  render: h => h(App)
});
