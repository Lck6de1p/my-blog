<template>
    <div>
        <v-header></v-header>
        <div class="title-list-pc">
            <title-list />
        </div>
        <div class="blog-page">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import titleList from '../common/TitleList' 
import vHeader from '../common/Header'


export default {
    data() {
        return {
            scroll: 0
        }
    },
    components: {
        titleList,
        vHeader
    },
    methods: {
        getScroll() {
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            this.$store.commit('GET_SCROLL', this.scroll)
        }
    },
    mounted() {
        this.$store.commit('SET_TITLE')
        this.$store.commit('GET_INFO')
        window.addEventListener('scroll', this.getScroll)
    },
    destroyed() {
        window.removeEventListener('scroll', this.getScroll)
    }
}
</script>
