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
            path: '/2020-03-03',
            name: '解决ios13键盘事件导致页面按钮失效的bug',
            component: () => import('@/components/page/2020-03-03')
        },
        {
            path: '/homepage',
            component: () => import('@/components/page/homePage')
        }
    ]
})