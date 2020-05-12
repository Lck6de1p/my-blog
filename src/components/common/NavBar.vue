<template>
    <div class="sider-bar">
        <p class="sider-bar-title">这是一个测试的标题</p>
        <ul>
            <li class="sider-bar-item" @click="chose(index)" v-for="(item, index) in datList" :class="{'sider-bar-item-active': active == index}" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: -1,
            datList: ['简介', '内容', '这是一个总结']
        }
    },
    methods: {
        chose(index) {
            console.log(index)
            this.active = index
        }
    }
}
</script>

<style lang="scss" scoped>
.sider-bar {
    padding: 20px 0;
}
.sider-bar-title {
    margin-bottom: 10px;
    font-size: 1.1rem;
    font-weight: 700;
    color: $text-color;
}
.sider-bar-item {
    font-size: 1rem;
    color: $text-color;
    line-height: 1.4;
    padding:  5px 20px;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
}
.sider-bar-item-active {
    color: #fff !important;
    background-color: $green-color;

}
.sider-bar-item:hover {
    color: $green-color;
}
</style>