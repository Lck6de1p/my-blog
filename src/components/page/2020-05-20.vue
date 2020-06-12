<template>
    <div class="blog-content">
        <h1 class="blog-content-title">图片懒加载</h1>
        <div class="iconfont-wrapper">
            <span class="iconfont icon-bussiness-man-fill" data="lck"></span>
            <span class="iconfont icon-clock-fill" data="2020-05-20"></span>
        </div>
        <div class="blog-paragraph">
            <h2 class="primary-title">使用场景</h2>
            <div>
                <p class="blog-paragraph-content">一个下拉列表中，每一个词条都有一张图片，当词条太多时，渲染页面的时候向服务器请求图片数目太多，导致页面卡顿</p>
            </div>
        </div>
        <div class="blog-paragraph">
            <h2 class="primary-title">原理</h2>
            <div><p class="blog-paragraph-content">给img标签的src属性设置一个相同的默认图片，
                再给img设置一个自定义属性(例如src-data),把图片路径存入该属性。当页面下拉滚动到img标签的时候，把src-data内的属性赋值给img属性，从而实现用户需要看到图片的时候才去加载图片，
                极大地加快了页面加载速度。</p></div>
        </div>
        <div class="blog-paragraph">
            <h2 class="primary-title">解决方案</h2>
            <div>
                <p class="blog-paragraph-content">html部分</p>
            </div>
            <div>
                <pre class="pre-style">&lt;div>
    &lt;div class="img-wrapper">
        &lt;img
            src="'http://s4.sinaimg.cn/mw690/006uWPTUgy72CNFYNjB93&690'"
            v-for="(item, index) in imgList"
            :key="index"
            :src-data="item" />
        &lt;/div>
    &lt;/div>    </pre>
            <div>
                <p class="blog-paragraph-content">js部分</p>
            </div>
            <pre class="pre-style">data() {
        return {
            imgList: [
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591935727563&di=61e65713e558289574dd14bc1df7f222&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F16%2F12%2F01300535031999137270128786964.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591935727563&di=6afb210c031725df3f0df1ac7c4f8127&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F62%2F02%2F01300542526392139955025309984.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591935727563&di=c11999506f0183c9d64c06fdf5d62528&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0704%2Fe53c868ee9e8e7b28c424b56afe2066d.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591935727563&di=61e65713e558289574dd14bc1df7f222&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F16%2F12%2F01300535031999137270128786964.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591935727563&di=fbd2e6b4a101308b24af52cbd9c273ef&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2015%2F0408%2F779334da99e40adb587d0ba715eca102.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591935727562&di=2c9c09269c15fe57e388c5de5e7d5fb7&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F52%2F52%2F01200000169026136208529565374.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591935727563&di=61e65713e558289574dd14bc1df7f222&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F16%2F12%2F01300535031999137270128786964.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591935727562&di=7ddabdc3873ec059c3af604bc65194ba&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F01%2F11%2F16pic_111395_b.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591935727563&di=61e65713e558289574dd14bc1df7f222&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F16%2F12%2F01300535031999137270128786964.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591935727560&di=bb129c6cbf7bf222c51256220d9d70c8&imgtype=0&src=http%3A%2F%2Fi1.sinaimg.cn%2FIT%2F2010%2F0419%2F201041993511.jpg"
            ],
            scroll: 0
        };
    },
    methods: {
        // 加载图片
        load() {
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop; // 获取页面滚动高度
            let img = document.getElementsByTagName("img");
            img.forEach((element, index) => {
                // 当img标签的高度小于页面高度+滚动距离，把src的src-data属性的内容赋值给src，从而显示图片
                if (element.offsetTop &lt;= document.documentElement.clientHeight + this.scroll) {
                    img[index].src = img[index].getAttribute("src-data");
                }
            });
        }
    },
    mounted() {
        this.load(); // 当第一次进入页面，未滚动的时候，就先加载用户可见的图片。
        window.addEventListener("scroll", this.load); // 给页面添加滚动监听事件
    },
    destroyed() {
        window.removeEventListener("scroll", this.load); // 离开页面，结束滚动监听事件
    }</pre>
            </div>
        </div> 
    </div>        
</template>
