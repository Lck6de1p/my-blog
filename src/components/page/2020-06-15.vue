<template>
    <div class="blog-content">
        <h1 class="blog-content-title">原生写一个折线图</h1>
        <div class="iconfont-wrapper">
            <span class="iconfont icon-bussiness-man-fill" data="lck"></span>
            <span class="iconfont icon-clock-fill" data="2020-06-15"></span>
        </div>
        <div class="blog-paragraph">
            <h2 class="primary-title">起因</h2>
            <div>
                <p class="blog-paragraph-content">后台项目中需要一个记录收入的折线统计图，但是又不想因为一张折线图就引入整个echart，造成浪费，所以准备用原生敲一个折线图！</p>
            </div>
        </div>
        <div class="blog-paragraph">
            <h2 class="primary-title">css部分</h2>
            <div>
                <pre class="pre-style">.result-xy {
        height: 248px; width: 668px;
        max-width: calc(100% - 40px);
        margin: 80px 0 80px 40px;
        font-size: 0;
        border-top: 1px solid #E0E2E6;  border-bottom: 1px solid #E0E2E6;
        background: linear-gradient(to top, #E0E2E6, #E0E2E6 1px, transparent 1px);
        background-size: 100% 50px;
        position: relative;
        text-align: center;
    }
    .result-xy::after {
        content: '10 \A 8 \A 6 \A 4 \A 2 \A 0';
        white-space: pre-wrap;
        position: absolute;
        font-size: 14px;
        line-height: 50px;
        top: -26px; left: -1.5em;
    }
    .result-bg {
        display: inline-block;
        width: calc((100% - 16px * 13) / 12); height: 100%;
        background-color: #eee;
        position: relative;
    }
    .result-bg + .result-bg {
        margin-left: 16px;
    }
    .result-bg::after {
        content: attr(data-month)'月';
        position: absolute;
        bottom: -2em;
        left: 0; right: 0;
        text-align: center;    
        font-size: 12px;
        color: gray;
    }
    .result-bar {
        position: absolute;
        width: 100%;
        bottom: 0; left: 0;
        background-color: #69a8f7;
    }
    .result-bar > s {
        position: absolute;
        width: 6px; height: 6px;
        background-color: #fff;
        color: #97cd74;
        border: 2px solid;
        border-radius: 50%;
        top: 15px; left: 0; right: 0;
        margin: auto;
    }
    .result-bar i[line] {
        position: absolute;
        box-sizing: border-box;
        border-left: 3px solid #fff; border-right: 3px solid #fff;
        height: 2px;
        background-color: #97cd74;
        transform-origin: left center;
        left: 50%; top: 50%; margin-top: -1px;
        -ms-pointer-events: none;
        pointer-events: none;
        z-index: 1;
    }           </pre>
            </div>
        </div>
        <div class="blog-paragraph">
            <h2 class="primary-title">html部分</h2>
            <div>
                <pre class="pre-style">&lt;div id="chartX" class="result-xy">
    &lt;div class="result-bg" data-month="1">
        &lt;span class="result-bar" style="height: 50%">&lt;s title="5">&lt;/s>&lt;/span>
    &lt;/div>
    ...
    &lt;div class="result-bg" data-month="12">
        &lt;span class="result-bar" style="height: 92%">&lt;s title="9.2">&lt;/s>&lt;/span>
    &lt;/div>
&lt;/div>   </pre>
            </div>
        </div>
        <div class="blog-paragraph">
            <h2 class="primary-title">JS部分</h2>
            <div>
                <pre class="pre-style">var eleDots = document.querySelectorAll('#chartX s');
// 这个是折线方法
var fnLineChart = function (eles) {
    eles.forEach(function (ele, index) {
        var eleNext = eleDots[index + 1];
        if (!eleNext) { return;  }
        var eleLine = ele.querySelector('i');
        if (!eleLine) {
            eleLine = document.createElement('i');
            eleLine.setAttribute('line', '');
            ele.appendChild(eleLine);
        }
        // 记录坐标
        var boundThis = ele.getBoundingClientRect();
        // 下一个点的坐标
        var boundNext = eleNext.getBoundingClientRect();
        // 计算长度和旋转角度
        var x1 = boundThis.left, y1 = boundThis.top;
        var x2 = boundNext.left, y2 = boundNext.top;
        // 长度
        var distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        // 旋转
        var radius = Math.atan((y2 - y1) / (x2 - x1));
        // 设置线条样式
        eleLine.style.width = distance + 'px';
        eleLine.style.msTransform = 'rotate('+ radius +'rad)';
        eleLine.style.transform = 'rotate('+ radius +'rad)';
    });
};

// 调用折线方法
fnLineChart(eleDots);
// 浏览器尺寸改变时候
window.addEventListener('resize', function () {
    fnLineChart(eleDots);
});             </pre>
            </div> 
        </div>
        <div class="blog-paragraph">
            <h2 class="primary-title">效果</h2>
            <img src="../../assets/img/chart.jpg" alt="" class="img-chart">
        </div>
    </div>       
</template>
<style lang="scss" scoped>
    .img-chart {
        width: 100%;
    }
</style>
