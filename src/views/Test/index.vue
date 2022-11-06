<template>
  <div id="common-page">
    <h2>
      <router-link to="/TEST/timeSpan" style="color: #fff">TEST</router-link>
    </h2>
    <br />
    <hr />

    <br />
    <div>
      <button @click="personObj.age++">lili年龄+1</button>
    </div>

    <br />
    <TestModules ref="modules" msg="Test Msg" @hello="handleHello">
      <template v-slot:test>
        <div>
          <span>TEST插槽</span>
          <br />
          <button @click="triggerTest('@@@')">测试TEST</button>
        </div>
      </template>
    </TestModules>

    <!-- pinia -->
    <!-- <div>
      <h2>name: {{ name }}</h2>
      <h2>area: {{ area }}</h2>
      <h2>age: {{ age }}</h2>
      <button @click="ageIncrease()">+</button>
    </div>
    <br />
    <br /> -->

    <!-- vuex4，先注释 -->
    <!-- <div class="content">
      <h2>{{ $store.state.counter }}</h2>
      <br />
      <button>查看日期</button>
    </div> -->
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
// import { storeToRefs } from 'pinia';
import TestModules from './modules/TestModules';
// import { useTestStore } from '@/store/modules/test.js';

const personObj = reactive({
  name: 'lili',
  age: 20,
});

// 监听reactive定义的一个对象中的某个属性此时捕捉不到旧值
// -打印仍为新值;
// -且强制开启deep，配置无效
watch(
  personObj,
  (newVal, oldVal) => {
    console.log('新值：', newVal);
    console.log('旧值：', oldVal);
  },
  { deep: false }
);

function handleHello(value) {
  alert(`TEST已被触发, ${value}`);
  // setup接收context，可以使用：
}

function triggerTest(value) {
  console.log('value: ', value);
}

// pinia：
// 使用state数据：
// const store = useTestStore();
// console.log('store: ', store, store.age);
// let { name, area, age } = storeToRefs(store); // 使用解构将失去响应式，利用storeToRefs解决。
// const { name, area } = store;
// let age = ref(store.age); // 或者可以用ref单独写。
// function ageIncrease() {
//   age.value++;
//   console.log(age, store.age);
// }
</script>

<style scoped>
.content {
  width: 100%;
  text-align: center;
}
</style>
