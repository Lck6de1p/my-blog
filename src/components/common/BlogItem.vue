<template>
    <div class="blog-list-item">
        <div class="blog-list-item-title">
            <span @click="goto">{{data.title}}</span>
        </div>
        <div class="iconfont-wrapper">
            <span class="iconfont icon-bussiness-man-fill" data="lck"></span>
            <span class="iconfont icon-clock-fill" :data="data.time"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: ["data"],
    methods: {
        goto() {
            this.$router.push(this.data.time)
        }
    }
};
</script>

<style lang="scss" scoped>
.blog-list-item {
    padding: 16px 20px;
    margin-bottom: 20px;
    transition: all .3s ease-in-out;
    box-shadow: $shadow
}
.blog-list-item:hover {
    box-shadow: $shadow-hover
}
.blog-list-item-title {
    line-height: 36px;
    font-size: 1.1rem;
    font-weight: 500;
    color: $green-color;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.blog-list-item-title span {
    position: relative;
    text-decoration: none;
    cursor: pointer;
}
.blog-list-item-title span:hover:before {
   width: 100%;
   left: 0;
   right: 0;
}
.blog-list-item-title span:before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: 0;
    height: 2px;
    background: $green-color;
    transition: all .3s;
}

</style>