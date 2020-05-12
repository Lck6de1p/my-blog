<template>
    <div class="nav-bar">
        <span @click="gotoHomePage">ck的博客呀</span>
    </div>
</template>

<script>
export default {
    methods: {
        gotoHomePage() {
            this.$router.push('homePage')
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
    font-weight: 800px;
    color: $text-color;
    line-height: 50px;
    background-color: #181818;
    box-shadow: $shadow;
    z-index: 10;
    span {
        cursor: pointer;
    }
}
</style>