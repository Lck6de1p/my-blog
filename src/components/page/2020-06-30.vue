<template>
    <div class="blog-content">
        <h1 class="blog-content-title">{{title}}</h1>
        <div class="iconfont-wrapper">
            <span class="iconfont icon-bussiness-man-fill" data="lck"></span>
            <span class="iconfont icon-clock-fill" data="2020-06-30"></span>
        </div>
        <div class="blog-paragraph">
            <div>
                <p class="blog-paragraph-content">谈深浅拷贝前，先说一下js的类型</p>
                <p class="blog-paragraph-content">js基础类型包括：number，string，null，undefined，Boolean。es6新增了一种基础类型symbol,基础类型的存储是存放在栈中，原因是基础类型存储的空间很小，存放在栈（stack）中方便查找，且不易于改变。</p>
                <pre class="pre-style">var a = 10;
var b = a;
b = 20;
console.log(a); // 10
                </pre>
                <img src="../../assets/img/2020-06-30/stack.png" alt="" class="img-chart">
                <p class="blog-paragraph-content">引用类型是指有多个值构成的对象，也就是对象类型比如：Object,Array,Function,Data等，js的引用数据类型是存储在堆中（heap），也就是说存储的变量处的值是一个指针（point），指向存储对象的内存地址。</p>
                <pre class="pre-style">var obj1 = {};
var obj2 = obj1;
obj2.name = "lck";
console.log(obj1.name); // lck
                </pre>
                <img src="../../assets/img/2020-06-30/2.png" alt="" class="img-chart">
                <p class="blog-paragraph-content">这种情况就是浅拷贝，如何去避免这种情况？</p>
                <p class="blog-paragraph-content">深拷贝最直接简单的方式</p>
                <pre class="pre-style"> obj2 = JSON.parse(JSON.stringify(obj1));</pre>
                <p class="blog-paragraph-content">JSON转化也有它的局限性，例如对象中存在undefined，或者function的时候，转化过后会导致这些字段丢失</p>
                <p class="blog-paragraph-content">如何更好的实现深拷贝</p>
                <pre class="pre-style">function deepCopy(target, source) {
    if (!source || typeof source !== 'object') return
    if (!target || typeof target !== 'object') return
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            if (source[key] && typeof source[key] == 'object') {
                // 若key值还是对象或者数组，经行递归操作
                target[key] = Array.isArray(source[key]) ? [] : {};
                deepCopy(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        }
    }
}
let obj1 = {
    name: 'lck',
    age: 23,
    card: [1,2,3,4],
    hobby: undefined,
    sum: function() { return this.name + this.age; }
};
let obj2 = {};
let obj3 = JSON.parse(JSON.stringify(obj1)); 
deepCopy(obj2, obj1);
obj1.name = 'lck6de1p'
console.log(obj1, obj2, obj3);
console.log(obj1.sum());
                </pre>
                <p class="blog-paragraph-content">结果</p>
                <img src="../../assets/img/2020-06-30/result.png" alt="" class="img-chart">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            title: '深拷贝&&浅拷贝'
        }
    }
}
</script>
