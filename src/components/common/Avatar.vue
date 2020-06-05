<template>
    <div class="avatar-wrapper">
        <img src="../../assets/img/avatar.jpg" class="avatar-img">
        <h3 class="avatar-name">lck6de1p</h3>
        <div class="num-wrapper">
            <div>
                <h4 class="num-item">{{articleNum}}</h4>
                <h6>article</h6>
            </div>
            <div>
                <h4 class="num-item">{{tagNum}}</h4>
                <h6>tag</h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        tagNum() {
            return this.$store.getters.tagList.length;
        },
        articleNum() {
            return this.$store.state.blogItemList.length;
        }
    }
}
</script>

<style lang="scss" scoped>
.avatar-wrapper {
    color: $text-color
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
</style>

