<template>
  <div>
    <button @click="personObj.age++">lili年龄+1</button>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
export default {
  name: "Test",
  setup() {
    const personObj = reactive({
      name: "lili",
      age: 20,
    });

    // 监听reactive定义的一个对象中的某个属性此时捕捉不到旧值
    // -打印仍为新值;
    // -且强制开启deep，配置无效
    watch(
      personObj,
      (newVal, oldVal) => {
        console.log("新值：", newVal);
        console.log("旧值：", oldVal);
      },
      { deep: false }
    );

    return {
      personObj,
    };
  },
};
</script>

<style></style>
