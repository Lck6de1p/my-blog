<template>
    <div class="blog-list-item">
        <div class="blog-list-item-title">
            <span>{{data.title}}</span>
        </div>
        <div class="iconfont-wrapper">
            <span class="iconfont icon-bussiness-man-fill" data="lck"></span>
            <span class="iconfont icon-clock-fill" :data="data.time"></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                title: '测试',
                time: '2020-02-03'
            }

        }
    }
};
</script>

<style scoped>
.blog-list-item {
    padding: 16px 20px;
    margin-bottom: 20px;
    transition: all .3s ease-in-out;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.9);
}
.blog-list-item:hover {
    box-shadow: 0 2px 26px 0 rgba(0, 0, 0, 0.9);
}
.blog-list-item-title {
    line-height: 36px;
    font-size: 1.1rem;
    font-weight: 500;
    color: #3eaf7c;
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
    background: #3eaf7c;
    transition: all .3s;
}
.iconfont::after {
    content: attr(data)
}
.iconfont {
    color: #8b8b8b;
}
.iconfont-wrapper {
    margin-top: 10px;
}
.iconfont-wrapper span:not(:first-child){
    margin-left: 30px;
}
</style>