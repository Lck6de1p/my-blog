<template>
    <div class="footer">
        <div class="footer-item"><span @click="goto" class="iconfont icon-icon__beiangongzuo" data="浙ICP备20014267号-1"></span></div>
        <div class="footer-item"><span class="iconfont icon-copyright" data="lck Copyright © 2020 - 2021"></span></div>
    </div>
</template>

<script>
export default {
    methods: {
        goto() {
            window.open('http://www.beian.miit.gov.cn/', '_blank')
        }
    }
}
</script>

<style scoped lang="scss">
.footer {
    padding: 1.5rem 2.5rem;
    border-top: 1px solid rgba($color: #000000, $alpha: .3);
    .footer-item {
        width: 251px;
        height: 50px;
        span {
            content: attr(data);
            color: $green-color;
        }
    }
}
@media (max-width: 768px) {
    .footer{ 
        display: block;
    }
}
@media (min-width: 768px) {
    .footer{ 
        display: flex;
        justify-content: center;
        align-content: center;
    }
}
.icon-icon__beiangongzuo {
    cursor: pointer;
}
</style>

