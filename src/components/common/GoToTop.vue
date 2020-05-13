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
        // 使用requestAnimationFrame实现回到顶部功能
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
        },
        // 计算当前滚动条位置
        getScrollHeight() {
            this.scrollHight = document.body.scrollTop || document.documentElement.scrollTop
        }
    },
    mounted() {
        // 监听滚动事件
        window.addEventListener('scroll', this.getScrollHeight)
    },
    computed: {
        // 滚动条如果滚动距离超过了100px，显示回到顶部按钮
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