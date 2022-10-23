<template>
  <div id="common-page">
    <h2>
      <router-link to="/TEST/timeSpan" style="color: #fff">TEST</router-link>
    </h2>

    <div>
      <button @click="personObj.age++">lili年龄+1</button>
    </div>

    <TestModules ref="modules" msg="Test Msg" @hello="handleHello">
      <template v-slot:test>
        <div>
          <span>TEST插槽</span>
          <button @click="triggerTest('@@@')">测试TEST</button>
        </div>
      </template>
    </TestModules>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
import TestModules from './modules/TestModules';

export default {
  name: 'Test',
  components: {
    TestModules,
  },
  setup() {
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

    return {
      personObj,
      handleHello,
      triggerTest,
    };
  },
};
</script>

<style></style>
