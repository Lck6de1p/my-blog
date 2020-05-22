import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        a: 1111,
        titleList: [],
        titleScrollList: [0],
        scroll: 0,
    },
    getters: {},
    mutations: {
        // 获取所有标题
        GET_TITLE(state) {
            let title = document.getElementsByClassName('primary-title')
            state.titleList = []
            state.titleScrollList = [0]
            for (let i = 0; i < title.length; i++) {
                state.titleList.push(title[i].innerHTML)
                state.titleScrollList.push(title[i].offsetTop)
            }
        },
        // 获取当前页面滚动高度
        GET_SCROLL(state, params) {
            state.scroll = params
            console.log(state.scroll)
        }
    },
})

export default store