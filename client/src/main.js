import Vue from 'vue'
import Vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import {GmapMarker} from 'vue2-google-maps/src/components/marker'
import App from './App.vue'
import router from './router'

import 'vuetify/dist/vuetify.min.css'
import secrets from './lib/secrets.js'

Vue.use(Vuetify)
Vue.use(VueGoogleMaps, {
  load: {
    key: secrets.G_KEY,
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// then disable the following:
})
Vue.component('infoWindow', VueGoogleMaps.InfoWindow)
Vue.component('GmapMarker', GmapMarker)
installComponents: true,

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
