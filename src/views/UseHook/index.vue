<template>
  <div>
    <p>====UseHook====</p>
    <span>x:{{ position.x }}</span>
    <span>y:{{ position.y }}</span>
  </div>
</template>

<script setup>
import savePosition from '../../hooks/usePosition';

const position = savePosition();

// 以下代码已被抽离至：hooks =》usePosition
// const position = reactive({
//   x: 0,
//   y: 0
// });

// // // 组件挂载后执行
// // onMounted(() => {
// //   // 这种写法的问题：组件卸载前销毁该事件时无法操作：
// //   window.addEventListener('click', function (event) {
// //     console.log('FROM UseHook position: ', event.pageX, event.pageY);
// //     // 数据为响应式：
// //     position.x = event.pageX;
// //     position.y = event.pageY;
// //   });
// // });

// // 基于以上问题，改为这样（将点击事件的回调拎出去）：
// onMounted(() => {
//   // 事件回调写进来：
//   window.addEventListener('click', savePosition);
// });

// function savePosition(event) {
//   console.log('FROM UseHook position: ', event.pageX, event.pageY);
//   // 数据为响应式：
//   position.x = event.pageX;
//   position.y = event.pageY;
// }

// // 需要注意的是，当组件被卸载时该事件也该失效，所以要在卸载前另外处理下：
// onBeforeUnmount(() => {
//   // 这里需要两个参数：1.移除的事件；2.移除的事件所对应的回调。
//   window.removeEventListener('click', savePosition);
// });
</script>

<style></style>
