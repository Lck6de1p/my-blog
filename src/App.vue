<template>
    <div id="app">
        <transition name="move">
            <router-view />
        </transition>
        <to-top />
    </div>
</template>

<script>
import toTop from '@/components/common/GoToTop'


export default {
    components: {
        toTop
    }
};
</script>

<style>
.move-enter-active,
.move-leave-active {
    transition: opacity .5s;
}
.move-enter,
.move-leave {
    opacity: 0;
}
body {
    background-color: #181818;
}
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: $shadow-hover;
    }
</style>
