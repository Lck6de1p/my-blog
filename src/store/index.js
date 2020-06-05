import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        titleList: [],
        titleScrollList: [],
        scroll: 0,
        titleListTitle: 'Home',
        blogItemList: [
            {
                title: '动态规划',
                time: '2020-06-01',
                tag: '算法'
            },
            {
                title: '解决ios13键盘事件导致页面按钮失效的bug',
                time: '2020-03-03',
                tag: 'javaScript'
            }
        ]
    },  
    getters: {
        tagList(state) {
            const map = new Map();
            state.blogItemList.forEach(item => {
                if (map.has(item.tag)) {
                    map.set(item.tag, map.get(item.tag) + 1);
                } else {
                    map.set(item.tag, 1);
                }
            })
            // return map
            let list = [];
            for (let [key, value] of map) {
                let obj = {
                    key: key,
                    num: value
                };
                list.push(obj);
            }
            return list
        },
        articleNum(state) {
            return state.blogItemList.length;
        }
    },
    mutations: {
        // 获取所有标题和高度
        GET_INFO(state) {
            let paragraph = document.getElementsByClassName('blog-paragraph')
            let title = document.getElementsByClassName('primary-title')
            state.titleList = []
            for (let i = 0; i < title.length; i++) {
                state.titleList.push(title[i].innerHTML)
            }
            state.titleScrollList = []
            let height = 100
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