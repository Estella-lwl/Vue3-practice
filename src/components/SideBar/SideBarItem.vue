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

const route = useRoute(); // 路由信息
console.log('route', route, route.path);
const router = useRouter(); // 全局路由实例
// computed(function isActive() {
//   // $route：哪个路由处于活跃就是哪一个的对象， 判断是否对应当前路径
//   console.log('路径', path);
//   return path.indexOf(props.link) !== -1;
// });
let isActive = computed(() => {
  // return 'router.currentRoute._rawValue.path'.indexOf(props.link) !== -1; 这种也可以拿到当前路径
  return route.path.indexOf(props.link) !== -1;
});
console.log(isActive.value);

// 侧边栏切换
function switchView() {
  // 点击切换路径
  if (route.path !== props.link) {
    router.replace(props.link);
    console.log('router: ', router);
  } else {
    // 避免重复跳转导致警告：
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
