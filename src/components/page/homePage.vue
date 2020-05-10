<template>
    <div>
        <v-header />
        <div class="main">
            <div class="header" :style="bgImg">
                <div class="header-title">
                    <transition name='slide-fade'>
                        <h1 v-show="active">ck的博客呀</h1>
                    </transition>
                    <transition name='slide-fade'>
                        <p v-show="active">yayayyayayyayyayyayayy</p>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/common/Header'
// import bgImg from '@/../static/bg.jpg'

export default {
    data() {
        return {
            bgImg:{
                backgroundImage: "url(" + require("../../../static/bg.jpg") + ") ",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            },
            active: false,
        }
    },
    components: {
        vHeader
    },
    created() {
        setTimeout(() => {
            this.active = true
        }, 0)
    },
    methods: {
        test() {
            this.active = !this.active
        }
    }
}
</script>

<style scoped>
.header {
    height: 180px;
    padding-top: 120px;
    text-align: center;
}
.header-title {
    position: relative;
    width: 100%;
    text-align: center;
    font-weight: 500;
    color: #fff;
}
.header-title h1 {
    position: absolute;
    top: 0px;
    width: 100%;
    transition: .2s ease-in-out;
}
.header-title p {
    position: absolute;
    top: 60px;
    width: 100%;
    transition: all .25s ease-in-out;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(-100px);
  opacity: 0;
}
</style>