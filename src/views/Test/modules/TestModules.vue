<template>
  <button @click="triggerTest('@@@')">测试TEST</button>

  <slot name="test">
    <span>TEST子组件</span>
  </slot>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'TestModules',
  // 子组件中需要声明：
  props: ['msg'],
  // 全新的配置项：(在定义了自定义事件后不使用的话会警告)
  emits: ['hello'],
  setup(props, context) {
    // vue3中computed与vue2语法一样：
    let personObj = computed({
      name: 'a',
      age: 22
    });
    console.log('上下文对象', context.attrs, context.slots, context.emit);
    function triggerTest() {
      // 原先vue2中的this.$emit改为这种：第个参数是触发的事件名
      context.emit('hello', 666);
    }

    return {
      personObj,
      triggerTest
    };
  }
};
</script>

<style></style>
