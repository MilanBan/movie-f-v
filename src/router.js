import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMovies from './components/AppMovies'

Vue.use(VueRouter)

const routes = [
    {
        path: '/movies',
        name: 'Movies',
        component: AppMovies
    },
    {
        path: '/',
        redirect: '/movies'
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router