<template>
  <div></div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';

const num = ref(0);
const msg = ref('hello');

let obj = reactive({
  name: '',
  age: 30,
  hobby: {
    food: 'anything'
  }
});

// 情况1. 当监视一个ref定义的数据时：
watch(
  num,
  (newVal, oldVal) => {
    console.log('', newVal, oldVal);
  },
  { immediate: false }
);

// 情况2. 当监视多个ref定义的数据时：
watch(
  [num, msg],
  (newVal, oldVal) => {
    console.log('', newVal, oldVal);
  },
  { immediate: false }
);

// 情况3. 当监视reactive定义的全部数据时：
// 注意：
//    1.此时无法拿到正确的oldValue。
//    2.默认开启deep；且修改无效。
watch(
  obj.age,
  (newVal, oldVal) => {
    console.log('', newVal, oldVal);
  },
  { deep: false }
);

// 情况4. 当监视多个reactive定义的数据中的某一个属性时：
// 注意：当监视这种数据时，watch的第1个形参需要是一个函数，函数里要有返回值,监视谁就返回谁。
// 这时oldValue正确。
watch(
  () => {
    return obj.age;
  },
  (newVal, oldVal) => {
    console.log('', newVal, oldVal);
  },
  { deep: false }
);

// 情况5. 当监视多个reactive定义的数据中的某一些属性时：
// 注意：当监视这种数据时，watch的第1个形参需要是一个数组，监视几个数据里面就包几个函数。
// 这时oldValue正确。
watch(
  [
    () => {
      return obj.name;
    },
    () => {
      return obj.age;
    }
  ],
  (newVal, oldVal) => {
    console.log('', newVal, oldVal);
  },
  { deep: false }
);

// 特殊的情况6. 当监视reactive定义的数据中的对象属性时：
// 注意：当监视这种数据时，watch的第1个形参需要是一个数组，监视几个数据里面就包几个函数。
// oldValue无法获取。
watch(
  () => {
    return obj.hobby;
  },
  (newVal, oldVal) => {
    console.log('', newVal, oldVal);
  },
  { deep: false }
);
</script>

<style></style>
