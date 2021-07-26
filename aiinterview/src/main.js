import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'animate.css'
import "./fontawesome.js"

import VueRecord from '@codekraft-studio/vue-record'
import AudioVisual from 'vue-audio-visual'

Vue.use(AudioVisual)

Vue.use(VueRecord)






Vue.use(require('face-api.js'));


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
