<template>
    <div class="title-list">
        <p class="title-list-title">这是一个测试的标题</p>
        <ul>
            <li class="title-list-item" @click="chose(index)" v-for="(item, index) in datList" :class="{'title-list-item-active': active == index}" :key="index">{{item}}</li>
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
.title-list {
    padding: 20px 0;
}
.title-list-title {
    margin-bottom: 10px;
    font-size: 1.1rem;
    font-weight: 700;
    color: $text-color;
}
.title-list-item {
    font-size: 1rem;
    color: $text-color;
    line-height: 1.4;
    padding:  5px 20px;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
}
.title-list-item-active {
    color: #fff !important;
    background-color: $green-color;

}
.title-list-item:hover {
    color: $green-color;
}
</style>