<template>
  <div>
    <input type="text" v-model="num" />
    <p>{{ `这是一个由customRef定义的数据，当前值为${num}` }}</p>
    <p>{{ num }}</p>
  </div>
</template>

<script setup>
import { customRef } from 'vue';

// 使用customRef自定义一个ref：
function myRef(initVal, delay) {
  let timer;
  // customRef接收两个参数：
  return customRef((track, trigger) => {
    // 下面的返回是customRef规定的：
    return {
      get() {
        console.log('正在读value：', initVal);
        // 在return之前通知vue追踪数据
        track();
        return initVal;
      },
      set(newVal) {
        console.log('正在修改value：', newVal);
        // // 只有把新值赋回给初始值的变量才能动态的变化起来：
        // initVal = newVal;
        // // 通知vue重新解析模板：所以这里可以自定义的使用值。比如规定3秒后再执行。
        // trigger();

        // 这离开了定时器会出现一个状况：当输入速度太快，等到了页面刷新时，部分被积压的输入被刷掉，页面上能看到输入在回退。
        // 解决办法：先定义一个timer变量赋值为定时器，每次进来执行前先清除定时器。（参考js防抖的原理）
        clearTimeout(timer);
        timer = setTimeout(() => {
          // 只有把新值赋回给初始值的变量才能动态的变化起来：
          initVal = newVal;
          // 通知vue重新解析模板：所以这里可以自定义的使用值。比如规定3秒后再执行。
          trigger();
        }, delay);
      }
    };
  });
}

let num = myRef(0, 500);
console.log('myRef自定义的数据:', num);
</script>

<style></style>
