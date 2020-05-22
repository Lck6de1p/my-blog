import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        titleList: [],
        titleScrollList: [],
        scroll: 0,
        titleListTitle: 'Home'
    },
    getters: {},
    mutations: {
        // 获取所有标题和高度
        GET_INFO(state) {
            let paragraph = document.getElementsByClassName('blog-paragraph')
            let title = document.getElementsByClassName('primary-title')
            state.titleList = []
            for (let i = 0; i < title.length; i++) {
                console.log(title[i].offsetTop)
                state.titleList.push(title[i].innerHTML)
            }
            state.titleScrollList = []
            let height = 192
            state.titleScrollList.push(height)
            for (let i = 0; i < paragraph.length; i++) {
                let item = paragraph[i]
                height += item.clientHeight
                state.titleScrollList.push(height)
            }
        },
        // 获取当前页面滚动高度
        GET_SCROLL(state, params) {
            state.scroll = params
            // console.log(state.scroll)
        },
        CLEAR_ALLSCROLL(state) {
            state.titleList = []
            state.titleScrollList = [],
            state.scroll = 0
            state.titleListTitle = 'Home'
        },
        SET_TITLE(state) {
            state.titleListTitle = document.getElementsByClassName('blog-content-title')[0].innerHTML
        }
    },
})

export default store