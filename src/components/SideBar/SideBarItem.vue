<template>
  <div class="common-sider-btn" @click="switchView">
    <!-- 为了可复用，写为插槽的形式(活跃状态 & 非活跃)： -->
    <div v-if="!isActive">
      <slot name="item-icon" class="common-sider-btn"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active" class="common-sider-btn"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router'; // 注意这里的引用

const props = defineProps({
  link: {
    type: String,
    require: true,
  },
});

console.log('******props：', props, props.link);
console.log(useRoute());
// TODO:
// 侧边栏切换
const path = useRoute(); // 路由信息
console.log('path', path);
const router = useRouter(); // 全局路由实例
console.log('路径', router.currentRoute._rawValue.path, router, props.link);
// computed(function isActive() {
//   // $route：哪个路由处于活跃就是哪一个的对象， 判断是否对应当前路径
//   console.log('路径', path);
//   return path.indexOf(props.link) !== -1;
// });
// console.log(
//   '!!!!!!!!!!!!!',
//   path.currentRoute._rawValue.path.indexOf(props.link) !== -1
// );
let isActive = computed(() => {
  console.log('路径2', router.currentRoute._rawValue.fullPath);
  return 'router.currentRoute._rawValue.path'.indexOf(props.link) !== -1;
  // return true;
});
console.log(isActive.value);

// 侧边栏切换
function switchView() {
  console.log('link: ', props.link);
  // 避免重复跳转导致警告：
  if (path !== props.link) {
    // this.$router.replace(this.link);
    router.replace(props.link);
    console.log('router: ', router);
  } else {
    console.log('请勿重复点击');
  }
}
</script>

<style>
.common-sider-btn {
  width: 0.7rem;
  height: 0.7rem;
  outline: none;
  border: none;
  background-color: transparent;
  margin-bottom: 0.3rem;
  /* cursor: pointer; */
}
</style>
