<template>
    <div>
        <v-header></v-header>
        <div class="title-list-pc">
            <title-list />
        </div>
        <div class="blog-page">
            <div class="blog-content">
                <!-- <transition name="first-move">
                    <div v-show="active">
                        <h1 class="blog-content-title">这是一个测试标题</h1>
                        <div class="iconfont-wrapper">
                            <span class="iconfont icon-bussiness-man-fill" data="lck"></span>
                            <span class="iconfont icon-clock-fill" data="2020-03-05"></span>
                        </div>
                    </div>
                </transition> -->
                <h1 class="blog-content-title">这是一个测试标题</h1>
                <div class="iconfont-wrapper">
                    <span class="iconfont icon-bussiness-man-fill" data="lck"></span>
                    <span class="iconfont icon-clock-fill" data="2020-03-05"></span>
                </div>

                <h2 class="primary-title">这是一个小标题1</h2>
                <div style="height: 500px"></div>
                <h2 class="primary-title">这是一个小标题2</h2>
                <div style="height: 500px"></div>
                <h2 class="primary-title">这是一个小标题3</h2>
                <div style="height: 500px"></div>
                <h2 class="primary-title">这是一个小标题4</h2>
                <div style="height: 500px"></div>
            </div>
        </div>
    </div>
</template>

<script>
import titleList from '../common/TitleList' 
import vHeader from '../common/Header'


export default {
    data() {
        return {
            active: false,
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
        this.$store.commit('GET_TITLE'),
        window.addEventListener('scroll', this.getScroll)
    },
    destroyed() {
        window.removeEventListener('scroll', this.getScroll)
    }
}
</script>

<style lang="scss" scoped>
.title-list-pc {
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    width: 250px;
    padding: 0 20px;
    border-right: 1px solid rgba(0, 0, 0, 0.9);
    box-sizing: border-box;
}
.blog-page {
    margin-left: 256px;
    padding: 50px 30px;
}
.blog-content {
    max-width: 740px;
    margin: 30px auto;
}

</style>