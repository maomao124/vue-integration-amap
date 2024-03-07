import Vue from 'vue'
import App from './view/Test1'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
