<template>
    <div>
        <v-header></v-header>
        <div class="nav-bar-pc">
            <nav-bar />
        </div>
        <div class="blog-page">
            <div class="blog-content">
                <transition name="first-move">
                    <div v-show="active">
                        <h1 class="blog-content-title">这是一个测试标题</h1>
                        <div class="iconfont-wrapper">
                            <span class="iconfont icon-bussiness-man-fill" data="lck"></span>
                            <span class="iconfont icon-clock-fill" data="2020-03-05"></span>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import navBar from '../common/NavBar' 
import vHeader from '../common/Header'
export default {
    data() {
        return {
            active: false
        }
    },
    components: {
        navBar,
        vHeader
    },
    created() {
        setTimeout(() => {
            this.active = true
        }, 0)
    }
}
</script>

<style lang="scss" scoped>
.nav-bar-pc {
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
    padding-top: 50px;
}
.blog-content {
    max-width: 740px;
    margin: 30px auto;
}

</style>