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
                        <div class="avatar-wrapper">
                            <img src="../../assets/img/avatar.jpg" class="avatar-img">
                            <h3 class="avatar-name">lck6de1p</h3>
                            <div class="num-wrapper">
                                <div>
                                    <h4 class="num-item">20</h4>
                                    <h6>article</h6>
                                </div>
                                <div>
                                    <h4 class="num-item">5</h4>
                                    <h6>tag</h6>
                                </div>
                            </div>
                        </div>
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
        blogItem
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
.avatar-img {
    width: 128px;
    height: 128px;
    margin: 20px auto;
    border-radius: 50%;
}
.avatar-name {
    text-align: center;
}
.num-wrapper {
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 10px;
}
.num-wrapper div {
    width: 50%;
    box-sizing: border-box;
}
.num-wrapper div:first-child {
    border-right: 1px solid #333;
}
.num-item {
    font-weight: 500;
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