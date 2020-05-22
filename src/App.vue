<template>
    <div id="app">
        <transition name="move">
            <router-view />
        </transition>
        <to-top />
        <sider-bar />
    </div>
</template>

<script>
import toTop from '@/components/common/GoToTop'
import siderBar from '@/components/common/SiderBar'

export default {
    components: {
        toTop,
        siderBar
    }
};
</script>

<style lang="scss">
.move-enter-active,
.move-leave-active {
    transition: opacity .5s;
}
.move-enter,
.move-leave {
    opacity: 0;
}
body {
    background-color: $background-color;
}
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: $green-color;
}
</style>
