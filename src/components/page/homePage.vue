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
            <transition name="first-move">
                <div class="blog-wrapper" v-show="active">
                    <div class="blog-list">
                       <blog-item v-for="item in 20" :key="item" />
                    </div>
                    <div class="info-wrappper">
                        <avatar />
                        <h3 class="type-title">Category</h3>
                        <ul class="tags-wrapper">
                            <li class="tags-item">
                                javaScript
                                <div class="tag-num">10</div>
                            </li>
                            <li class="tags-item">
                                javaScript
                                <div class="tag-num">10</div>
                            </li>
                            <li class="tags-item">
                                javaScript
                                <div class="tag-num">10</div>
                            </li>
                            <li class="tags-item">
                                javaScript
                                <div class="tag-num">10</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/common/Header'
import blogItem from '@/components/common/BlogItem' 
import avatar from '@/components/common/Avatar'

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
        vHeader,
        blogItem,
        avatar
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

<style lang="scss" scoped>
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
    z-index: 3;
}
.header-title h1 {
    position: absolute;
    top: 0px;
    width: 100%;
    transition: .4s ease-in-out;
}
.header-title p {
    position: absolute;
    top: 60px;
    width: 100%;
    transition: all .5s ease-in-out;
}
.blog-wrapper {
    display: flex;
    align-items: flex-start;
    margin: 20px auto 0;
    max-width: 1126px;
    z-index: 1;
}
.blog-list {
    flex: auto;
}
.info-wrappper {
    position: sticky;
    top: 70px;
    transition: all .3s;
    margin-left: 15px;
    color: $text-color;
    flex: 0 0 300px;
    box-shadow: $shadow;
    border-radius: .25rem;
    box-sizing: border-box;
    padding: 0 15px;
}
.type-title {
    line-height: 50px;
    font-weight: 500;
}
.tags-item {
    padding: 5px 10px;
    height: 20px;
    color: $shadow-hover;
    margin-bottom: 10px;
    box-shadow: $shadow;
    cursor: pointer;
    transition: all .3s ease-in-out;
}
.tags-item:hover {
    box-shadow: $shadow-hover;
}
.tag-num {
    float: right;
    background-color: #f47e60;
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 3px;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(-50px);
  opacity: 0;
}

</style>