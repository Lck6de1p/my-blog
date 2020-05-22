<template>
    <div class="title-list">
        <p class="title-list-title">{{title}}</p>
        <ul>
            <li class="title-list-item" @click="chose(index)" v-for="(item, index) in datList" :class="{'title-list-item-active': currentIndex == index}" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        chose(index) {
            if (index == this.currentIndex) {
                return
            }
            console.log(this.titleScrollList[index])
            window.scrollTo(0, this.titleScrollList[index] - 50)
        }
    },
    computed: {
        titleScrollList() {
            return this.$store.state.titleScrollList
        },
        datList() {
            return this.$store.state.titleList
        },
        // 计算右侧高度
        currentIndex() {
            for (let i = 0; i < this.titleScrollList.length; i++) {
                let height1 = this.titleScrollList[i]
                let height2 = this.titleScrollList[i + 1]
                if (!height2 || (this.scroll + 400 >= height1 && this.scroll + 400 < height2)) {
                    return i
                }
            }
            return 0
        },
        scroll() {
            return this.$store.state.scroll
        },
        title() {
            return this.$store.state.titleListTitle
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