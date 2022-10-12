import { createApp } from 'vue'
import { Quasar } from 'quasar'
import lang from 'quasar/lang/id'
import iconSet from 'quasar/icon-set/svg-material-icons'

import './assets/main.scss'

import App from './App.vue'

import { store } from './stores'
import { router } from './router'

const app = createApp(App)

app.use(store)
app.use(router)

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang,
    iconSet,
})
app.mount('#app')
