<template>
    <div class="blog-content">
        <h1 class="blog-content-title">解决ios13键盘事件导致页面按钮失效的bug</h1>
        <div class="iconfont-wrapper">
            <span class="iconfont icon-bussiness-man-fill" data="lck"></span>
            <span class="iconfont icon-clock-fill" data="2020-03-03"></span>
        </div>
        <div class="blog-paragraph">
            <h2 class="primary-title">起因</h2>
            <div>
                <p class="blog-paragraph-content">最近项目写微信h5前端登录的功能的时候，发现在某种操作后使得页面的所有事件失效</p>
            </div>
        </div>
        <div class="blog-paragraph">
            <h2 class="primary-title">原因</h2>
            <div><p class="blog-paragraph-content">ios13键盘弹出后，会将页面顶上去，导致键盘回滚后，页面错位。</p></div>
        </div>
        <div class="blog-paragraph">
            <h2 class="primary-title">解决方案</h2>
            <div>
                <pre class="pre-style">&lt;input type="text" v-model="fNum" @blur.prevent="loseFocus">
&lt;input type="password" v-model="password" @blur.prevent="loseFocus">

loseFocus() {
    window.scrollTo(0, 0);
}</pre>
            <p class="blog-paragraph-content">给input添加失去焦点事件，在键盘回滚后，重新使得页面也进行回滚。</p>
            <p class="blog-paragraph-content">这样虽然能够解决点击事件失效的问题，但是会导致页面上下鬼畜滚动几次,原因是每次输入完后点击另一个input就会触发回滚，导致页面抖动</p>
            <p class="blog-paragraph-content">解决方案：</p>
            <pre class="pre-style">&lt;input type="text" v-model="fNum" @blur.prevent="loseFocus" @click="focus">
&lt;input type="password" v-model="password" @blur.prevent="loseFocus" @click="focus">

// 从input到另一个input时不触发失去焦点方法
focus() {
    clearTimeout(this.timer)
},
// 失去焦点后让页面回弹防止ios键盘导致页面点击事件消失
loseFocus() {
    this.timer = setTimeout(() => {
        console.log('失去焦点')
        window.scrollTo(0, 0);
    }, 200);
}               </pre>
            </div>
        </div> 
    </div>        
</template>
