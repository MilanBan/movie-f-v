import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMovie from './components/AppMovie'

Vue.use(VueRouter)

const routes = [
    {
        path: '/movies',
        name: 'Movies',
        component: AppMovie
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