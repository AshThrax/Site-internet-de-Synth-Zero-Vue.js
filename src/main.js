import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { createRouter, createWebHistory } from 'vue-router'
import AccueilApp from './components/AccueilApp.vue'
import AlbumApp from './components/AlbumApp.vue'
import ConcertApp from './components/ConcertApp'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router=createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/accueil' ,component: AccueilApp },
        {path:'/album' ,component: AlbumApp },
        {path:'/concert' ,component: ConcertApp },
        
    ]
})
const app=createApp(App)
library.add(faUserSecret)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
