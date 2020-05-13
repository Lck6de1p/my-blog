<template>
    <div class="nav-bar">
        <span class="iconfont icon-createtask_fill sider-btn" @click="openSiderBar"></span><span @click="gotoHomePage">ck的博客呀</span>
    </div>
</template>

<script>
import bus from './bus'

export default {
    methods: {
        gotoHomePage() {
            this.$router.push('homePage')
        },
        openSiderBar() {
            bus.$emit('openSiderBar')
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 50px;
    padding-left: 15px;
    font-size: 20px;
    font-weight: 800px;
    color: $text-color;
    line-height: 50px;
    background-color: #181818;
    box-shadow: $shadow;
    z-index: 10;
    .icon-createtask_fill {
        font-size: 20px;
        margin-right: 10px;
    }
    span {
        cursor: pointer;
    }
}
</style>