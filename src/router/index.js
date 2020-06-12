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
            path: '/bloghome',
            name: 'bloghome',
            component: () => import('@/components/common/Blog'),
            children: [
                {
                    path: '/2020-06-01',
                    name: '动态规划',
                    component: () => import('@/components/page/2020-06-01')
                },
                {
                    path: '/2020-05-20',
                    name: '动态规划',
                    component: () => import('@/components/page/2020-05-20')
                },
                {
                    path: '/2020-05-03',
                    name: '解决ios13键盘事件导致页面按钮失效的bug',
                    component: () => import('@/components/page/2020-05-03')
                },
            ]
        },
        
        {
            path: '/homepage',
            component: () => import('@/components/page/homePage')
        }
    ]
})