import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

/* Icons */
// import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faTable } from '@fortawesome/free-solid-svg-icons/faTable'
// import { faScrewdriver } from '@fortawesome/free-solid-svg-icons/faScrewdriver'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons/faGlobeEurope'
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons/faFlagCheckered'
import router from './router'
// import { faStopwatch } from '@fortawesome/free-solid-svg-icons/faStopwatch'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)

library.add(faTable, faGlobeEurope, faFlagCheckered)
Vue.component(`font-awesome-icon`, FontAwesomeIcon)

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require(`./assets/img/mapMarkers/position.png`),
  iconUrl: require(`./assets/img/mapMarkers/position.png`),
  shadowUrl: require(`leaflet/dist/images/marker-shadow.png`),
})

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount(`#app`)
