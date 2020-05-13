<template>
    <div>
        <div class="mask" v-show="active" @click="close"></div>
        <transition name="left-move">
            <div class="sider-bar" v-show="active">
                <div class="back">
                    <span class="iconfont icon-houtui" @click="close"></span>
                </div>
                <avatar />
            </div>
        </transition>
    </div>
</template>

<script>
import bus from './bus'
import avatar from './Avatar'

export default {
    data() {
        return {
            active: false
        }
    },
    components: {
        avatar
    },
    created() {
        bus.$on('openSiderBar', () => {
            this.active = true
        })
    },
    methods: {
        close() {
            this.active = false
        }
    }
}
</script>

<style scpoed lang="scss">
.mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 11;
}
.sider-bar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 250px;
    padding:  10px 20px;
    background-color: $background-color;
    box-sizing: border-box;
    z-index: 11;
}
.icon-houtui {
    cursor: pointer;
    font-size: 30px !important;
}
.left-move-enter-active,
.left-move-leave-active {
    transition:  all .3s ease;
}
.left-move-enter, .left-move-leave-to {
    transform: translateX(-100%);
}
</style>