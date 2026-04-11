import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGithub,
  faGolang,
  faPython,
  faReact,
  faTypescript,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'

library.add(faGem, faGithub, faGolang, faPython, faReact, faTypescript, faXTwitter)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
