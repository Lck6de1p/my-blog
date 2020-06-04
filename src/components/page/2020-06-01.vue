<template>
    <div class="blog-content">
        <h1 class="blog-content-title">动态规划</h1>
        <div class="iconfont-wrapper">
            <span class="iconfont icon-bussiness-man-fill" data="lck"></span>
            <span class="iconfont icon-clock-fill" data="2020-06-01"></span>
        </div>
        <div class="blog-paragraph">
            <div>
                <p class="blog-paragraph-content">一个人走台阶，一次走1步或者2步，如果有n级台阶，一共有几种走法？</p>
                <p class="blog-paragraph-content">第一个想法是递归,动手开撸</p>
                <pre class="pre-style">// 递归
function goUpstairs(n) {
    if (n == 0) {
       return 0;
    } else if (n == 1) {
        return 1;
    } else if (n == 2) {
        return 2;
    } else {
        return goUpstairs(n - 1) + goUpstairs(n - 2);
    }
}               </pre>
                <p class="blog-paragraph-content">可是若n很大很大的时候，goUpstairs函数会重复计算很多很多次导致程序无法运行。</p>
                <p class="blog-paragraph-content">优化-->用动态规划解决</p>
                <pre class="pre-style">// 动态规划
function goUpstairs(num) {
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i &lt; num + 1; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[num];
}               </pre>
                <p class="blog-paragraph-content">动态规划把第n级台阶能走的种类给存在dp数组里，以避免重复计算。</p>
                <p class="blog-paragraph-content">利用动态规划解决背包问题。</p>
                <p class="blog-paragraph-content">假设一个容量为capacity的背包，有n件物品， 计算在不超出容量的前提下，背包内的商品价值最高。</p>
                <pre class="pre-style">// 动态规划解决背包问题
function dp(capacity, weight, value) {
    let packageValue = []
    for (let i = 0; i &lt; weight.length + 1; i++) {
        let arr = new Array(capacity + 1).fill(0)
        packageValue.push(arr)
    }
    for (let i = 1; i &lt;= weight.length; i++) {
        for (let j = 1; j &lt;= capacity; j++) {
            if (weight[i - 1] &lt;= j) {
                packageValue[i][j] = Math.max(packageValue[i - 1][j], value[i - 1] + packageValue[i - 1][j - weight[i - 1]]);
            } else {
                packageValue[i][j] = packageValue[i - 1][j]
            }
        }
    }
    console.log(packageValue)
}
let weight = [1, 3, 10, 20, 40];
let value = [10, 11, 60, 100, 120];
let capacity = 50;
dp(capacity, weight, value);           </pre>
            </div>
        </div>
    </div>
</template>
