import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/homePage'
        },
        {
            path: '/test',
            component: () => import('@/components/common/Header')
        },
        {
            path: '/homePage',
            component: () => import('@/components/page/homePage')
        }
    ]
})