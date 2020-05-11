<template>
    <transition name="to-top">
        <div class="toTop-btn" @click="gotoTop" v-show="btnShow">
            <span class="iconfont icon-huidaodingbu"></span>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            scrollHight: 0,
        }
    },
    methods: {
        gotoTop() {
            let timer = setInterval(() => {
                if (this.scrollHight > 0) {
                   this.scrollHight -= 10
                    window.scrollTo(0, this.scrollHight)
                } else {
                    clearInterval(timer)
                    this.scrollHight = 0
                }
            }, 1)
        },
        getScrollHeight() {
            this.scrollHight = document.body.scrollTop || document.documentElement.scrollTop
        }
    },
    mounted() {
        window.addEventListener('scroll', this.getScrollHeight)
    },
    computed: {
        btnShow() {
            return this.scrollHight > 100
        }
    }
}
</script>

<style scoped>
.toTop-btn {
    position: fixed;
    bottom: 50px;
    right: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #181818;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.9);
    cursor: pointer;
}
.icon-huidaodingbu {
    font-size: 30px;
    color: #3eaf7c;
}
.to-top-enter-active,
.to-top-leave-active {
    transition: all .5s;
    opacity: 1;
}
.to-top-enter, 
.to-top-leave-to {
    opacity: 0;
    transform: translateY(100px);
}
</style>