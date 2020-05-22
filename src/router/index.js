import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/homepage'
        },
        {
            path: '/test',
            component: () => import('@/components/page/test')
        },
        {
            path: '/homepage',
            component: () => import('@/components/page/homePage')
        }
    ]
})