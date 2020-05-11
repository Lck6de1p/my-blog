<template>
    <div id="app">
        <transition name="move">
            <router-view />
        </transition>
    </div>
</template>

<script>

export default {

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
</style>
