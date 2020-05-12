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
            let timer = null
            let _this = this
            cancelAnimationFrame(timer)
            timer = requestAnimationFrame(function fn() {
                if (_this.scrollHight > 0) {
                    window.scrollTo(0, _this.scrollHight - 50)
                    timer = requestAnimationFrame(fn)
                } else {
                    cancelAnimationFrame(timer)
                }
            })
            // let timer = setInterval(() => {
            //     if (this.scrollHight > 0) {
            //        this.scrollHight -= 10
            //         window.scrollTo(0, this.scrollHight)
            //     } else {
            //         clearInterval(timer)
            //         this.scrollHight = 0
            //     }
            // }, 1)
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

<style scoped lang="scss">
.toTop-btn {
    position: fixed;
    bottom: 50px;
    right: 30px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #181818;
    border-radius: 4px;
    box-shadow: $shadow;
    cursor: pointer;
}
.icon-huidaodingbu {
    font-size: 25px;
    color: $shadow-hover;
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